import { Injectable } from '@nestjs/common';
import { mkdir, readdir } from 'fs/promises';
import { assertEquals } from 'typia';
import { join } from 'path';
import { TVMazeService } from 'src/tvmaze/tvmaze.service';
import { ConfigService } from 'src/config/config.service';
import { TasksService } from 'src/tasks/tasks.service';
import {
  Show,
  ShowEntity,
  ShowWithLibray,
  ShowWithSeasons,
} from './dto/show.dto';
import { Library } from 'src/library/dto/library.dto';
import { Season, SeasonEntity, SeasonWithEpisodes } from './dto/season.dto';
import { Episode, EpisodeEntity } from './dto/episode.dto';
import { MediaService } from 'src/media/media.service';
import { TVMazeEpisode, TVMazeSeason } from 'src/tvmaze/tvmaze.dto';
import { ImageService } from 'src/image/image.service';

interface TvShowMatch {
  seriesTitle: string;
  season: number;
  episode: number;
  episodeTitle: string;
  qualityFull: string;
  tvmazeId: number;
}

interface FileMatch {
  match: TvShowMatch;
  path: string;
}

interface MatchedSeason {
  file: FileMatch;
  meta: TVMazeSeason;
}

interface MatchedEpisode {
  file: FileMatch;
  meta: TVMazeEpisode;
}

@Injectable()
export class ShowService {
  constructor(
    private tvmaze: TVMazeService,
    private configService: ConfigService,
    private tasksService: TasksService,
    private mediaService: MediaService,
    private imageService: ImageService,
  ) {}

  async getShow(id: Show['id']): Promise<ShowWithSeasons> {
    return ShowEntity.findOneOrFail({
      where: { id },
      relations: { seasons: true },
    });
  }

  async getShowWithLibrary(id: Show['id']): Promise<ShowWithLibray> {
    return ShowEntity.findOneOrFail({
      where: { id },
      relations: { library: true },
    });
  }

  async getSeason(id: Season['id']): Promise<SeasonWithEpisodes> {
    return SeasonEntity.findOneOrFail({
      where: { id },
      relations: { episodes: true },
    });
  }

  async getEpisode(id: Episode['id']): Promise<Episode> {
    return EpisodeEntity.findOneOrFail({
      where: { id },
    });
  }

  matchTvShowFile(path: string) {
    const match = path.match(
      /^(?<seriesTitle>.+?) - S(?<season>\d{2})E(?<episode>\d{2}) - (?<episodeTitle>.+?) (?<qualityFull>\S+) ID(?<tvmazeId>\d+)ID\.(mkv|mp4|avi)/,
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

    return {
      match: assertEquals<TvShowMatch>(newGroup),
      path,
    };
  }

  async saveShowCover(url: string) {
    const metadataFolder = this.configService.getMetadatasPath();
    return await this.imageService.downloadAndStore(url, metadataFolder, {
      medium: { width: 160 * 2, height: 234 * 2, fit: 'cover' },
      small: { width: 160, height: 234, fit: 'cover' },
    });
  }

  async saveEpisodeCover(url: string) {
    const metadataFolder = this.configService.getMetadatasPath();
    return await this.imageService.downloadAndStore(url, metadataFolder, {
      medium: { width: 256 * 2, height: 160 * 2, fit: 'cover' },
      small: { width: 256, height: 160, fit: 'cover' },
    });
  }

  async scanShow(showPath: string, library: Pick<Library, 'id' | 'path'>) {
    const files = await readdir(
      join(this.configService.getLibrariesRoot(), showPath),
      { recursive: true },
    );

    const filesMatchs = files
      .map((file) => this.matchTvShowFile(file))
      .filter((match) => !!match) as FileMatch[];

    if (filesMatchs.length == 0) return;

    const foundShow = filesMatchs[0].match;
    const showMeta = await this.tvmaze.getTVShowMeta(foundShow.tvmazeId);
    if (!showMeta) return;

    const [seasonsMeta, episodesMeta] = await Promise.all([
      this.tvmaze.getTVShowSeasonsMeta(showMeta.id),
      this.tvmaze.getTVShowEpisodesMeta(showMeta.id),
    ]);

    const matchedSeasons = seasonsMeta
      .map((meta) => ({
        file: filesMatchs.find(
          ({ match: { season } }) => meta.number === season,
        ),
        meta,
      }))
      .filter(({ file }) => !!file) as MatchedSeason[];

    if (matchedSeasons.length === 0) return;

    const matchedEpisodes = episodesMeta
      .map((meta) => ({
        file: filesMatchs.find(
          ({ match: { episode, season: s2 } }) =>
            meta.season === s2 && meta.number === episode,
        ),
        meta,
      }))
      .filter(({ file }) => !!file) as MatchedEpisode[];

    if (matchedEpisodes.length === 0) return;

    const showDb = await ShowEntity.create({
      ...(await ShowEntity.findOne({
        where: { tvmazeId: foundShow.tvmazeId },
      })),
      path: showPath,
      name: showMeta.name,
      tvmazeId: foundShow.tvmazeId,
      overview: showMeta.summary,
      images: showMeta.image?.original
        ? await this.saveShowCover(showMeta.image.original)
        : [],
      library: { id: library.id },
    }).save();

    for (const matchedSeason of matchedSeasons) {
      const seasonDb = await SeasonEntity.create({
        ...(await SeasonEntity.findOne({
          where: {
            season_number: matchedSeason.meta.number,
            show: { id: showDb.id },
          },
        })),
        show: { id: showDb.id },
        season_number: matchedSeason.meta.number,
        name:
          matchedSeason.meta.name.length > 0
            ? matchedSeason.meta.name
            : `Season ${matchedSeason.meta.number}`,
        overview: matchedSeason.meta.summary,
        images: matchedSeason.meta.image?.original
          ? await this.saveShowCover(matchedSeason.meta.image?.original)
          : [],
      }).save();

      const sesonEpisodes = matchedEpisodes.filter(
        ({ meta: { season } }) => season === matchedSeason.meta.number,
      );

      for (const episode of sesonEpisodes) {
        const media = await this.mediaService.createMediaFromIndexing({
          libraryId: library.id,
          path: join(showPath, episode.file.path),
        });

        await EpisodeEntity.create({
          ...(await EpisodeEntity.findOne({
            where: {
              season: { id: seasonDb.id },
              episode_number: episode.meta.number,
            },
          })),
          episode_number: episode.meta.number,
          name: episode.meta.name ?? `Episode ${episode.meta.number}`,
          overview: episode.meta.summary,
          images: episode.meta.image?.original
            ? await this.saveEpisodeCover(episode.meta.image?.original)
            : [],
          media: { id: media.id },
          season: { id: seasonDb.id },
        }).save();
      }
    }
  }

  async scanShows(library: Library) {
    const metadataFolder = this.configService.getMetadatasPath();
    await mkdir(join(metadataFolder, 'images'), { recursive: true });

    const showFolders = await readdir(
      join(this.configService.getLibrariesRoot(), library.path),
    );
    for (const showFolder of showFolders) {
      this.tasksService.queueTask({
        name: 'index_show',
        library,
        showPath: join(library.path, showFolder),
      });
    }
  }
}
