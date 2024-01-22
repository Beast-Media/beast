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
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigService } from './config/config.service';
import { join, resolve } from 'path';
import { WebsocketModule } from './websockets/websockets.module';

@Module({
  imports: [
    ConfigModule,
    RequestContextModule,
    AppLoggerModule,
    WebsocketModule,
    LibraryModule,
    AuthModule,
    ShowModule,
    MediaModule,
    ServeStaticModule.forRootAsync({
      useFactory: async (config: ConfigService) => {
        return [
          {
            rootPath: resolve(join(config.getMetadatasPath(), 'images')),
            serveRoot: '/public/images',
            serveStaticOptions: {
              immutable: true,
            },
          },
        ];
      },
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
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
