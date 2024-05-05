import { Module } from '@nestjs/common';
import { RequestContextModule } from 'nestjs-request-context';
import { ConfigModule } from './config/config.module';
import { AppLoggerModule } from '@beast/nestjs-commons';
import { TMDBModule } from '@beast/tmdb';
import { ConfigService } from './config/config.service';
import { TMDBController } from './tmdb.controller';
import { CacheModule } from '@nestjs/cache-manager';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule,
    RequestContextModule,
    AppLoggerModule,
    AuthModule,
    TMDBModule.registerAsync({
      imports: [
        CacheModule.register({
          ttl: 60 * 60 * 6, // 6h
          max: 10_000,
        }),
        ConfigModule,
      ],
      useFactory: (config: ConfigService) => {
        return {
          apiKey: config.getTMDBApiKey(),
          endpointUrl: 'https://api.themoviedb.org/3/',
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [TMDBController],
  providers: [],
})
export class AppModule {}
