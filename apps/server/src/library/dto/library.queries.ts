import { User } from 'src/auth/dto/user.dto';
import { Library, LibraryAccess } from './library.dto';
import { Movie } from 'src/movie/dto/movie.dto';
import { Show } from 'src/show/dto/show.dto';

export interface CreateLibrary
  extends Pick<Library, 'name' | 'path' | 'type'> {}

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

export interface EditLibraryPermissions {
  libraryId: Library['id'];
  add?: { userId: User['id']; access: LibraryAccess['access'] }[];
  remove?: { userId: User['id']; access: LibraryAccess['access'] }[];
}

export interface QueryFilesystem {
  root: string;
}
