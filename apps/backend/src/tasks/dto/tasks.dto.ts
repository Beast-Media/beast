import { Library, Movie } from '@prisma/client';

export interface IndexShowTask {
  name: 'index_show';
  showPath: string;
  library: Pick<Library, 'id' | 'path'>;
}

export interface IndexMovieTask {
  name: 'index_movie';
  movieId: Movie['id'];
}

export type Task = IndexShowTask | IndexMovieTask;
