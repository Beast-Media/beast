import { Module } from '@nestjs/common';
import { WebsocketService } from './websockets.service';
import { ConfigModule } from 'src/config/config.module';
import { PlayerModule } from 'src/player/player.module';
import { AppLoggerModule } from '@beast/nestjs-commons';

@Module({
  imports: [AppLoggerModule, ConfigModule, PlayerModule],
  providers: [WebsocketService],
  exports: [WebsocketService],
})
export class WebsocketModule {}
