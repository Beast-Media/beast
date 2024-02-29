import { Relation } from 'typeorm';

export type AppRelation<T> = Relation<T> | undefined;
