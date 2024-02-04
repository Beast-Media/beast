import { TypedBody, TypedRoute } from '@nestia/core';
import { Controller } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Authenticated, IsOwner as IsOwner } from 'src/auth/auth.decorator';
import { InitServerBody } from './dto/settings.dto';
import { SettingsService } from './settings.service';

/**
 * Controller for server settings
 */
@ApiTags('settings')
@ApiSecurity('bearer')
@Controller('settings')
@Authenticated()
export class SettingsController {
  constructor(private settingsService: SettingsService) {}

  /**
   * Save the minimum required informations to use this server
   */
  @TypedRoute.Post('/init')
  @IsOwner()
  public async init(@TypedBody() body: InitServerBody) {
    this.settingsService.initServer(body);
  }
}
