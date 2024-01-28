import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MediaService } from './media.service';
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
}
