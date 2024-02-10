import { Library, LibraryEntity } from 'src/library/dto/library.dto';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { AppRelation } from 'src/database/relations.dto';
import { Season, SeasonEntity } from './season.dto';

export interface Show {
  id: string;
  tvmazeId: number;
  name: string;
  path: string;
  overview: string | null;
  images: string[];
}

export interface ShowRelations {
  seasons: AppRelation<Season[]>;
  library: AppRelation<Library>;
}

@Entity()
@Unique('unique_tvmazeId', ['tvmazeId'])
export class ShowEntity extends BaseEntity implements Show, ShowRelations {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tvmazeId: number;

  @Column()
  name: string;

  @Column()
  path: string;

  @Column({ nullable: true, type: 'text' })
  overview: string | null;

  @OneToMany(() => SeasonEntity, (season) => season.show, {
    nullable: false,
  })
  seasons: AppRelation<SeasonEntity[]>;

  @ManyToOne(() => LibraryEntity, (library) => library.shows, {
    nullable: false,
  })
  library: AppRelation<LibraryEntity>;

  @Column({ type: 'simple-array' })
  images: string[];
}

export interface ShowWithSeasons extends Show, Pick<ShowRelations, 'seasons'> {}
export interface ShowWithLibray extends Show, Pick<ShowRelations, 'library'> {}
