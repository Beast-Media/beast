import { Library, LibraryEntity } from 'src/library/dto/library.dto';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Media, MediaEntity } from 'src/media/dto/media.dto';
import { AppRelation, MyCustomBaseEntity } from 'src/database/relations.dto';

export interface Episode {
  id: string;
  name: string;
  episode_number: number;
  overview?: string;

  media: AppRelation<Media>;
  season: AppRelation<Season>;
}

export interface Season {
  id: string;
  name: string;
  season_number: number;
  overview?: string;

  episodes: AppRelation<Episode[]>;
  show: AppRelation<Show>;
}

export interface Show {
  id: string;
  tvmazeId: number;
  name: string;
  path: string;
  overview?: string;

  seasons: AppRelation<Season[]>;
  library: AppRelation<Library>;
}

@Entity()
export class ShowEntity extends MyCustomBaseEntity implements Show {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tvmazeId: number;

  @Column()
  name: string;

  @Column()
  path: string;

  @Column()
  overview?: string;

  @OneToMany(() => SeasonEntity, (season) => season.show)
  seasons: AppRelation<SeasonEntity[]>;

  @ManyToOne(() => LibraryEntity, (library) => library.shows)
  library: AppRelation<LibraryEntity>;
}

export class SeasonEntity extends BaseEntity implements Season {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  season_number: number;

  @Column()
  overview?: string;

  @OneToMany(() => EpisodeEntity, (episode) => episode.season)
  episodes: AppRelation<Episode[]>;

  @ManyToOne(() => ShowEntity, (show) => show.seasons)
  show: AppRelation<Show>;
}

export class EpisodeEntity extends BaseEntity implements Episode {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  episode_number: number;

  @Column()
  overview?: string;

  @OneToOne(() => MediaEntity, (media) => media.episode)
  media: AppRelation<MediaEntity>;

  @ManyToOne(() => SeasonEntity, (season) => season.episodes)
  season: AppRelation<SeasonEntity>;
}
