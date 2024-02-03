import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from 'src/config/config.module';
import { TVMazeService } from './tvmaze.service';

@Module({
  imports: [
    ConfigModule,
    CacheModule.register({
      ttl: 60 * 60,
      max: 100,
    }),
  ],
  providers: [TVMazeService],
  exports: [TVMazeService],
  controllers: [],
})
export class TVMazeModule {}
