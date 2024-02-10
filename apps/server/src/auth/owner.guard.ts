import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { OWNER_KEY } from './auth.decorator';
import { FastifyRequest } from 'fastify';
import { UserSession } from './dto/session';
import { UserEntity } from './dto/user.dto';

@Injectable()
export class OwnerGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

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

    const foundUser = await UserEntity.findOne({
      where: { id: request.user.id, isOwner: true },
    });
    return !!foundUser;
  }
}
