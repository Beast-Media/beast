import { Module } from '@nestjs/common';
import { FFmpegModule } from 'src/ffmpeg/ffmpeg.module';
import { ConfigModule } from 'src/config/config.module';
import { PlayerService } from './player.service';
import { MediaModule } from 'src/media/media.module';
import { PlayerController } from './player.controller';

@Module({
  imports: [ConfigModule, FFmpegModule, MediaModule],
  providers: [PlayerService],
  exports: [PlayerService],
  controllers: [PlayerController],
})
export class PlayerModule {}
