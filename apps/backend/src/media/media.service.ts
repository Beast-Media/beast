import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/commons/prisma/prisma.service';
import { Media } from '@prisma/client';
import { CreateMedia, IndexingMedia } from './dto/media.dto';
import { FFmpegService } from 'src/ffmpeg/ffmpeg.services';

@Injectable()
export class MediaService {
  constructor(
    private prisma: PrismaService,
    private ffmpegService: FFmpegService,
  ) {}

  async getMedia(id: Media['id']): Promise<Media> {
    return this.prisma.media.findFirstOrThrow({
      where: { id },
    });
  }

  async createMediaFromIndexing(media: IndexingMedia): Promise<Media> {
    const probeData = await this.ffmpegService.probeFile(media.path);

    const createMedia = {
      ...media,
      duration: Number(probeData?.format.duration),
    } as CreateMedia;

    return this.prisma.media.upsert({
      where: { path: media.path },
      create: createMedia,
      update: createMedia,
    });
  }
}
