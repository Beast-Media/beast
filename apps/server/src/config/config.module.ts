import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  imports: [],
  providers: [ConfigService],
  exports: [ConfigService],
  controllers: [],
})
export class ConfigModule {}
