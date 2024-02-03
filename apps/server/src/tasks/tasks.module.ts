import { Global, Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ShowModule } from 'src/show/show.module';
import { MovieModule } from 'src/movie/movie.module';
import { AppLoggerModule } from '@beast/nestjs-commons';

@Global()
@Module({
  providers: [TasksService],
  exports: [TasksService],
})
export class TasksModule {}

@Module({
  imports: [AppLoggerModule, ShowModule, MovieModule],
  providers: [],
  exports: [],
})
export class TaskWorkerModule {}
