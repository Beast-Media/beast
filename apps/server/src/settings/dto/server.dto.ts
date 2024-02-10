import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export interface Server {
  id: string;
  name: string;
}

@Entity()
export class ServerEntity extends BaseEntity implements Server {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
