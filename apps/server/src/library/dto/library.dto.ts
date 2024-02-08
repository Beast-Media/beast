import { User, UserEntity } from 'src/auth/dto/user.dto';
import { Show, ShowEntity } from 'src/show/dto/show.dto';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export interface Library {
  id: string;
  type: 'MOVIES' | 'TV_SHOWS';
  name: string;
  path: string;

  shows: Show[];

  libraryAccesses: LibraryAccess[];
}

export interface LibraryAccess {
  user?: User;
  access: 'READ' | 'WRITE';
}

@Entity()
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
  @ManyToOne(() => UserEntity, (user) => user.libraryAccesses)
  user: UserEntity;

  @ManyToOne(() => LibraryEntity, (library) => library.libraryAccesses)
  library: LibraryEntity;

  access: 'READ' | 'WRITE';
}
