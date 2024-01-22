import { applyDecorators, SetMetadata } from '@nestjs/common';

export const AUTHENTICATED_KEY = 'authenticated';
export const Authenticated = () =>
  applyDecorators(SetMetadata(AUTHENTICATED_KEY, true));
