import {
  BaseEntity,
  FindOneOptions,
  FindOptionsRelations,
  Relation,
} from 'typeorm';

export type AppRelation<T> = Relation<T> | undefined;

export type ExtractRelation<T> = T extends AppRelation<infer U> ? U : never;

export type RelationsOnly<T> = {
  [P in keyof T as T[P] extends AppRelation<any> ? P : never]: ExtractRelation<
    T[P]
  >;
};

export type WithoutAppRelations<T> = {
  [P in keyof T as T[P] extends AppRelation<any> ? never : P]: T[P];
};

export type PickRelations<T, Specifier> = {
  [P in keyof T as P extends keyof Specifier
    ? Specifier[P] extends true
      ? P
      : never
    : never]: ExtractRelation<T[P]>;
};

// Custom FindOneOptions including relations specification
interface CustomFindOneOptions<T> extends FindOneOptions<T> {
  relations?: FindOptionsRelations<T>;
}

// Custom base entity with enhanced findOne method
export class MyCustomBaseEntity extends BaseEntity {
  static async findOneSafe<T extends MyCustomBaseEntity>(
    this: new () => T,
    options: CustomFindOneOptions<T>,
  ): Promise<
    (WithoutAppRelations<T> & PickRelations<T, typeof options.relations>) | null
  > {
    return super.findOne(options) as Promise<
      (T & PickRelations<T, typeof options.relations>) | null
    >;
  }
}

export type Expand<T> = T extends (...args: infer A) => infer R
  ? (...args: Expand<A>) => Expand<R>
  : T extends infer O
    ? { [K in keyof O]: O[K] }
    : never;
