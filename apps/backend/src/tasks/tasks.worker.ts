import { NestFactory } from '@nestjs/core';
import { TaskWorkerModule } from './tasks.module';
import { Logger } from 'nestjs-pino';
import { ShutdownSignal } from '@nestjs/common';
import { parentPort } from 'worker_threads';
import { Subject, concatMap } from 'rxjs';
import { Task } from './dto/tasks.dto';
import { ShowService } from 'src/show/show.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(TaskWorkerModule, {
    bufferLogs: true,
  });
  app.useLogger(app.get(Logger));
  app.enableShutdownHooks([ShutdownSignal.SIGTERM, ShutdownSignal.SIGINT]);

  if (!parentPort) {
    await app.close();
    return;
  }

  const subject = new Subject<Task>();
  subject
    .pipe(
      concatMap(async (task) => {
        console.log('processing', task);
        try {
          if (task.name === 'index_show') {
            const showService = app.get(ShowService);
            await showService.scanShow(task.showPath, task.library);
          }
        } catch (e) {
          console.log('error on task', task, e);
        }
      }),
    )
    .subscribe();

  parentPort.on('message', (task: Task) => {
    subject.next(task);
  });

  setInterval(() => {
    console.log('WORKER STILL ALIVE');
  }, 1000);
}
bootstrap();
