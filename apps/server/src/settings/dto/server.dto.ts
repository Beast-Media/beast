import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export interface Server {
  id: string;
  name: string;
}

export class ServerEntity extends BaseEntity implements Server {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
