import { Module } from '@nestjs/common';
import { AppLoggerModule } from '@beast/nestjs-commons';
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
import { OwnerGuard } from './auth/owner.guard';
import { SettingsModule } from './settings/settings.module';
import { LibraryAccessGuard } from './library/library-access.guard';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
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
    SettingsModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: OwnerGuard,
    },
    { provide: APP_GUARD, useClass: LibraryAccessGuard },
  ],
})
export class AppModule {}
