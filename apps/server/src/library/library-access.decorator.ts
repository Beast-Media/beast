import { SetMetadata, applyDecorators } from '@nestjs/common';
import { Library, LibraryAccess } from './dto/library.dto';

export interface LibraryAccessGuardData<T> {
  type: LibraryAccess['access'];
  watchQuery:
    | { from: Library['type']; id: keyof T }
    | { from: 'LIBRARY'; id: keyof T }
    | { from: 'MEDIA'; id: keyof T };
}

export const LIBRARY_ACCESS_KEY = 'library_access';
export const HasLibraryAccess = <T>(
  type: LibraryAccessGuardData<T>['type'],
  watchQuery: LibraryAccessGuardData<T>['watchQuery'],
) => applyDecorators(SetMetadata(LIBRARY_ACCESS_KEY, { type, watchQuery }));
