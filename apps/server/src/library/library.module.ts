import { Module } from '@nestjs/common';
import { LibraryService } from './library.service';
import { LibraryController } from './library.controller';
import { PrismaModule } from 'src/commons/prisma/prisma.module';
import { ShowModule } from 'src/show/show.module';
import { MovieModule } from 'src/movie/movie.module';

@Module({
  imports: [PrismaModule, ShowModule, MovieModule],
  providers: [LibraryService],
  exports: [LibraryService],
  controllers: [LibraryController],
})
export class LibraryModule {}
