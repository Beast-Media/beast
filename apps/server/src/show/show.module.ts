import { Module, forwardRef } from '@nestjs/common';
import { ShowController } from './show.controller';
import { ShowService } from './show.service';
import { TVMazeModule } from 'src/tvmaze/tvmaze.module';
import { ConfigModule } from 'src/config/config.module';
import { MediaModule } from 'src/media/media.module';
import { TasksModule } from 'src/tasks/tasks.module';
import { ImageModule } from 'src/image/image.module';

@Module({
  imports: [
    forwardRef(() => TasksModule),
    ImageModule,
    MediaModule,
    ConfigModule,
    TVMazeModule,
  ],
  providers: [ShowService],
  exports: [ShowService],
  controllers: [ShowController],
})
export class ShowModule {}
