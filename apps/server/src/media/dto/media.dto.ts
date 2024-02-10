import { Movie, MovieEntity } from 'src/movie/dto/movie.dto';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Library, LibraryEntity } from 'src/library/dto/library.dto';
import { AppRelation } from 'src/database/relations.dto';
import { Episode, EpisodeEntity } from 'src/show/dto/episode.dto';

export interface Media {
  id: string;
  path: string;
  width: number;
  height: number;
  bitrate: number;
  duration: number;
}

export interface MediaRelations {
  streams: AppRelation<MediaStream[]>;
  library: AppRelation<Library>;
  movie: AppRelation<Movie>;
  episode: AppRelation<Episode>;
}

export interface MediaWithStreams
  extends Media,
    Pick<MediaRelations, 'streams'> {}

export interface MediaStream {
  name: string;
  streamIndex: number;
  type: 'video' | 'audio' | 'subtitle' | 'attachment';
}

export interface MediaStreamRelations {
  media: AppRelation<Media>;
}

@Entity()
export class MediaStreamEntity
  extends BaseEntity
  implements MediaStream, MediaStreamRelations
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  streamIndex: number;

  @Column()
  type: 'video' | 'audio' | 'subtitle' | 'attachment';

  @ManyToOne(() => MediaEntity, (media) => media.streams, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  media: Media;
}

@Entity()
@Unique('unique_path', ['path'])
export class MediaEntity extends BaseEntity implements Media, MediaRelations {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  path: string;

  @Column()
  width: number;

  @Column()
  height: number;

  @Column()
  bitrate: number;

  @Column()
  duration: number;

  @OneToMany(() => MediaStreamEntity, (stream) => stream.media, {
    cascade: true,
  })
  @JoinColumn()
  streams: AppRelation<MediaStream[]>;

  @ManyToOne(() => LibraryEntity, (library) => library.id, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  library: AppRelation<LibraryEntity>;

  @OneToOne(() => MovieEntity, (movie) => movie.media, {
    onDelete: 'CASCADE',
  })
  movie: AppRelation<MovieEntity>;

  @OneToOne(() => EpisodeEntity, (episode) => episode.media, {
    onDelete: 'CASCADE',
  })
  episode: AppRelation<EpisodeEntity>;
}
