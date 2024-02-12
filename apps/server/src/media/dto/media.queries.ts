import { Library } from 'src/library/dto/library.dto';
import { Media } from './media.dto';
import { Movie } from 'src/movie/dto/movie.dto';
import { Season } from 'src/show/dto/season.dto';
import { Episode } from 'src/show/dto/episode.dto';
import { Show } from 'src/show/dto/show.dto';

export interface MediaAndWatchToken {
  media: Media;
  watchToken: string;
}

export interface IndexingMedia extends Pick<Media, 'path'> {
  libraryId: Library['id'];
}
export interface CreateMedia extends Omit<Media, 'id' | 'createdAt'> {}

export interface QueryMedia {
  mediaId: Media['id'];
}

export interface QueryPlayMedia {
  mediaId: Media['id'];
  seek: number;
  watchToken: string;
}

export type MediaContextDataBase =
  | {
      type: 'TV_SHOWS';
      show: Show;
      season: Season;
      episode: Episode;
    }
  | { type: 'MOVIES'; movie: Movie };

export interface MediaWithContext {
  mediaId: Media['id'];
  data: MediaContextDataBase;
}
