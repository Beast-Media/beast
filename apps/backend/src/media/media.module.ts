import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/commons/prisma/prisma.module';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { FFmpegModule } from 'src/ffmpeg/ffmpeg.module';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [ConfigModule, PrismaModule, FFmpegModule],
  providers: [MediaService],
  exports: [MediaService],
  controllers: [MediaController],
})
export class MediaModule {}
