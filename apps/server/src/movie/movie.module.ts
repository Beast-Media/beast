import { Module, forwardRef } from '@nestjs/common';
import { MovieService } from './movie.service';
import { PrismaModule } from 'src/commons/prisma/prisma.module';
import { ConfigModule } from 'src/config/config.module';
import { MediaModule } from 'src/media/media.module';
import { TasksModule } from 'src/tasks/tasks.module';
import { MovieController } from './movie.controller';
import { TMDBModule } from 'src/tmdb/tmdb.module';

@Module({
  imports: [
    forwardRef(() => TasksModule),
    PrismaModule,
    MediaModule,
    ConfigModule,
    TMDBModule,
  ],
  providers: [MovieService],
  exports: [MovieService],
  controllers: [MovieController],
})
export class MovieModule {}
