import { User, UserEntity } from 'src/auth/dto/user.dto';
import { AppRelation } from 'src/database/relations.dto';
import { Media, MediaEntity } from 'src/media/dto/media.dto';
import { Movie, MovieEntity } from 'src/movie/dto/movie.dto';
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
  movies: AppRelation<Movie[]>;
  medias: AppRelation<Media[]>;
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

  @OneToMany(() => ShowEntity, (show) => show.library, {
    cascade: true,
  })
  shows: ShowEntity[];

  @OneToMany(() => MovieEntity, (movie) => movie.library, {
    cascade: true,
  })
  movies: MovieEntity[];

  @OneToMany(() => MediaEntity, (media) => media.library, {
    cascade: true,
  })
  medias: Media[];

  @OneToMany(() => LibraryAccessEntity, (access) => access.library, {
    cascade: true,
  })
  libraryAccesses: LibraryAccessEntity[];
}

@Entity()
export class LibraryAccessEntity extends BaseEntity implements LibraryAccess {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity, (user) => user.libraryAccesses)
  user: UserEntity;

  @ManyToOne(() => LibraryEntity, (library) => library.libraryAccesses, {
    onDelete: 'CASCADE',
  })
  library: LibraryEntity;

  @Column()
  access: 'READ' | 'WRITE';
}
