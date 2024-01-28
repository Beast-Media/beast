type WebChannel = {
  id: number;
  name: string;
  country: string | null;
  officialSite: string;
};

export type TVMazeShow = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number | null;
  averageRuntime: number;
  premiered: string;
  ended: string | null;
  officialSite: string;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: string | null;
  } | null;
  webChannel: WebChannel | null;
  dvdCountry: string | null;
  externals: {
    tvrage: number | null;
    thetvdb: number;
    imdb: string;
  };
  image: {
    medium: string;
    original: string;
  } | null;
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode: {
      href: string;
    };
  };
};

export type TVMazeEpisode = {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating?: {
    average: number | null;
  } | null;
  image: {
    medium: string;
    original: string;
  } | null;
  summary: string | null;
  _links: {
    self: {
      href: string;
    };
    show: {
      href: string;
    };
  };
};

export type TVMazeSeason = {
  id: number;
  url: string;
  number: number;
  name: string;
  episodeOrder: number | null;
  premiereDate: string | null;
  endDate: string | null;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: string | null;
  } | null;
  webChannel: WebChannel | null;
  image: {
    medium: string;
    original: string;
  } | null;
  rating?: {
    average: number | null;
  } | null;
  summary: string | null;
  _links: {
    self: {
      href: string;
    };
  };
};
