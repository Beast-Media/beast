import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/commons/prisma/prisma.service';
import { stat } from 'fs/promises';
import { CreateLibraryDTO, LibraryContent } from './dto/library.dto';
import { Library } from '@prisma/client';
import { ShowService } from 'src/show/show.service';

@Injectable()
export class LibraryService {
  constructor(
    private prisma: PrismaService,
    private showService: ShowService,
  ) {}

  async scanLibraryFiles(library: Library) {
    if (library.type === 'TV_SHOWS') {
      await this.showService.scanShows(library);
    }
  }

  async getLibraries(): Promise<Library[]> {
    return this.prisma.library.findMany({});
  }

  async getLibrary(id: Library['id']): Promise<Library> {
    return this.prisma.library.findFirstOrThrow({ where: { id } });
  }

  async getLibraryContent(id: Library['id']): Promise<LibraryContent> {
    const library = await this.getLibrary(id);
    if (library.type === 'TV_SHOWS') {
      return (
        await this.prisma.show.findMany({ where: { libraryId: id } })
      ).map((show) => ({ type: 'TV_SHOWS', data: show }));
    } else {
      return (
        await this.prisma.movie.findMany({ where: { libraryId: id } })
      ).map((movie) => ({ type: 'MOVIES', data: movie }));
    }
  }

  /**
   * Create a new library and start scanning it
   */
  async createLibrary(data: CreateLibraryDTO) {
    if (!(await stat(data.path).catch(() => null))) return false;

    try {
      const library = await this.prisma.library.create({
        data,
      });
      this.scanLibraryFiles(library);
      return true;
    } catch {
      return false;
    }
  }
}
