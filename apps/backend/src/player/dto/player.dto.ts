import { Media } from '@prisma/client';
import { ChildProcessWithoutNullStreams } from 'child_process';

export type PlayerId = string;

export interface PlayerSettings {
  media: Media['id'];
  seek: number;
}

export interface Player {
  id: PlayerId;
  settings: PlayerSettings;
  ffpmegProcess: ChildProcessWithoutNullStreams;
}

export interface QueryPlayer {
  id: PlayerId;
}

export interface SeekPlayer {
  id: PlayerId;
  seek: number;
}

export interface StartPlayerResponse {
  id: PlayerId;
  duration: number;
}
