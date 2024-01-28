import { Media } from '@prisma/client';
import { ChildProcessWithoutNullStreams } from 'child_process';
import { MediaWithStreams } from 'src/media/dto/media.dto';

export type PlayerId = string;

export interface PlayerSettings {
  mediaId: Media['id'];
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

export interface StartedPlayerInfos {
  id: PlayerId;
  settings: PlayerSettings;
  media: MediaWithStreams;
}
