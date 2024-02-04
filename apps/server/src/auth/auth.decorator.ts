import {
  applyDecorators,
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import { UserSession } from './dto/session';

export const AUTHENTICATED_KEY = 'authenticated';
export const Authenticated = () =>
  applyDecorators(SetMetadata(AUTHENTICATED_KEY, true));

export const User = createParamDecorator((data, context: ExecutionContext) => {
  const request = context
    .switchToHttp()
    .getRequest<FastifyRequest & { user: UserSession }>();
  return request.user;
});

export const OWNER_KEY = 'owner';
export const IsOwner = () => applyDecorators(SetMetadata(OWNER_KEY, true));
