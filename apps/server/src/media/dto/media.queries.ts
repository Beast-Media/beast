import { Media } from './media.dto';

export interface MediaAndWatchToken {
  media: Media;
  watchToken: string;
}

export interface IndexingMedia extends Pick<Media, 'path' | 'library'> {}
export interface CreateMedia extends Omit<Media, 'id' | 'createdAt'> {}

export interface QueryMedia {
  mediaId: Media['id'];
}

export interface QueryPlayMedia {
  mediaId: Media['id'];
  seek: number;
  watchToken: string;
}

// export interface MediaWithStreams
//   extends Prisma.MediaGetPayload<{
//     include: { streams: true };
//   }> {}
