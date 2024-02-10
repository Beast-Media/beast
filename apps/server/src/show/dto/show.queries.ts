import { Episode } from './episode.dto';
import { Season } from './season.dto';
import { Show } from './show.dto';

export interface QueryShow {
  showId: Show['id'];
}

export interface QueryEpisode {
  episodeId: Episode['id'];
}

export interface QuerySeason {
  seasonId: Season['id'];
}
