import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from 'src/config/config.module';
import { TMDBService } from './tmdb.service';

@Module({
  imports: [
    ConfigModule,
    CacheModule.register({
      ttl: 60 * 60,
      max: 100,
    }),
  ],
  providers: [TMDBService],
  exports: [TMDBService],
  controllers: [],
})
export class TMDBModule {}
