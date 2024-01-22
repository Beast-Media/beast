import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/commons/prisma/prisma.module';
import { ShowController } from './show.controller';
import { ShowService } from './show.service';
import { TVMazeModule } from 'src/tvmaze/tvmaze.module';
import { ConfigModule } from 'src/config/config.module';
import { MediaModule } from 'src/media/media.module';

@Module({
  imports: [PrismaModule, MediaModule, ConfigModule, TVMazeModule],
  providers: [ShowService],
  exports: [ShowService],
  controllers: [ShowController],
})
export class ShowModule {}
