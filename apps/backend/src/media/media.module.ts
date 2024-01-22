import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/commons/prisma/prisma.module';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { FFmpegModule } from 'src/ffmpeg/ffmpeg.module';
import { ConfigModule } from 'src/config/config.module';
import { WebsocketModule } from 'src/websockets/websockets.module';

@Module({
  imports: [WebsocketModule, ConfigModule, PrismaModule, FFmpegModule],
  providers: [MediaService],
  exports: [MediaService],
  controllers: [MediaController],
})
export class MediaModule {}
