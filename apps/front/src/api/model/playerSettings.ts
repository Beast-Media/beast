/**
 * Generated by otqs v1.0.0 🍺
 * Do not edit manually.
 * @beast/server
 * OpenAPI spec version: 0.0.1
 */
import type { PlayerResolution } from "./playerResolution";
import type { PlayerSettingStream } from "./playerSettingStream";

export interface PlayerSettings {
  mediaId: string;
  resolution?: PlayerResolution;
  seek: number;
  streams: PlayerSettingStream[];
}
