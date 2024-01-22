import { Episode, Prisma, Season, Show } from '@prisma/client';

export interface ShowWithSeasons
  extends Prisma.ShowGetPayload<{ include: { seasons: true } }> {}

export interface SeasonWithEpisodes
  extends Prisma.SeasonGetPayload<{
    include: { episodes: true };
  }> {}
export interface EpisodeDTO extends Episode {}

export interface QueryShow {
  showId: Show['id'];
}

export interface QueryEpisode {
  episodeId: Episode['id'];
}

export interface QuerySeason {
  seasonId: Season['id'];
}
