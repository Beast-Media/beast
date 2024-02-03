
export interface ProductionCompany {
  id: number;
  logo_path?: string | null;
  name: string;
  origin_country?: string | null;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface TMDBMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string | null;
  adult: boolean;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string | null;
  } | null;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  imdb_id: string;
  original_language: string;
  original_title: string;
  production_companies?: ProductionCompany[] | null;
  production_countries?: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  video: boolean;
  vote_average?: number;
  vote_count?: number;
  popularity: number;
}


export interface TMDBConfig {
  apiKey?: string;
  endpointUrl: string;
}
