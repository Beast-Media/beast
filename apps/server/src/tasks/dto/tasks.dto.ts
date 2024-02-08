import { Library } from 'src/library/dto/library.dto';

export interface IndexShowTask {
  name: 'index_show';
  showPath: string;
  library: Pick<Library, 'id' | 'path'>;
}

export interface IndexMovieTask {
  name: 'index_movie';
  moviePath: string;
  library: Pick<Library, 'id' | 'path'>;
}

export type Task = IndexShowTask | IndexMovieTask;
