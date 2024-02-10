import { Controller } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { MediaService } from './media.service';
import { TypedQuery, TypedRoute } from '@nestia/core';
import { QueryMedia } from './dto/media.queries';
import { Authenticated } from 'src/auth/auth.decorator';
import { HasLibraryAccess } from 'src/library/library-access.decorator';
import { Media, MediaWithStreams } from './dto/media.dto';

/**
 * Controller for the Libraries
 */
@ApiTags('media')
@ApiSecurity('bearer')
@Authenticated()
@Controller('media')
export class MediaController {
  constructor(public mediaService: MediaService) {}

  /**
   * Get a media from its id
   */
  @TypedRoute.Get('/')
  @HasLibraryAccess<QueryMedia>('READ', {
    from: 'MEDIA',
    id: 'mediaId',
  })
  async getMedia(@TypedQuery() query: QueryMedia): Promise<Media> {
    return this.mediaService.getMedia(query.mediaId);
  }

  /**
   * Get a media details from its id
   */
  @TypedRoute.Get('/detail')
  @HasLibraryAccess<QueryMedia>('READ', {
    from: 'MEDIA',
    id: 'mediaId',
  })
  async getMediaDetails(
    @TypedQuery() query: QueryMedia,
  ): Promise<MediaWithStreams> {
    return this.mediaService.getMediaWithStreams(query.mediaId);
  }
}
