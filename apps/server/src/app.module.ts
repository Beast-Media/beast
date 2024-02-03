import { Module } from '@nestjs/common';
import { AppLoggerModule } from './commons/log/logger.module';
import { RequestContextModule } from 'nestjs-request-context';
import { LibraryModule } from './library/library.module';
import { ConfigModule } from './config/config.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { ShowModule } from './show/show.module';
import { MediaModule } from './media/media.module';
import { WebsocketModule } from './websockets/websockets.module';
import { PlayerModule } from './player/player.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule,
    RequestContextModule,
    AppLoggerModule,
    PlayerModule,
    WebsocketModule,
    LibraryModule,
    AuthModule,
    ShowModule,
    MediaModule,
    TasksModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
