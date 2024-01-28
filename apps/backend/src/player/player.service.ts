import {
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';
import {
  Player,
  PlayerId,
  PlayerSettings,
  StartedPlayerInfos,
} from './dto/player.dto';
import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import { MediaService } from 'src/media/media.service';
import { join } from 'path';
import { ConfigService } from 'src/config/config.service';
import { mkdir, rm, readdir } from 'fs/promises';
import { FFmpegService } from 'src/ffmpeg/ffmpeg.services';
import { randomUUID } from 'crypto';
import { watch } from 'fs';

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
    for (const folder of folders) {
      await rm(join(this.configService.getTranscodePath(), folder), {
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
      this.ffmpegService.args`
        -hide_banner
        -ss ${seek} 
        -i "${source}" -preset ultrafast
        -movflags frag_keyframe+empty_moov
        -c:v libx264 -x264-params keyint=60:min-keyint=60:no-scenecut=1
        -c:a aac -ac 2 
        -c:s webvtt -muxdelay 0
        -map 0:1 -map 0:0 -map 0:3 
        -master_pl_name "master.m3u8"
        -var_stream_map "v:0,a:0,s:0,sgroup:subtitle"
        -hls_time 2 -segment_list_flags +live -hls_playlist_type event -f hls
        "${join(dest, 'out_%v.m3u8')}"
      `,
    );

    ffpmegProcess.stderr.on('data', (data) => {
      console.log(data.toString());
    });

    return new Promise<ChildProcessWithoutNullStreams>((resolve, reject) => {
      const watcher = watch(dest, (event, filename) => {
        const timeoutId = setTimeout(() => {
          watcher.close();
          reject(new Error('timeout'));
        }, 10_000);
        if (filename === 'master.m3u8') {
          watcher.close();
          clearTimeout(timeoutId);
          resolve(ffpmegProcess);
        }
      });
    });
  }

  async startPlayer(settings: PlayerSettings): Promise<StartedPlayerInfos> {
    const playerId = randomUUID();

    const media = await this.mediaService.getMediaWithStreams(settings.mediaId);

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

    return {
      id: playerId,
      settings,
      media,
    };
  }

  async endPlayer(playerId: PlayerId) {
    console.log('END CALLED \n\n\n\n\n\n\n');
    const foundPlayer = this.players.get(playerId);
    if (!foundPlayer) return;

    const playerFolder = join(this.configService.getTranscodePath(), playerId);
    await rm(playerFolder, { recursive: true, force: true });

    // NOTE should we care about closing nicecly?
    foundPlayer.ffpmegProcess.kill(9);

    this.players.delete(playerId);
  }
}
