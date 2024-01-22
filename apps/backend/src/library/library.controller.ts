import { TypedBody, TypedQuery, TypedRoute } from '@nestia/core';
import { Controller } from '@nestjs/common';
import {
  CreateLibraryDTO,
  LibraryContent,
  LibraryDTO,
  QueryLibrary,
} from './dto/library.dto';
import { LibraryService } from './library.service';
import { Library } from '@prisma/client';
import { Authenticated } from 'src/auth/auth.decorator';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

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
   * List all libraries
   */
  @TypedRoute.Get('/all')
  public async libraries(): Promise<Library[]> {
    return this.libraryService.getLibraries();
  }

  /**
   * Create a new library and start scanning it
   */
  @TypedRoute.Post('new')
  public async newLibrary(
    @TypedBody() createDto: CreateLibraryDTO,
  ): Promise<boolean> {
    return this.libraryService.createLibrary(createDto);
  }

  /**
   * Scan library, check and update missing metadatas or medias
   */
  @TypedRoute.Get('scan')
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
  public async library(@TypedQuery() query: QueryLibrary): Promise<LibraryDTO> {
    return this.libraryService.getLibrary(query.libraryId);
  }

  /**
   * Get the Library data from its id
   */
  @TypedRoute.Get('/content')
  public async libraryContent(
    @TypedQuery() query: QueryLibrary,
  ): Promise<LibraryContent> {
    return this.libraryService.getLibraryContent(query.libraryId);
  }
}
