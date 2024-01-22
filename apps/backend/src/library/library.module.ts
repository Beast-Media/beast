import { Module } from '@nestjs/common';
import { LibraryService } from './library.service';
import { LibraryController } from './library.controller';
import { PrismaModule } from 'src/commons/prisma/prisma.module';
import { ShowModule } from 'src/show/show.module';

@Module({
  imports: [PrismaModule, ShowModule],
  providers: [LibraryService],
  exports: [LibraryService],
  controllers: [LibraryController],
})
export class LibraryModule {}
