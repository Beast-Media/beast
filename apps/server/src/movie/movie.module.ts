import { Module, forwardRef } from '@nestjs/common';
import { MovieService } from './movie.service';
import { ConfigModule } from 'src/config/config.module';
import { MediaModule } from 'src/media/media.module';
import { TasksModule } from 'src/tasks/tasks.module';
import { MovieController } from './movie.controller';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigService } from 'src/config/config.service';
import { TMDBModule } from '@beast/tmdb';

@Module({
  imports: [
    forwardRef(() => TasksModule),
    MediaModule,
    ConfigModule,
    TMDBModule.registerAsync({
      imports: [
        CacheModule.register({
          ttl: 60 * 60 * 1, // 1h
          max: 100,
        }),
        ConfigModule,
      ],
      useFactory: (config: ConfigService) => {
        return {
          endpointUrl: `${config.getApiAppPath()}/tmdb/`,
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [MovieService],
  exports: [MovieService],
  controllers: [MovieController],
})
export class MovieModule {}
