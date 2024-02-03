import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { FFmpegModule } from 'src/ffmpeg/ffmpeg.module';
import { ConfigModule } from 'src/config/config.module';
import { ServerDBModule } from '@beast/server-db-schemas';

@Module({
  imports: [ConfigModule, ServerDBModule, FFmpegModule],
  providers: [MediaService],
  exports: [MediaService],
  controllers: [MediaController],
})
export class MediaModule {}
