import { Library, LibraryEntity } from 'src/library/dto/library.dto';
import { Media, MediaEntity } from 'src/media/dto/media.dto';
import {
  BaseEntity,
  Column,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export interface Movie {
  id: string;
  name: string;
  overview?: string;
  tmdbId: number;
  media: Media;
  library?: Library;
}

export class MovieEntity extends BaseEntity implements Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  overview?: string | undefined;

  @Column()
  tmdbId: number;

  @OneToOne(() => MediaEntity, (media) => media.movie)
  media: MediaEntity;

  @ManyToOne(() => LibraryEntity)
  library?: LibraryEntity;
}
