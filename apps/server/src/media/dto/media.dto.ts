import { Movie, MovieEntity } from 'src/movie/dto/movie.dto';
import { Episode, EpisodeEntity } from 'src/show/dto/show.dto';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Library, LibraryEntity } from 'src/library/dto/library.dto';

export interface Media {
  id: string;
  path: string;
  width: number;
  height: number;
  bitrate: number;
  duration: number;

  streams?: MediaStream[];

  library?: Library;
  movie?: Movie;
  episode?: Episode;
}

export interface MediaStream {
  name: string;
  streamIndex: number;
  type: 'video' | 'audio' | 'subtitle' | 'attachment';
  media: Media;
}

@Entity()
export class MediaStreamEntity extends BaseEntity implements MediaStream {
  @Column()
  name: string;

  @Column()
  streamIndex: number;

  @Column()
  type: 'video' | 'audio' | 'subtitle' | 'attachment';

  @ManyToOne(() => MediaEntity, (media) => media.streams)
  media: Media;
}

@Entity()
export class MediaEntity extends BaseEntity implements Media {
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

  @OneToMany(() => MediaStreamEntity, (stream) => stream.media)
  streams: MediaStream[];

  @ManyToOne(() => LibraryEntity, (library) => library.id)
  library?: LibraryEntity;

  @OneToOne(() => MovieEntity, (movie) => movie.media)
  movie?: MovieEntity;

  @OneToOne(() => EpisodeEntity, (episode) => episode.media)
  episode?: EpisodeEntity;
}
