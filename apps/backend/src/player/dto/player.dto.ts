import { Media } from '@prisma/client';
import { ChildProcessWithoutNullStreams } from 'child_process';

export type PlayerId = string;

export interface PlayerResolution {
  width: number;
  height: number;
  bitrate?: number;
}

export interface PlayerSettingStream {
  type: 'audio' | 'subtitle' | 'video';
  index: number;
}

export interface PlayerSettings {
  mediaId: Media['id'];
  seek: number;
  streams: PlayerSettingStream[];
  resolution?: PlayerResolution;
}

export interface Player {
  id: PlayerId;
  settings: PlayerSettings;
  lastKeepalive: Date;
  ffpmegProcess: ChildProcessWithoutNullStreams;
}

export interface QueryPlayer {
  id: PlayerId;
}

export interface SeekPlayer {
  id: PlayerId;
  seek: number;
}

export interface StartedPlayerInfos {
  id: PlayerId;
  settings: PlayerSettings;
  availableResolutions: PlayerResolution[];
}
