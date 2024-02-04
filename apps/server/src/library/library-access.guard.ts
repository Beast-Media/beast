import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { FastifyRequest } from 'fastify';
import {
  LIBRARY_ACCESS_KEY,
  LibraryAccessGuardData,
} from './library-access.decorator';
import { UserSession } from 'src/auth/dto/session';
import { LibraryType, ServerDBService } from '@beast/server-db-schemas';

@Injectable()
export class LibraryAccessGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: ServerDBService,
  ) {}

  async getLibraryId(
    request: Record<string, string>,
    query: LibraryAccessGuardData<any>['watchQuery'],
  ): Promise<string | undefined> {
    const id = request[query.id.toString()];
    if (query.from === LibraryType.MOVIES)
      return (await this.prisma.movie.findFirst({ where: { id } }))?.libraryId;
    if (query.from === LibraryType.TV_SHOWS)
      return (await this.prisma.show.findFirst({ where: { id } }))?.libraryId;
    if (query.from === 'MEDIA')
      return (await this.prisma.media.findFirst({ where: { id } }))?.libraryId;
    if (query.from === 'LIBRARY') return id;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const libraryAccessDecorator = this.reflector.getAllAndOverride<
      LibraryAccessGuardData<any> | undefined
    >(LIBRARY_ACCESS_KEY, [context.getHandler(), context.getClass()]);
    if (!libraryAccessDecorator) {
      return true;
    }
    const request = context
      .switchToHttp()
      .getRequest<
        FastifyRequest<Record<string, string>> & { user: UserSession }
      >();
    if (!request.user) return false;

    const libraryId = await this.getLibraryId(
      request.query as any,
      libraryAccessDecorator.watchQuery,
    );
    if (!libraryId)
      throw new HttpException(
        'Cannot find the library id in the request',
        HttpStatus.BAD_REQUEST,
      );

    const libraryAccess = await this.prisma.libraryAccess.findFirst({
      where: {
        userId: request.user.id,
        libraryId,
        access: libraryAccessDecorator.type,
      },
    });

    return !!libraryAccess;
  }
}
