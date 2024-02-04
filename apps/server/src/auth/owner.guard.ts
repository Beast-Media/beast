import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { OWNER_KEY } from './auth.decorator';
import { FastifyRequest } from 'fastify';
import { UserSession } from './dto/session';
import { ServerDBService } from '@beast/server-db-schemas';

@Injectable()
export class OwnerGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: ServerDBService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isOwnerDecorator = this.reflector.getAllAndOverride<boolean>(
      OWNER_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!isOwnerDecorator) {
      return true;
    }

    const request = context
      .switchToHttp()
      .getRequest<FastifyRequest & { user: UserSession }>();

    if (!request.user) return false;

    const foundUser = await this.prisma.user.findFirst({
      where: { id: request.user.id, isOwner: true },
    });
    return !!foundUser;
  }
}
