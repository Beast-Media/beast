import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { Media, MediaEntity } from 'src/media/dto/media.dto';
import { Season, SeasonEntity } from './season.dto';
import { AppRelation } from 'src/database/relations.dto';

export interface Episode {
  id: string;
  name: string;
  episode_number: number;
  overview: string | null;
  images: string[];

  mediaId: string;
}

export interface EpisodeRelations {
  media: AppRelation<Media>;
  season: AppRelation<Season>;
}

@Entity()
export class EpisodeEntity
  extends BaseEntity
  implements Episode, EpisodeRelations
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  episode_number: number;

  @Column({ nullable: true, type: 'text' })
  overview: string | null;

  @OneToOne(() => MediaEntity, (media) => media.episode, {
    nullable: false,
  })
  @JoinColumn()
  media: AppRelation<MediaEntity>;

  @ManyToOne(() => SeasonEntity, (season) => season.episodes, {
    nullable: false,
  })
  season: AppRelation<SeasonEntity>;

  @Column({ type: 'simple-array' })
  images: string[];

  @RelationId((episode: EpisodeEntity) => episode.media)
  mediaId: string;
}
