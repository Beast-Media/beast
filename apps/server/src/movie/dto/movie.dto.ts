import { Movie } from '@beast/server-db-schemas';

export interface MovieDTO extends Movie {}

export interface QueryMovie {
  movieId: Movie['id'];
}
