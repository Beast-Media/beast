import { Global, Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { AppLoggerModule } from 'src/commons/log/logger.module';
import { ShowModule } from 'src/show/show.module';

@Global()
@Module({
  providers: [TasksService],
  exports: [TasksService],
})
export class TasksModule {}

@Module({
  imports: [AppLoggerModule, ShowModule],
  providers: [],
  exports: [],
})
export class TaskWorkerModule {}
