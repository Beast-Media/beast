import { TypedBody, TypedQuery, TypedRoute } from '@nestia/core';
import { Controller, HttpException, HttpStatus } from '@nestjs/common';
import { LibraryService } from './library.service';
import { Authenticated, User, IsOwner } from 'src/auth/auth.decorator';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { UserSession } from 'src/auth/dto/session';
import { HasLibraryAccess } from './library-access.decorator';
import { Library } from './dto/library.dto';
import {
  CreateLibrary,
  EditLibraryPermissions,
  LibraryContent,
  QueryFilesystem,
  QueryLibrary,
} from './dto/library.queries';

/**
 * Controller for the Libraries
 */
@ApiTags('library')
@ApiSecurity('bearer')
@Controller('library')
@Authenticated()
export class LibraryController {
  constructor(public libraryService: LibraryService) {}

  /**
   * List all accessible libraries
   */
  @TypedRoute.Get('/all')
  public async libraries(@User() user: UserSession): Promise<Library[]> {
    return this.libraryService.getAccessibleLibraries(user.id);
  }

  /**
   * create a new library
   */
  @IsOwner()
  @TypedRoute.Post('/new')
  public async newLibrary(
    @User() user: UserSession,
    @TypedBody() body: CreateLibrary,
  ): Promise<Library | false> {
    const library = await this.libraryService.createLibrary(body);
    if (!library) return false;
    await this.libraryService.addAccess(library.id, [
      { access: 'READ', userId: user.id },
      { access: 'WRITE', userId: user.id },
    ]);
    return library;
  }

  /**
   * delete a library
   */
  @IsOwner()
  @TypedRoute.Delete('/')
  public async deleteLibrary(@TypedQuery() query: QueryLibrary): Promise<true> {
    await this.libraryService.deleteLibrary(query.libraryId);
    return true;
  }

  @IsOwner()
  @TypedRoute.Post('/access')
  public async access(
    @TypedBody() body: EditLibraryPermissions,
  ): Promise<boolean> {
    if (body.add) await this.libraryService.addAccess(body.libraryId, body.add);
    if (body.remove)
      await this.libraryService.removeAccess(body.libraryId, body.remove);
    return true;
  }

  /**
   * Scan library, check and update missing metadatas or medias
   */
  @TypedRoute.Get('scan')
  @HasLibraryAccess<QueryLibrary>('WRITE', {
    from: 'LIBRARY',
    id: 'libraryId',
  })
  public async scan(@TypedQuery() query: QueryLibrary): Promise<boolean> {
    try {
      const library = await this.libraryService.getLibrary(query.libraryId);
      await this.libraryService.scanLibraryFiles(library);

      return true;
    } catch (e) {
      throw e;
    }
  }

  /**
   * Get the Library data from its id
   */
  @TypedRoute.Get('/')
  @HasLibraryAccess<QueryLibrary>('READ', {
    from: 'LIBRARY',
    id: 'libraryId',
  })
  public async library(@TypedQuery() query: QueryLibrary): Promise<Library> {
    return this.libraryService.getLibrary(query.libraryId);
  }

  /**
   * Get the Library data from its id
   */
  @TypedRoute.Get('/content')
  @HasLibraryAccess<QueryLibrary>('READ', {
    from: 'LIBRARY',
    id: 'libraryId',
  })
  public async libraryContent(
    @TypedQuery() query: QueryLibrary,
  ): Promise<LibraryContent> {
    return this.libraryService.getLibraryContent(query.libraryId);
  }

  /**
   * Show filesystem
   *
   * I do not like this endpoint, but i do not know any other way yet
   */
  @TypedRoute.Get('/show-filesystem')
  @IsOwner()
  public async showFilesystem(
    @TypedQuery() query: QueryFilesystem,
  ): Promise<string[]> {
    try {
      return await this.libraryService.listFolders(query.root);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }
}
