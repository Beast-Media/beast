/**
 * Generated by otqs v1.0.0 🍺
 * Do not edit manually.
 * @beast/backend
 * OpenAPI spec version: 0.0.1
 */
import type { SeasonWithEpisodesEpisodesItem } from "./seasonWithEpisodesEpisodesItem";

export interface SeasonWithEpisodes {
  episodes: SeasonWithEpisodesEpisodesItem[];
  id: string;
  image: string | null;
  name: string;
  overview: string | null;
  season_number: number;
  showId: string;
}