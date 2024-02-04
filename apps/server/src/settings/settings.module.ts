import { Module } from '@nestjs/common';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';
import { ServerDBModule } from '@beast/server-db-schemas';

@Module({
  imports: [ServerDBModule],
  controllers: [SettingsController],
  providers: [SettingsService],
})
export class SettingsModule {}
