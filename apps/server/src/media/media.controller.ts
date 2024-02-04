import { Controller } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { MediaService } from './media.service';
import { TypedQuery, TypedRoute } from '@nestia/core';
import { MediaDTO, MediaWithStreams, QueryMedia } from './dto/media.dto';
import { Authenticated } from 'src/auth/auth.decorator';
import { LibraryAccessType } from '@beast/server-db-schemas';
import { HasLibraryAccess } from 'src/library/library-access.decorator';

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
  @HasLibraryAccess<QueryMedia>(LibraryAccessType.READ, {
    from: 'MEDIA',
    id: 'mediaId',
  })
  async getMedia(@TypedQuery() query: QueryMedia): Promise<MediaDTO> {
    return this.mediaService.getMedia(query.mediaId);
  }

  /**
   * Get a media details from its id
   */
  @TypedRoute.Get('/detail')
  @HasLibraryAccess<QueryMedia>(LibraryAccessType.READ, {
    from: 'MEDIA',
    id: 'mediaId',
  })
  async getMediaDetails(
    @TypedQuery() query: QueryMedia,
  ): Promise<MediaWithStreams> {
    return this.mediaService.getMediaWithStreams(query.mediaId);
  }
}
