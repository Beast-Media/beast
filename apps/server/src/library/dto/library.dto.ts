import { User, UserEntity } from 'src/auth/dto/user.dto';
import { AppRelation } from 'src/database/relations.dto';
import { Show, ShowEntity } from 'src/show/dto/show.dto';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

export interface Library {
  id: string;
  type: 'MOVIES' | 'TV_SHOWS';
  name: string;
  path: string;
}

export interface LibraryRelations {
  shows: AppRelation<Show[]>;
  libraryAccesses: AppRelation<LibraryAccess[]>;
}

export interface LibraryAccess {
  user?: User;
  access: 'READ' | 'WRITE';
}

@Entity()
@Unique('unique_name', ['name'])
export class LibraryEntity extends BaseEntity implements Library {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: 'MOVIES' | 'TV_SHOWS';

  @Column()
  name: string;

  @Column()
  path: string;

  @OneToMany(() => ShowEntity, (show) => show.library)
  shows: ShowEntity[];

  @OneToMany(() => LibraryAccessEntity, (access) => access.library)
  libraryAccesses: LibraryAccessEntity[];
}

@Entity()
export class LibraryAccessEntity extends BaseEntity implements LibraryAccess {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity, (user) => user.libraryAccesses)
  user: UserEntity;

  @ManyToOne(() => LibraryEntity, (library) => library.libraryAccesses)
  library: LibraryEntity;

  @Column()
  access: 'READ' | 'WRITE';
}
