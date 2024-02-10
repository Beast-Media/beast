import { Global, Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ShowModule } from 'src/show/show.module';
import { MovieModule } from 'src/movie/movie.module';
import { AppLoggerModule } from '@beast/nestjs-commons';
import { DatabaseModule } from 'src/database/database.module';

@Global()
@Module({
  providers: [TasksService],
  exports: [TasksService],
})
export class TasksModule {}

@Module({
  imports: [DatabaseModule, AppLoggerModule, ShowModule, MovieModule],
  providers: [],
  exports: [],
})
export class TaskWorkerModule {}
