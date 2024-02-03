import { Controller } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { MediaService } from './media.service';
import { ConfigService } from 'src/config/config.service';
import { TypedQuery, TypedRoute } from '@nestia/core';
import { MediaDTO, MediaWithStreams, QueryMedia } from './dto/media.dto';
import { Authenticated } from 'src/auth/auth.decorator';

/**
 * Controller for the Libraries
 */
@ApiTags('media')
@ApiSecurity('bearer')
@Authenticated()
@Controller('media')
export class MediaController {
  constructor(
    public mediaService: MediaService,
    private configService: ConfigService,
  ) {}

  /**
   * Get a media from its id
   */
  @TypedRoute.Get('/')
  async getMedia(@TypedQuery() query: QueryMedia): Promise<MediaDTO> {
    return this.mediaService.getMedia(query.mediaId);
  }

  /**
   * Get a media details from its id
   */
  @TypedRoute.Get('/detail')
  async getMediaDetails(
    @TypedQuery() query: QueryMedia,
  ): Promise<MediaWithStreams> {
    return this.mediaService.getMediaWithStreams(query.mediaId);
  }
}
