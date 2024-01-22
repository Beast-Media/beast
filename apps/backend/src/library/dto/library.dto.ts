import { Library, Movie, Show } from '@prisma/client';

export interface CreateLibraryDTO extends Omit<Library, 'id' | 'createdAt'> {}

export interface LibraryDTO extends Library {}

export interface LibraryContentShow {
  type: 'TV_SHOWS';
  data: Show;
}
export interface LibraryContentMovie {
  type: 'MOVIES';
  data: Movie;
}
export type LibraryContent = LibraryContentShow[] | LibraryContentMovie[];

export interface QueryLibrary {
  libraryId: Library['id'];
}
