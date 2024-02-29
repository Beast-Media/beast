import {
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';
import { join } from 'path/posix';
import { Worker, isMainThread } from 'worker_threads';
import { Task } from './dto/tasks.dto';

@Injectable()
export class TasksService
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  private worker: Worker;

  constructor() {}

  onApplicationBootstrap() {
    // This prevent from creating an infinite loop
    // as instanciating a worker could instanciate this
    // module and trigger this function again
    if (!isMainThread) return;
    this.worker = new Worker(join(__dirname, './tasks.worker.js'));
    this.worker.on('error', (error) => console.error(error));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async onApplicationShutdown(_signal?: string | undefined) {
    await this.worker.terminate();
  }

  queueTask(task: Task) {
    this.worker.postMessage(task);
  }
}
