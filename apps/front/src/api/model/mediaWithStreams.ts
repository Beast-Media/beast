/**
 * Generated by otqs v1.0.0 🍺
 * Do not edit manually.
 * @beast/server
 * OpenAPI spec version: 0.0.1
 */
import type { MediaStream } from "./mediaStream";

export interface MediaWithStreams {
  bitrate: number;
  duration: number;
  height: number;
  id: string;
  path: string;
  streams: MediaStream[];
  width: number;
}
