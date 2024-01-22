import { TypedQuery, TypedRoute } from '@nestia/core';
import {
  Controller,
  HttpException,
  HttpStatus,
  Query,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MediaService } from './media.service';
import { MediaAndWatchToken, QueryMedia } from './dto/media.dto';
import { Media } from '@prisma/client';
import { spawn } from 'child_process';
import { FastifyReply } from 'fastify';
import { Authenticated } from 'src/auth/auth.decorator';
import jwt from 'jsonwebtoken';
import { ConfigService } from 'src/config/config.service';

/**
 * Controller for the Libraries
 */
@ApiTags('media')
@Controller('media')
export class MediaController {
  constructor(
    public mediaService: MediaService,
    private configService: ConfigService,
  ) {}

  /**
   * Get a media informations
   *
   * @security bearer
   */
  @Authenticated()
  @TypedRoute.Get('/')
  public async media(
    @TypedQuery() query: QueryMedia,
  ): Promise<MediaAndWatchToken> {
    return {
      media: await this.mediaService.getMedia(query.mediaId),
      watchToken: jwt.sign({}, this.configService.getAuthJWTSecret(), {
        expiresIn: '1d',
      }),
    };
  }

  @TypedRoute.Get('/play')
  public async play(
    @Res() reply: FastifyReply,
    @Query('seek') seek: number,
    @Query('media') mediaId: Media['id'],
    @Query('watchToken') watchToken: string,
  ) {
    try {
      jwt.verify(watchToken, this.configService.getAuthJWTSecret());
    } catch {
      throw new HttpException('invalid watch token', HttpStatus.FORBIDDEN);
    }

    const media = await this.mediaService.getMedia(mediaId);

    const pffmpeg = spawn('ffmpeg', [
      '-ss',
      `${seek}`,
      '-noaccurate_seek',
      '-i',
      media.path,
      '-vcodec',
      'libx264',
      '-f',
      'mp4',
      '-pix_fmt',
      'yuv420p',
      '-movflags',
      'faststart+frag_keyframe+empty_moov',
      '-copyts',
      '-preset',
      'ultrafast',
      '-tune',
      'zerolatency',
      '-map',
      '0:1',
      '-map',
      '0:0',
      'pipe:1',
    ]);
    reply.raw.setHeader('Content-type', 'video/mp4');
    reply.raw.setHeader('Access-Control-Allow-Origin', '*');
    pffmpeg.stderr.on('data', (data: Buffer) => {
      //   console.log(data.toString());
      data;
    });
    reply.raw.on('close', () => {
      console.log('stream close');
      pffmpeg.kill(0);
    });
    pffmpeg.stdout.pipe(reply.raw);
  }
}
