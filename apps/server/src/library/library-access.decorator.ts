import { LibraryAccessType, LibraryType } from '@beast/server-db-schemas';
import { SetMetadata, applyDecorators } from '@nestjs/common';

export interface LibraryAccessGuardData<T> {
  type: LibraryAccessType;
  watchQuery:
    | { from: LibraryType; id: keyof T }
    | { from: 'LIBRARY'; id: keyof T }
    | { from: 'MEDIA'; id: keyof T };
}

export const LIBRARY_ACCESS_KEY = 'library_access';
export const HasLibraryAccess = <T>(
  type: LibraryAccessGuardData<T>['type'],
  watchQuery: LibraryAccessGuardData<T>['watchQuery'],
) => applyDecorators(SetMetadata(LIBRARY_ACCESS_KEY, { type, watchQuery }));
