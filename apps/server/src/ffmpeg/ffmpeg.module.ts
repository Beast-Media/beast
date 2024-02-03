import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/commons/prisma/prisma.module';
import { FFmpegService } from './ffmpeg.services';

@Module({
  imports: [PrismaModule],
  providers: [FFmpegService],
  exports: [FFmpegService],
  controllers: [],
})
export class FFmpegModule {}
