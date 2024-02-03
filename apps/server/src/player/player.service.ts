import {
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';
import {
  Player,
  PlayerId,
  PlayerResolution,
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

  lowerResolutions(width: number, height: number): PlayerResolution[] {
    const availableResolutions = new Map<number, PlayerResolution>();

    availableResolutions.set(3840 * 2160, { width: 3840, height: 2160 });
    availableResolutions.set(2560 * 1440, { width: 2560, height: 1440 });
    availableResolutions.set(1920 * 1080, { width: 1920, height: 1080 });
    availableResolutions.set(1280 * 720, { width: 1280, height: 720 });
    availableResolutions.set(640 * 480, { width: 640, height: 480 });

    for (const [pixels] of availableResolutions) {
      if (pixels >= width * height) availableResolutions.delete(pixels);
    }

    return Array.from(availableResolutions.values());
  }

  async spawnTranscoder(
    settings: PlayerSettings,
    source: string,
    dest: string,
  ) {
    const videoStream = settings.streams.find(({ type }) => type === 'video');
    const audioStream = settings.streams.find(({ type }) => type === 'audio');
    const subtitleStream = settings.streams.find(
      ({ type }) => type === 'subtitle',
    );

    const args = this.ffmpegService.args`
    -hide_banner
    -ss ${settings.seek} 
    -i "${source}" -preset ultrafast
    -movflags frag_keyframe+empty_moov
    -c:v libx264 -x264-params keyint=60:min-keyint=60:no-scenecut=1
    ${settings.resolution ? `-filter:v:0 scale=w=${settings.resolution.width}:h=${settings.resolution.height}` : ''}
    ${settings.resolution?.bitrate ? `-maxrate:v:0 ${settings.resolution.bitrate}` : ''}
    ${videoStream ? `-map 0:${videoStream.index}` : '-vn'} 
    ${audioStream ? `-c:a aac -ac 2 -map 0:${audioStream.index}` : '-an'} 
    ${subtitleStream ? `-c:s webvtt -muxdelay 0 -map 0:${subtitleStream.index}` : '-sn'} 
    -master_pl_name "master.m3u8"
    ${
      subtitleStream
        ? `-var_stream_map "${videoStream ? 'v:0' : ''}${audioStream ? ',a:0' : ''}${subtitleStream ? ',s:0,sgroup:subtitle' : ''}"`
        : ''
    }
    -hls_time 2 -segment_list_flags +live -hls_playlist_type event -f hls
    "${join(dest, 'out_%v.m3u8')}"
  `;
    const ffpmegProcess = spawn('ffmpeg', args);
    console.log(args);

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

  keepalive(playerId: PlayerId) {
    const foundPlayer = this.players.get(playerId);
    if (!foundPlayer) return;

    foundPlayer.lastKeepalive = new Date();
  }

  async startPlayer(settings: PlayerSettings): Promise<StartedPlayerInfos> {
    const playerId = randomUUID();

    const media = await this.mediaService.getMediaWithStreams(settings.mediaId);

    const defVideo = media.streams.find(({ type }) => type === 'video');
    if (!settings.streams.find(({ type }) => type === 'video')) {
      if (!defVideo) throw new Error('No video stream');
      settings.streams.push({ index: defVideo.streamIndex, type: 'video' });
    }

    const defAudio = media.streams.find(({ type }) => type === 'audio');
    if (!settings.streams.find(({ type }) => type === 'audio') && defAudio) {
      console.log(defAudio);
      settings.streams.push({ index: defAudio.streamIndex, type: 'audio' });
    }

    const defSub = media.streams.find(({ type }) => type === 'subtitle');
    if (!settings.streams.find(({ type }) => type === 'subtitle') && defSub) {
      settings.streams.push({ index: defSub.streamIndex, type: 'subtitle' });
    }

    const playerFolder = join(this.configService.getTranscodePath(), playerId);
    await mkdir(playerFolder, { recursive: true });
    const ffpmegProcess = await this.spawnTranscoder(
      settings,
      media.path,
      playerFolder,
    );

    const player = {
      id: playerId,
      settings,
      ffpmegProcess,
      lastKeepalive: new Date(),
    };
    this.players.set(playerId, player);

    const keepaliveId = setInterval(() => {
      const foundPlayer = this.players.get(playerId);
      if (!foundPlayer) return;
      if (Date.now() - foundPlayer.lastKeepalive.getTime() >= 10_000) {
        clearInterval(keepaliveId);
        this.endPlayer(playerId);
      }
    }, 1000).unref();

    return {
      id: playerId,
      settings,
      availableResolutions: this.lowerResolutions(media.width, media.height),
    };
  }

  async endPlayer(playerId: PlayerId) {
    const foundPlayer = this.players.get(playerId);
    if (!foundPlayer) return;

    // NOTE should we care about closing nicecly?
    // Kill the ffmpeg instance before removing the transcode folder
    foundPlayer.ffpmegProcess.kill(9);

    const playerFolder = join(this.configService.getTranscodePath(), playerId);
    await rm(playerFolder, {
      recursive: true,
      force: true,
      retryDelay: 1000,
      maxRetries: 5,
    });
    this.players.delete(playerId);
  }
}
