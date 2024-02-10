import { Injectable } from '@nestjs/common';
import { FFmpegService } from 'src/ffmpeg/ffmpeg.services';
import { MediaStream } from 'src/ffmpeg/dto/probe.dto';
import { ConfigService } from 'src/config/config.service';
import { join } from 'path';
import { CreateMedia, IndexingMedia } from './dto/media.queries';
import {
  Media,
  MediaEntity,
  MediaStreamEntity,
  MediaWithStreams,
} from './dto/media.dto';

@Injectable()
export class MediaService {
  constructor(
    private ffmpegService: FFmpegService,
    private configService: ConfigService,
  ) {}

  async getMedia(id: Media['id']): Promise<Media> {
    return MediaEntity.findOneOrFail({
      where: { id },
    });
  }

  async getMediaWithStreams(id: Media['id']): Promise<MediaWithStreams> {
    return MediaEntity.findOneOrFail({
      where: { id },
      relations: { streams: true },
    });
  }

  async createMediaFromIndexing(media: IndexingMedia): Promise<MediaEntity> {
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
    } satisfies CreateMedia;

    const mediaDb = await MediaEntity.create({
      ...(await MediaEntity.findOne({ where: { path: media.path } })),
      ...createMedia,
      library: { id: media.libraryId },
    }).save();

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

    const streamsDb = await MediaStreamEntity.find({
      where: { media: { id: mediaDb.id } },
    });

    for (const stream of probeData.streams) {
      if (stream.codec_type === 'attachment' || stream.codec_type === 'data')
        continue; // DO not store attachments or data for now. Not needed;

      const existingStream = streamsDb.find(
        ({ streamIndex }) => streamIndex === stream.index,
      );

      const newMediaStream = MediaStreamEntity.create({
        name: getStreamName(stream),
        streamIndex: stream.index,
        media: { id: mediaDb.id },
        type: stream.codec_type,
      });

      if (existingStream) {
        await MediaStreamEntity.update(
          {
            id: existingStream.id,
          },
          newMediaStream,
        );
      } else {
        await MediaStreamEntity.insert(newMediaStream);
      }
    }

    return mediaDb;
  }
}
