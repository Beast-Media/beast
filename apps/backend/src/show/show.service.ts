import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/commons/prisma/prisma.service';
import { Episode, Library, Season, Show } from '@prisma/client';
import { SeasonWithEpisodes, ShowWithSeasons } from './dto/show.dto';
import { mkdir, readdir, writeFile } from 'fs/promises';
import { assertEquals } from 'typia';
import { join } from 'path';
import { TVMazeService } from 'src/tvmaze/tvmaze.service';
import { ConfigService } from 'src/config/config.service';
import { createHash } from 'crypto';
import { MediaService } from 'src/media/media.service';
import { IndexingMedia } from 'src/media/dto/media.dto';

interface TvShowMatch {
  seriesTitle: string;
  season: number;
  episode: number;
  episodeTitle: string;
  qualityFull: string;
  tvmazeId: number;
}

type MapValue<T> = T extends Map<any, infer V> ? V : never;

interface ComposedShow {
  show: Omit<Show, 'id'>;
  seasons: Map<
    number,
    {
      season: Omit<Season, 'id' | 'showId'>;
      episodes: Map<
        number,
        {
          episode: Omit<Episode, 'id' | 'mediaId' | 'seasonId'>;
          media: IndexingMedia;
        }
      >;
    }
  >;
}

@Injectable()
export class ShowService {
  constructor(
    private prisma: PrismaService,
    private tvmaze: TVMazeService,
    private configService: ConfigService,
    private mediaService: MediaService,
  ) {}

  async getShow(id: Show['id']): Promise<ShowWithSeasons> {
    return this.prisma.show.findFirstOrThrow({
      where: { id },
      include: { seasons: true },
    });
  }

  async getSeason(id: Season['id']): Promise<SeasonWithEpisodes> {
    return this.prisma.season.findFirstOrThrow({
      where: { id },
      include: { episodes: true },
    });
  }

  async getEpisode(id: Episode['id']): Promise<Episode> {
    return this.prisma.episode.findFirstOrThrow({
      where: { id },
    });
  }

  matchTvShowFile(path: string) {
    const match = path.match(
      /^(?<seriesTitle>.+?) - S(?<season>\d{2})E(?<episode>\d{2}) - (?<episodeTitle>.+?) (?<qualityFull>\S+) ID(?<tvmazeId>\d+)ID\.mkv/,
    );
    if (!match || !match.groups) return null;

    const newGroup = { ...match.groups } as unknown as TvShowMatch;

    if (match.groups.episode) {
      newGroup.episode = Number(match.groups.episode);
    }

    if (match.groups.season) {
      newGroup.season = Number(match.groups.season);
    }

    if (match.groups.tvmazeId)
      newGroup.tvmazeId = Number(match.groups.tvmazeId);

    return assertEquals<TvShowMatch>(newGroup);
  }

  async markAsUnmatched({
    reason,
    file,
  }: {
    reason: 'filename' | 'tvShow' | 'season' | 'episode';
    file: string;
    library: Library['id'];
  }) {
    console.log('not matched', reason, file);
  }

  async storeImage(imageUrl: string, root: string): Promise<string> {
    const res = await fetch(imageUrl);
    const buffer = Buffer.from(await res.arrayBuffer());
    const hashSum = createHash('sha256');
    hashSum.update(buffer);
    const finalName = `images/${hashSum.digest('hex')}.jpg`;
    const path = join(root, finalName);
    await writeFile(path, buffer);
    return finalName;
  }

  async scanShows(library: Library) {
    const metadataFolder = this.configService.getMetadatasPath();
    await mkdir(join(metadataFolder, 'images'), { recursive: true });
    const files = await readdir(library.path, { recursive: true });

    const composedShows = new Map<number, ComposedShow>();

    for (const file of files) {
      const match = this.matchTvShowFile(file.split('/').reverse()[0]);
      if (!match) {
        this.markAsUnmatched({ reason: 'filename', file, library: library.id });
        continue;
      }

      const showMeta = await this.tvmaze.getTVShowMeta(match.tvmazeId);
      if (!showMeta) {
        this.markAsUnmatched({ reason: 'tvShow', file, library: library.id });
        continue;
      }

      const seasonsMeta = await this.tvmaze.getTVShowSeasonsMeta(showMeta.id);
      const episodesMeta = await this.tvmaze.getTVShowEpisodesMeta(showMeta.id);

      const seasonMeta = seasonsMeta.find(
        ({ number }) => number === match.season,
      );
      const episodeMeta = episodesMeta.find(
        ({ number, season }) =>
          number === match.episode && season == match.season,
      );
      if (!episodeMeta || !seasonMeta) {
        this.markAsUnmatched({
          reason: !episodeMeta ? 'episode' : 'season',
          file,
          library: library.id,
        });
        continue;
      }

      const composedShow =
        composedShows.get(match.tvmazeId) ||
        ({
          show: {
            name: showMeta.name,
            tvmazeId: match.tvmazeId,
            libraryId: library.id,
            overview: showMeta.summary,
            image: showMeta.image?.original
              ? await this.storeImage(showMeta.image.original, metadataFolder)
              : null,
          },
          episodes: new Map(),
          medias: new Map(),
          seasons: new Map() as ComposedShow['seasons'],
        } as ComposedShow);

      const composedSeason = composedShow.seasons.get(match.season) ?? {
        episodes: new Map() as MapValue<ComposedShow['seasons']>['episodes'],
        season: {
          season_number: match.season,
          name:
            seasonMeta.name.length > 0
              ? seasonMeta.name
              : `Season ${match.season}`,
          overview: seasonMeta.summary,
          image: seasonMeta.image?.original
            ? await this.storeImage(seasonMeta.image.original, metadataFolder)
            : null,
        },
      };

      if (!composedSeason.episodes.has(match.episode)) {
        composedSeason.episodes.set(match.episode, {
          episode: {
            episode_number: match.episode,
            name: episodeMeta.name ?? `Episode ${match.episode}`,
            overview: episodeMeta.summary,
            image: episodeMeta.image?.original
              ? await this.storeImage(
                  episodeMeta.image.original,
                  metadataFolder,
                )
              : null,
          },
          media: {
            path: join(library.path, file),
            libraryId: library.id,
          },
        });
      }

      composedShow.seasons.set(match.season, composedSeason);
      composedShows.set(match.tvmazeId, composedShow);
    }

    for (const composedShow of composedShows.values()) {
      const dbShow = await this.prisma.show.upsert({
        where: { tvmazeId: composedShow.show.tvmazeId },
        create: composedShow.show,
        update: composedShow.show,
      });

      for (const composedSeason of composedShow.seasons.values()) {
        const dbSeason = await this.prisma.season.upsert({
          where: {
            showId_season_number: {
              showId: dbShow.id,
              season_number: composedSeason.season.season_number,
            },
          },
          create: { ...composedSeason.season, showId: dbShow.id },
          update: composedSeason.season,
        });

        for (const episodeAndMedia of composedSeason.episodes.values()) {
          const media = await this.mediaService.createMediaFromIndexing(
            episodeAndMedia.media,
          );

          const episodeData = {
            ...episodeAndMedia.episode,
            seasonId: dbSeason.id,
            mediaId: media.id,
          };
          await this.prisma.episode.upsert({
            where: {
              mediaId: media.id,
            },
            create: episodeData,
            update: episodeData,
          });
        }
      }
    }

    // TODO: remove shows / seasons / episode that does not have a file anymore or are empty
  }
}