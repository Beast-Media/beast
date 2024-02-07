import { Injectable } from '@nestjs/common';
import { Media, ServerDBService } from '@beast/server-db-schemas';
import { CreateMedia, IndexingMedia, MediaWithStreams } from './dto/media.dto';
import { FFmpegService } from 'src/ffmpeg/ffmpeg.services';
import { MediaStream } from 'src/ffmpeg/dto/probe.dto';
import { ConfigService } from 'src/config/config.service';
import { join } from 'path';

@Injectable()
export class MediaService {
  constructor(
    private prisma: ServerDBService,
    private ffmpegService: FFmpegService,
    private configService: ConfigService,
  ) {}

  async getMedia(id: Media['id']): Promise<Media> {
    return this.prisma.media.findFirstOrThrow({
      where: { id },
    });
  }

  async getMediaWithStreams(id: Media['id']): Promise<MediaWithStreams> {
    return this.prisma.media.findFirstOrThrow({
      where: { id },
      include: { streams: true },
    });
  }

  async createMediaFromIndexing(media: IndexingMedia): Promise<Media> {
    const probeData = await this.ffmpegService.probeFile(
      join(this.configService.getLibrariesRoot(), media.path),
    );

    if (!probeData) throw new Error('unable to probe file');

    if (!probeData.format || !probeData.streams)
      throw new Error(
        'unable to create this media, not enough informations while probing',
      );

    const videoStream = probeData.streams.find(
      ({ codec_type }) => codec_type === 'video',
    );

    if (!videoStream || videoStream.codec_type !== 'video')
      throw new Error(
        'no video stream in this media, not enough informations while probing',
      );

    const createMedia = {
      ...media,
      duration: Number(probeData.format.duration), // need check
      bitrate: Number(probeData.format.bit_rate), // need check
      height: videoStream.height,
      width: videoStream.width,
    } as CreateMedia;

    const mediaDb = await this.prisma.media.upsert({
      where: { path: media.path },
      create: createMedia,
      update: createMedia,
    });

    const getStreamName = (stream: MediaStream) => {
      switch (stream.codec_type) {
        case 'subtitle':
          if (stream.tags?.language && stream.tags?.title)
            return `${stream.tags.title} (${stream.tags.language})`;
          if (stream.tags?.title) return `${stream.tags.title}`;
          if (stream.tags?.language)
            return `Subtitle (${stream.tags.language})`;
          return `Subtitle Track #${stream.index}`;
        case 'audio':
          if (stream.tags?.language && stream.tags?.title)
            return `${stream.tags.title} (${stream.tags.language})`;
          if (stream.tags?.title) return `${stream.tags.title}`;
          if (stream.tags?.language) return `Audio (${stream.tags.language})`;
          return `Audio Track #${stream.index}`;
        default:
          return `${stream.codec_type}#${stream.index}`;
      }
    };

    for (const stream of probeData.streams) {
      if (stream.codec_type === 'attachment' || stream.codec_type === 'data')
        continue; // DO not store attachments or data for now. Not needed;

      const name = getStreamName(stream);

      await this.prisma.stream.upsert({
        where: {
          mediaId_streamIndex: {
            mediaId: mediaDb.id,
            streamIndex: stream.index,
          },
        },
        create: {
          name: name,
          streamIndex: stream.index,
          mediaId: mediaDb.id,
          type: stream.codec_type,
        },
        update: {
          name: name,
          streamIndex: stream.index,
          mediaId: mediaDb.id,
          type: stream.codec_type,
        },
      });
    }

    return mediaDb;
  }
}
