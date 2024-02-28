import { Injectable } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';
import { mkdir, readdir } from 'fs/promises';
import { join } from 'path';
import { TasksService } from 'src/tasks/tasks.service';
import { MediaService } from 'src/media/media.service';
import { TMDBService } from '@beast/tmdb';
import { Movie, MovieEntity } from './dto/movie.dto';
import { Library } from 'src/library/dto/library.dto';
import { ImageService } from 'src/image/image.service';

@Injectable()
export class MovieService {
  constructor(
    private tmdb: TMDBService,
    private tasksService: TasksService,
    private mediaService: MediaService,
    private configService: ConfigService,
    private imageService: ImageService,
  ) {}

  async getMovie(id: Movie['id']): Promise<Movie> {
    return MovieEntity.findOneOrFail({
      where: { id },
    });
  }

  matchMovieFile(path: string): number | null {
    const match = path.match(
      /^(?<movieTitle>.+?) \((?<releaseYear>.+)\) (?<qualityFull>\S+) ID(?<tmdbId>\d+)ID\.(mkv|mp4|avi)/,
    );
    if (!match || !match.groups) return null;

    if (match.groups.tmdbId) return Number(match.groups.tmdbId);
    else return null;
  }

  async scanMovie(moviePath: string, library: Pick<Library, 'id' | 'path'>) {
    const metadataFolder = this.configService.getMetadatasPath();
    const files = await readdir(
      join(this.configService.getLibrariesRoot(), moviePath),
      { recursive: true },
    );

    for (const file of files) {
      const match = this.matchMovieFile(file.split('/').reverse()[0]);
      if (!match) {
        continue;
      }
      const movie = await this.tmdb.getMovie(match);
      if (!movie) {
        continue;
      }

      const media = await this.mediaService.createMediaFromIndexing({
        libraryId: library.id,
        path: join(moviePath, file),
      });

      await MovieEntity.create({
        ...(await MovieEntity.findOne({ where: { tmdbId: match } })),
        name: movie.title,
        overview: movie.overview,
        images: await this.imageService.downloadAndStore(
          `https://image.tmdb.org/t/p/original${movie.poster_path}`,
          metadataFolder,
          {
            medium: { width: 160 * 2, height: 234 * 2, fit: 'cover' },
            small: { width: 160, height: 234, fit: 'cover' },
          },
        ),
        tmdbId: match,
        library: { id: library.id },
        media: { id: media.id },
      }).save();
    }
  }

  async scanMovies(library: Library) {
    const metadataFolder = this.configService.getMetadatasPath();
    await mkdir(join(metadataFolder, 'images'), { recursive: true });

    const movieFolders = await readdir(
      join(this.configService.getLibrariesRoot(), library.path),
    );
    for (const movieFolder of movieFolders) {
      this.tasksService.queueTask({
        name: 'index_movie',
        library,
        moviePath: join(library.path, movieFolder),
      });
    }
  }
}
