import {
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';
import { Player, PlayerId, PlayerSettings } from './dto/player.dto';
import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import { MediaService } from 'src/media/media.service';
import { dirname, join } from 'path';
import { ConfigService } from 'src/config/config.service';
import { mkdir, rm, readdir } from 'fs/promises';
import { FFmpegService } from 'src/ffmpeg/ffmpeg.services';
import { randomUUID } from 'crypto';
import { watch } from 'fs';
import { Media } from '@prisma/client';

@Injectable()
export class PlayerService
  implements OnApplicationShutdown, OnApplicationBootstrap
{
  private players = new Map<PlayerId, Player>();

  constructor(
    private mediaService: MediaService,
    private configService: ConfigService,
    private ffmpegService: FFmpegService,
  ) {}

  async onApplicationBootstrap() {
    const folders = await readdir(this.configService.getTranscodePath());
    console.log('Cleaning old transcoded buffers');
    for (const folder of folders) {
      console.log(folder);
      await rm(folder, {
        recursive: true,
        force: true,
        maxRetries: 3,
        retryDelay: 1000,
      }).catch(() => null);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async onApplicationShutdown(_signal?: string | undefined) {
    for (const player of this.players.values()) {
      await this.endPlayer(player.id);
    }
  }

  async spawnTranscoder(seek: number, source: string, dest: string) {
    const ffpmegProcess = spawn(
      'ffmpeg',
      // this.ffmpegService.args`
      //   -ss ${seek} -i "${source}" -preset ultrafast -strict -2
      //   -map 0:v -c:v libx264 -x264-params keyint=60:min-keyint=60:no-scenecut=1
      //   -map 0:a -c:a copy -map 0:1 -map 0:0 -seg_duration 2 -use_template 1 -use_timeline 1
      //   -f dash "${join(dest, 'video.mpd')}"
      // `,
      this.ffmpegService.args`
        -ss ${seek} 
        -i "${source}" -preset ultrafast
        -c:v libx264 -x264-params keyint=60:min-keyint=60:no-scenecut=1
        -c:a aac -ac 2 
        -map 0:1 -map 0:0 
        -hls_time 2 -segment_list_flags +live -hls_playlist_type event -f hls
        "${join(dest, 'video.m3u8')}"
      `,
    );

    ffpmegProcess.stderr.on('data', (data) => {});

    return new Promise<ChildProcessWithoutNullStreams>((resolve) => {
      const watcher = watch(dest, (event, filename) => {
        if (filename === 'video.m3u8') {
          watcher.close();
          // setTimeout(() => {
          resolve(ffpmegProcess);
          // }, 1000);
          // resolve(ffpmegProcess);
        }
      });
    });
  }

  async startPlayer(settings: PlayerSettings): Promise<[Player, Media]> {
    const playerId = randomUUID();
    // const playerId = '1';

    // const foundPlayer = this.players.get(playerId);
    // if (foundPlayer) return foundPlayer;

    const media = await this.mediaService.getMedia(settings.media);

    const playerFolder = join(this.configService.getTranscodePath(), playerId);
    await mkdir(playerFolder, { recursive: true });
    const ffpmegProcess = await this.spawnTranscoder(
      settings.seek,
      media.path,
      playerFolder,
    );

    const player = {
      id: playerId,
      settings,
      ffpmegProcess,
    };
    this.players.set(playerId, player);

    return [player, media];
  }

  // async seekPlayer(playerId: PlayerId, seek: number) {
  //   const foundPlayer = this.players.get(playerId);
  //   if (!foundPlayer) return;

  //   const media = await this.mediaService.getMedia(foundPlayer.settings.media);
  //   const playerFolder = join(this.configService.getTranscodePath(), playerId);

  //   foundPlayer.settings.seek = seek;
  //   foundPlayer.ffpmegProcess = this.spawnTranscoder(
  //     seek,
  //     media.path,
  //     join(playerFolder, 'video.mpd'),
  //   );

  //   this.players.set(playerId, foundPlayer);
  // }

  async endPlayer(playerId: PlayerId) {
    console.log('END CALLED \n\n\n\n\n\n\n');
    const foundPlayer = this.players.get(playerId);
    if (!foundPlayer) return;

    const playerFolder = join(this.configService.getTranscodePath(), playerId);
    await rm(playerFolder, { recursive: true, force: true });

    console.log('kill');
    // NOTE should we care about closing nicecly?
    foundPlayer.ffpmegProcess.kill(9);

    this.players.delete(playerId);
  }
}
