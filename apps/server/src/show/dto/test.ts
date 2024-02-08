import { Relation } from 'typeorm';

export type AppRelation<T> = (Relation<T> & { test: 'string' }) | undefined;

export interface Show {
  id: string;
  tvmazeId: number;
  name: string;
  path: string;
  overview?: string;

  seasons: AppRelation<string[]>;
  library: AppRelation<number>;
}

type WithoutAppRelations<T> = {
  [P in keyof T as T[P] extends AppRelation<any> ? never : P]: T[P];
};

type WithOnlyAppRelations<T> = {
  [P in keyof T as T[P] extends AppRelation<any> ? P : never]: T[P];
};

export type ExtractRelation<T> = T extends AppRelation<infer U> ? U : never;

export type PickAppRelations<
  T,
  Relations extends {
    [K in keyof T]?: T[K] extends AppRelation<any> ? true : never;
  },
> = {
  [P in keyof T as P extends keyof Relations ? P : never]: T[P];
};

export type Expand<T> = T extends (...args: infer A) => infer R
  ? (...args: Expand<A>) => Expand<R>
  : T extends infer O
    ? { [K in keyof O]: O[K] }
    : never;

type ShowWithoutRelations = Expand<WithoutAppRelations<Show>>;
type ShowOnlyRelations = Expand<WithOnlyAppRelations<Show>>;
type ShowWithSeasons = Expand<PickAppRelations<Show, { seasons: true }>>;
