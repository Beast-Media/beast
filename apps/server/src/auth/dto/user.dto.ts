import { AppRelation } from 'src/database/relations.dto';
import {
  LibraryAccess,
  LibraryAccessEntity,
} from 'src/library/dto/library.dto';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export interface User {
  id: string;
  email: string;
  password: string;
  isOwner: boolean;
}

export interface UserRelations {
  libraryAccesses: AppRelation<LibraryAccess[]>;
}

@Entity()
export class UserEntity extends BaseEntity implements User, UserRelations {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  isOwner: boolean;

  @OneToMany(() => LibraryAccessEntity, (access) => access.user, {
    cascade: true,
  })
  libraryAccesses: AppRelation<LibraryAccessEntity[]>;
}
