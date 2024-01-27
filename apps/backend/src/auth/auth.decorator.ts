import {
  applyDecorators,
  createParamDecorator,
  SetMetadata,
} from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import { UserSession } from './dto/session';

export const AUTHENTICATED_KEY = 'authenticated';
export const Authenticated = () =>
  applyDecorators(SetMetadata(AUTHENTICATED_KEY, true));

export const User = createParamDecorator(
  (data, req: FastifyRequest & { user: UserSession }) => {
    return req.user;
  },
);
