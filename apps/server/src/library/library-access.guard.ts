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
import { MovieEntity } from 'src/movie/dto/movie.dto';
import { ShowEntity } from 'src/show/dto/show.dto';
import { MediaEntity } from 'src/media/dto/media.dto';
import { LibraryAccessEntity } from './dto/library.dto';

@Injectable()
export class LibraryAccessGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async getLibraryId(
    request: Record<string, string>,
    query: LibraryAccessGuardData<any>['watchQuery'],
  ): Promise<string | undefined> {
    const id = request[query.id.toString()];
    if (query.from === 'MOVIES')
      return (
        await MovieEntity.findOne({
          where: { id },
          relations: { library: true },
        })
      )?.library?.id;
    if (query.from === 'TV_SHOWS')
      return (
        await ShowEntity.findOne({
          where: { id },
          relations: { library: true },
        })
      )?.library?.id;
    if (query.from === 'MEDIA')
      return (
        await MediaEntity.findOne({
          where: { id },
          relations: { library: true },
        })
      )?.library?.id;
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

    const libraryAccess = await LibraryAccessEntity.findOne({
      where: {
        user: { id: request.user.id },
        library: { id: libraryId },
        access: libraryAccessDecorator.type,
      },
    });

    return !!libraryAccess;
  }
}
