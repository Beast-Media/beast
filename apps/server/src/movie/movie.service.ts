import { Injectable } from '@nestjs/common';
import { Library, Movie, ServerDBService } from '@beast/server-db-schemas';
import { ConfigService } from 'src/config/config.service';
import { MovieDTO } from './dto/movie.query';
import { mkdir, readdir } from 'fs/promises';
import { join } from 'path';
import { TasksService } from 'src/tasks/tasks.service';
import { MediaService } from 'src/media/media.service';
import sharp, { ResizeOptions } from 'sharp';
import { createHash } from 'crypto';
import { writeFile } from 'fs/promises';
import { TMDBService } from '@beast/tmdb';

@Injectable()
export class MovieService {
  constructor(
    private prisma: ServerDBService,
    private tmdb: TMDBService,
    private tasksService: TasksService,
    private mediaService: MediaService,
    private configService: ConfigService,
  ) {}

  async getMovie(id: Movie['id']): Promise<MovieDTO> {
    return this.prisma.movie.findFirstOrThrow({
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

  async storeImage(
    imageUrl: string,
    root: string,
    resizeVariants: Record<string, ResizeOptions>,
  ): Promise<string[]> {
    const res = await fetch(imageUrl);
    const buffer = Buffer.from(await res.arrayBuffer());

    const hashSum = createHash('sha256');
    hashSum.update(buffer);
    const hash = hashSum.digest('hex');

    const writeBuffer = async (buffer: Buffer, name: string) => {
      const filename = `images/${hash}-${name}.jpg`;
      const path = join(root, filename);
      await writeFile(path, buffer);
      return filename;
    };

    const images = [
      await sharp(buffer)
        .jpeg({ progressive: true, quality: 100 })
        .toBuffer()
        .then((buffer) => writeBuffer(buffer, 'original')),
    ];

    for (const [name, resize] of Object.entries(resizeVariants)) {
      const resizeBuffer = await sharp(buffer)
        .resize(resize)
        .jpeg({ progressive: true, quality: 100 })
        .toBuffer();
      const path = await writeBuffer(resizeBuffer, name);
      images.push(path);
    }
    return images;
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

      const movieData = {
        name: movie.title,
        overview: movie.overview,
        images: await this.storeImage(
          `https://image.tmdb.org/t/p/original${movie.poster_path}`,
          metadataFolder,
          {
            medium: { width: 160 * 2, height: 234 * 2, fit: 'cover' },
            small: { width: 160, height: 234, fit: 'cover' },
          },
        ),
        tmdbId: match,
        mediaId: media.id,
        libraryId: library.id,
      };

      await this.prisma.movie.upsert({
        where: {
          mediaId: media.id,
        },
        create: movieData,
        update: movieData,
      });
      // console.log(movie);
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
