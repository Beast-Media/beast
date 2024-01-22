import { Module } from '@nestjs/common';
import { WebsocketService } from './websockets.service';
import { AppLoggerModule } from 'src/commons/log/logger.module';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [AppLoggerModule, ConfigModule],
  providers: [WebsocketService],
  exports: [WebsocketService],
})
export class WebsocketModule {}
