interface BaseStream {
  index: number;
  codec_type: 'video' | 'audio' | 'subtitle' | 'attachment';
  codec_name?: string;
}

interface VideoStream extends BaseStream {
  codec_type: 'video';
  width: number;
  height: number;
  pix_fmt: 'yuv420p' | 'yuv420p10le' | 'yuvj420p';
}
interface AudioStream extends BaseStream {
  codec_type: 'audio';
  sample_rate: string;
  sample_fmt: 'fltp' | 's32' | 's32p' | 's16' | 's16p';
  channels: number;
  tags?: {
    language?: string;
    title?: string;
  };
}
interface SubtitleStream extends BaseStream {
  codec_type: 'subtitle';
  duration?: string;
  tags?: {
    language?: string;
    title?: string;
  };
}

interface AttachmentStream extends BaseStream {
  codec_type: 'attachment';
  codec_name?: string | never;
}

interface Format {
  filename: string;
  nb_streams: number;
  format_name: string;
  start_time: string;
  duration: string;
  size: string;
  bit_rate: string;
}

export type MediaStream =
  | VideoStream
  | AudioStream
  | SubtitleStream
  | AttachmentStream;

export interface ProbeData {
  streams?: MediaStream[];
  format?: Format;
}
