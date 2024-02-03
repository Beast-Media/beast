import { Module } from '@nestjs/common';
import { WebsocketService } from './websockets.service';
import { AppLoggerModule } from 'src/commons/log/logger.module';
import { ConfigModule } from 'src/config/config.module';
import { PlayerModule } from 'src/player/player.module';

@Module({
  imports: [AppLoggerModule, ConfigModule, PlayerModule],
  providers: [WebsocketService],
  exports: [WebsocketService],
})
export class WebsocketModule {}
