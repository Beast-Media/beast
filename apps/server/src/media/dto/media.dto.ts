import { Media, Prisma } from '@prisma/client';

export interface MediaDTO extends Media {}

export interface MediaAndWatchToken {
  media: MediaDTO;
  watchToken: string;
}

export interface IndexingMedia extends Pick<MediaDTO, 'path' | 'libraryId'> {}
export interface CreateMedia extends Omit<MediaDTO, 'id' | 'createdAt'> {}

export interface QueryMedia {
  mediaId: Media['id'];
}

export interface QueryPlayMedia {
  mediaId: Media['id'];
  seek: number;
  watchToken: string;
}

export interface MediaWithStreams
  extends Prisma.MediaGetPayload<{
    include: { streams: true };
  }> {}
