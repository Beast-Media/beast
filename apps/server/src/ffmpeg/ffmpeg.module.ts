import { Module } from '@nestjs/common';
import { FFmpegService } from './ffmpeg.services';

@Module({
  providers: [FFmpegService],
  exports: [FFmpegService],
  controllers: [],
})
export class FFmpegModule {}
