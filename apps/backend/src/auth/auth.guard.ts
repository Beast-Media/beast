import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/config/config.service';
import jwt from 'jsonwebtoken';
import { Reflector } from '@nestjs/core';
import { AUTHENTICATED_KEY } from './auth.decorator';
import { FastifyRequest } from 'fastify';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private configService: ConfigService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const authenticatedDecorator = this.reflector.getAllAndOverride<boolean>(
      AUTHENTICATED_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!authenticatedDecorator) {
      return true;
    }

    const request = context.switchToHttp().getRequest<FastifyRequest>();

    const token = request.headers.authorization?.substring('Bearer '.length);

    if (!token) return false;

    try {
      jwt.verify(token, this.configService.getAuthJWTSecret());
      return true;
    } catch {
      return false;
    }
  }
}
