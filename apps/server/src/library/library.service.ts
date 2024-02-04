import { Injectable } from '@nestjs/common';
import { stat } from 'fs/promises';
import {
  CreateLibraryDTO,
  EditLibraryPermissions,
  LibraryContent,
} from './dto/library.dto';
import { ShowService } from 'src/show/show.service';
import { MovieService } from 'src/movie/movie.service';
import { Library, ServerDBService, User } from '@beast/server-db-schemas';

@Injectable()
export class LibraryService {
  constructor(
    private prisma: ServerDBService,
    private showService: ShowService,
    private movieService: MovieService,
  ) {}

  async scanLibraryFiles(library: Library) {
    if (library.type === 'TV_SHOWS') {
      await this.showService.scanShows(library);
    }

    if (library.type === 'MOVIES') {
      await this.movieService.scanMovies(library);
    }
  }

  async getLibraries(): Promise<Library[]> {
    return this.prisma.library.findMany({});
  }

  /**
   * Returns the libraries that the user can access
   */
  async getAccessibleLibraries(userId: User['id']): Promise<Library[]> {
    return this.prisma.library.findMany({
      where: {
        libraryAccess: { some: { userId } },
      },
    });
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
      return library;
    } catch {
      return false;
    }
  }

  async addAccess(
    libraryId: Library['id'],
    data: EditLibraryPermissions['add'],
  ) {
    if (!data || data.length === 0) return;

    return await this.prisma.libraryAccess.createMany({
      data: data.map(({ access, userId }) => ({ access, userId, libraryId })),
    });
  }

  async removeAccess(
    libraryId: Library['id'],
    data: EditLibraryPermissions['add'],
  ) {
    if (!data || data.length === 0) return;

    for (const item of data) {
      await this.prisma.libraryAccess.delete({
        where: {
          access: item.access,
          libraryId_userId: {
            userId: item.userId,
            libraryId,
          },
        },
      });
    }
  }
}
