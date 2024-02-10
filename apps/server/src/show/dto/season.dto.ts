import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Episode, EpisodeEntity } from './episode.dto';
import { Show, ShowEntity } from './show.dto';
import { AppRelation } from 'src/database/relations.dto';

export interface Season {
  id: string;
  name: string;
  season_number: number;
  overview: string | null;
  images: string[];
}

export interface SeasonRelations {
  episodes: AppRelation<Episode[]>;
  show: AppRelation<Show>;
}

@Entity()
@Unique('unique_season_for_show', ['season_number', 'show'])
export class SeasonEntity
  extends BaseEntity
  implements Season, SeasonRelations
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  season_number: number;

  @Column({ nullable: true, type: 'text' })
  overview: string | null;

  @OneToMany(() => EpisodeEntity, (episode) => episode.season, {
    nullable: false,
    cascade: true,
    onDelete: 'CASCADE',
  })
  episodes: AppRelation<Episode[]>;

  @ManyToOne(() => ShowEntity, (show) => show.seasons, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  show: AppRelation<Show>;

  @Column({ type: 'simple-array' })
  images: string[];
}

export interface SeasonWithEpisodes
  extends Season,
    Pick<SeasonRelations, 'episodes'> {}
