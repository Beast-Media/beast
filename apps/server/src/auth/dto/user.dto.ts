import {
  LibraryAccess,
  LibraryAccessEntity,
} from 'src/library/dto/library.dto';
import { BaseEntity, Entity, OneToMany } from 'typeorm';

export interface User {
  id: string;
  email: string;
  password: string;
  isOwner: string;

  libraryAccesses?: LibraryAccess[];
}

@Entity()
export class UserEntity extends BaseEntity implements User {
  id: string;
  email: string;
  password: string;
  isOwner: string;

  @OneToMany(() => LibraryAccessEntity, (access) => access.user)
  libraryAccesses?: LibraryAccessEntity[];
}
