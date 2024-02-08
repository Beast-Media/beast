import { Injectable } from '@nestjs/common';
import { readdir, stat } from 'fs/promises';
import { ShowService } from 'src/show/show.service';
import { MovieService } from 'src/movie/movie.service';
import { join } from 'path';
import { ConfigService } from 'src/config/config.service';
import { Library, LibraryAccessEntity, LibraryEntity } from './dto/library.dto';
import { User } from '../../../../packages/server-db-schemas/dist';
import {
  CreateLibrary,
  EditLibraryPermissions,
  LibraryContent,
} from './dto/library.queries';
import { UserEntity } from 'src/auth/dto/user.dto';
import { ShowEntity } from 'src/show/dto/show.dto';
import { MovieEntity } from 'src/movie/dto/movie.dto';

@Injectable()
export class LibraryService {
  constructor(
    private config: ConfigService,
    private showService: ShowService,
    private movieService: MovieService,
  ) {}

  async listFolders(root: string): Promise<string[]> {
    return (
      await readdir(join(this.config.getLibrariesRoot(), root), {
        withFileTypes: true,
      })
    )
      .filter((file) => file.isDirectory())
      .map((dir) => join(root, dir.name));
  }

  async scanLibraryFiles(library: Library) {
    if (library.type === 'TV_SHOWS') {
      await this.showService.scanShows(library);
    }

    if (library.type === 'MOVIES') {
      await this.movieService.scanMovies(library);
    }
  }

  async getLibraries(): Promise<Library[]> {
    return LibraryEntity.find({});
  }

  /**
   * Returns the libraries that the user can access
   */
  async getAccessibleLibraries(userId: User['id']): Promise<Library[]> {
    return LibraryEntity.find({
      where: {
        libraryAccesses: { user: { id: userId }, access: 'READ' },
      },
    });
  }

  async getLibrary(id: Library['id']): Promise<Library> {
    return LibraryEntity.findOneOrFail({ where: { id } });
  }

  async getLibraryContent(id: Library['id']): Promise<LibraryContent> {
    const library = await this.getLibrary(id);
    if (library.type === 'TV_SHOWS') {
      return (await ShowEntity.find({ where: { library: { id } } })).map(
        (show) => ({ type: 'TV_SHOWS', data: show }),
      );
    } else {
      return (await MovieEntity.find({ where: { library: { id } } })).map(
        (movie) => ({ type: 'MOVIES', data: movie }),
      );
    }
  }

  /**
   * Create a new library and start scanning it
   */
  async createLibrary(data: CreateLibrary) {
    if (
      !(await stat(join(this.config.getLibrariesRoot(), data.path)).catch(
        () => null,
      ))
    )
      return false;

    try {
      const library = await LibraryEntity.create({
        ...data,
      }).save();
      this.scanLibraryFiles(library);
      return library;
    } catch {
      return null;
    }
  }

  async addAccess(
    libraryId: Library['id'],
    data: EditLibraryPermissions['add'],
  ) {
    if (!data || data.length === 0) return;

    for (const item of data) {
      await LibraryAccessEntity.insert({
        access: item.access,
        user: UserEntity.create({ id: item.userId }),
        library: LibraryEntity.create({ id: libraryId }),
      });
    }
  }

  async removeAccess(
    libraryId: Library['id'],
    data: EditLibraryPermissions['remove'],
  ) {
    if (!data || data.length === 0) return;

    for (const item of data) {
      await LibraryAccessEntity.delete({
        access: item.access,
        library: { id: libraryId },
        user: { id: item.userId },
      });
    }
  }

  async deleteLibrary(libraryId: Library['id']) {
    // await this.prisma.stream.deleteMany({ where: { media: { libraryId } } });
    // await this.prisma.episode.deleteMany({
    //   where: { season: { show: { libraryId } } },
    // });
    // await this.prisma.season.deleteMany({
    //   where: { show: { libraryId } },
    // });
    // await this.prisma.show.deleteMany({ where: { libraryId } });
    // await this.prisma.movie.deleteMany({ where: { libraryId } });
    // await this.prisma.media.deleteMany({ where: { libraryId } });
    // await this.prisma.libraryAccess.deleteMany({
    //   where: { libraryId },
    // });
    // await this.prisma.library.delete({
    //   where: { id: libraryId },
    // });
  }
}
