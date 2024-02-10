import { AppRelation } from 'src/database/relations.dto';
import { Library, LibraryEntity } from 'src/library/dto/library.dto';
import { Media, MediaEntity } from 'src/media/dto/media.dto';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  RelationId,
  Unique,
} from 'typeorm';

export interface Movie {
  id: string;
  name: string;
  overview: string | null;
  tmdbId: number;
  images: string[];
  mediaId: string;
}

export interface MovieRelations {
  media: AppRelation<Media>;
  library: AppRelation<Library>;
}

@Entity()
@Unique('unique_tmdbId', ['tmdbId'])
export class MovieEntity extends BaseEntity implements Movie, MovieRelations {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true, type: 'text' })
  overview: string | null;

  @Column()
  tmdbId: number;

  @OneToOne(() => MediaEntity, (media) => media.movie, {
    nullable: false,
    cascade: true,
  })
  @JoinColumn()
  media: MediaEntity;

  @ManyToOne(() => LibraryEntity, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  library?: LibraryEntity;

  @Column({ type: 'simple-array' })
  images: string[];

  @RelationId((movie: MovieEntity) => movie.media)
  mediaId: string;
}
