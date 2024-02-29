import { Module } from '@nestjs/common';
import { FFmpegService } from './ffmpeg.services';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [ConfigModule],
  providers: [FFmpegService],
  exports: [FFmpegService],
  controllers: [],
})
export class FFmpegModule {}
