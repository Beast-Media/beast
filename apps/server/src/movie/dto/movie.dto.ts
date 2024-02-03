import { Movie } from '@prisma/client';

export interface MovieDTO extends Movie {}

export interface QueryMovie {
  movieId: Movie['id'];
}
