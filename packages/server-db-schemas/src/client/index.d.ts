
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Library
 * 
 */
export type Library = $Result.DefaultSelection<Prisma.$LibraryPayload>
/**
 * Model Stream
 * 
 */
export type Stream = $Result.DefaultSelection<Prisma.$StreamPayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model Episode
 * 
 */
export type Episode = $Result.DefaultSelection<Prisma.$EpisodePayload>
/**
 * Model Season
 * 
 */
export type Season = $Result.DefaultSelection<Prisma.$SeasonPayload>
/**
 * Model Show
 * 
 */
export type Show = $Result.DefaultSelection<Prisma.$ShowPayload>
/**
 * Model Movie
 * 
 */
export type Movie = $Result.DefaultSelection<Prisma.$MoviePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Server
 * 
 */
export type Server = $Result.DefaultSelection<Prisma.$ServerPayload>
/**
 * Model LibraryAccess
 * 
 */
export type LibraryAccess = $Result.DefaultSelection<Prisma.$LibraryAccessPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LibraryType: {
  MOVIES: 'MOVIES',
  TV_SHOWS: 'TV_SHOWS'
};

export type LibraryType = (typeof LibraryType)[keyof typeof LibraryType]


export const StreamType: {
  video: 'video',
  audio: 'audio',
  subtitle: 'subtitle',
  attachment: 'attachment'
};

export type StreamType = (typeof StreamType)[keyof typeof StreamType]


export const LibraryAccessType: {
  READ: 'READ',
  WRITE: 'WRITE'
};

export type LibraryAccessType = (typeof LibraryAccessType)[keyof typeof LibraryAccessType]

}

export type LibraryType = $Enums.LibraryType

export const LibraryType: typeof $Enums.LibraryType

export type StreamType = $Enums.StreamType

export const StreamType: typeof $Enums.StreamType

export type LibraryAccessType = $Enums.LibraryAccessType

export const LibraryAccessType: typeof $Enums.LibraryAccessType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Libraries
 * const libraries = await prisma.library.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Libraries
   * const libraries = await prisma.library.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.library`: Exposes CRUD operations for the **Library** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Libraries
    * const libraries = await prisma.library.findMany()
    * ```
    */
  get library(): Prisma.LibraryDelegate<ExtArgs>;

  /**
   * `prisma.stream`: Exposes CRUD operations for the **Stream** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Streams
    * const streams = await prisma.stream.findMany()
    * ```
    */
  get stream(): Prisma.StreamDelegate<ExtArgs>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs>;

  /**
   * `prisma.episode`: Exposes CRUD operations for the **Episode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Episodes
    * const episodes = await prisma.episode.findMany()
    * ```
    */
  get episode(): Prisma.EpisodeDelegate<ExtArgs>;

  /**
   * `prisma.season`: Exposes CRUD operations for the **Season** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seasons
    * const seasons = await prisma.season.findMany()
    * ```
    */
  get season(): Prisma.SeasonDelegate<ExtArgs>;

  /**
   * `prisma.show`: Exposes CRUD operations for the **Show** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shows
    * const shows = await prisma.show.findMany()
    * ```
    */
  get show(): Prisma.ShowDelegate<ExtArgs>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.server`: Exposes CRUD operations for the **Server** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servers
    * const servers = await prisma.server.findMany()
    * ```
    */
  get server(): Prisma.ServerDelegate<ExtArgs>;

  /**
   * `prisma.libraryAccess`: Exposes CRUD operations for the **LibraryAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LibraryAccesses
    * const libraryAccesses = await prisma.libraryAccess.findMany()
    * ```
    */
  get libraryAccess(): Prisma.LibraryAccessDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Library: 'Library',
    Stream: 'Stream',
    Media: 'Media',
    Episode: 'Episode',
    Season: 'Season',
    Show: 'Show',
    Movie: 'Movie',
    User: 'User',
    Server: 'Server',
    LibraryAccess: 'LibraryAccess'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'library' | 'stream' | 'media' | 'episode' | 'season' | 'show' | 'movie' | 'user' | 'server' | 'libraryAccess'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Library: {
        payload: Prisma.$LibraryPayload<ExtArgs>
        fields: Prisma.LibraryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LibraryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LibraryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          findFirst: {
            args: Prisma.LibraryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LibraryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          findMany: {
            args: Prisma.LibraryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>[]
          }
          create: {
            args: Prisma.LibraryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          createMany: {
            args: Prisma.LibraryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LibraryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          update: {
            args: Prisma.LibraryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          deleteMany: {
            args: Prisma.LibraryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LibraryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LibraryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          aggregate: {
            args: Prisma.LibraryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLibrary>
          }
          groupBy: {
            args: Prisma.LibraryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LibraryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LibraryCountArgs<ExtArgs>,
            result: $Utils.Optional<LibraryCountAggregateOutputType> | number
          }
        }
      }
      Stream: {
        payload: Prisma.$StreamPayload<ExtArgs>
        fields: Prisma.StreamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreamFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StreamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreamFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>
          }
          findFirst: {
            args: Prisma.StreamFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StreamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreamFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>
          }
          findMany: {
            args: Prisma.StreamFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>[]
          }
          create: {
            args: Prisma.StreamCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>
          }
          createMany: {
            args: Prisma.StreamCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StreamDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>
          }
          update: {
            args: Prisma.StreamUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>
          }
          deleteMany: {
            args: Prisma.StreamDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StreamUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StreamUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>
          }
          aggregate: {
            args: Prisma.StreamAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStream>
          }
          groupBy: {
            args: Prisma.StreamGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StreamGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreamCountArgs<ExtArgs>,
            result: $Utils.Optional<StreamCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>,
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      Episode: {
        payload: Prisma.$EpisodePayload<ExtArgs>
        fields: Prisma.EpisodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EpisodeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EpisodeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findFirst: {
            args: Prisma.EpisodeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EpisodeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findMany: {
            args: Prisma.EpisodeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          create: {
            args: Prisma.EpisodeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          createMany: {
            args: Prisma.EpisodeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EpisodeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          update: {
            args: Prisma.EpisodeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          deleteMany: {
            args: Prisma.EpisodeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EpisodeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EpisodeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          aggregate: {
            args: Prisma.EpisodeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEpisode>
          }
          groupBy: {
            args: Prisma.EpisodeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EpisodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EpisodeCountArgs<ExtArgs>,
            result: $Utils.Optional<EpisodeCountAggregateOutputType> | number
          }
        }
      }
      Season: {
        payload: Prisma.$SeasonPayload<ExtArgs>
        fields: Prisma.SeasonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeasonFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeasonFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          findFirst: {
            args: Prisma.SeasonFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeasonFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          findMany: {
            args: Prisma.SeasonFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>[]
          }
          create: {
            args: Prisma.SeasonCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          createMany: {
            args: Prisma.SeasonCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SeasonDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          update: {
            args: Prisma.SeasonUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          deleteMany: {
            args: Prisma.SeasonDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SeasonUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SeasonUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          aggregate: {
            args: Prisma.SeasonAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSeason>
          }
          groupBy: {
            args: Prisma.SeasonGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SeasonGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeasonCountArgs<ExtArgs>,
            result: $Utils.Optional<SeasonCountAggregateOutputType> | number
          }
        }
      }
      Show: {
        payload: Prisma.$ShowPayload<ExtArgs>
        fields: Prisma.ShowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShowFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShowFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          findFirst: {
            args: Prisma.ShowFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShowFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          findMany: {
            args: Prisma.ShowFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>[]
          }
          create: {
            args: Prisma.ShowCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          createMany: {
            args: Prisma.ShowCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ShowDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          update: {
            args: Prisma.ShowUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          deleteMany: {
            args: Prisma.ShowDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ShowUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ShowUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          aggregate: {
            args: Prisma.ShowAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateShow>
          }
          groupBy: {
            args: Prisma.ShowGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ShowGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShowCountArgs<ExtArgs>,
            result: $Utils.Optional<ShowCountAggregateOutputType> | number
          }
        }
      }
      Movie: {
        payload: Prisma.$MoviePayload<ExtArgs>
        fields: Prisma.MovieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findFirst: {
            args: Prisma.MovieFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findMany: {
            args: Prisma.MovieFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          create: {
            args: Prisma.MovieCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          createMany: {
            args: Prisma.MovieCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MovieDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          update: {
            args: Prisma.MovieUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          deleteMany: {
            args: Prisma.MovieDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MovieUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MovieUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMovie>
          }
          groupBy: {
            args: Prisma.MovieGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieCountArgs<ExtArgs>,
            result: $Utils.Optional<MovieCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Server: {
        payload: Prisma.$ServerPayload<ExtArgs>
        fields: Prisma.ServerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          findFirst: {
            args: Prisma.ServerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          findMany: {
            args: Prisma.ServerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>[]
          }
          create: {
            args: Prisma.ServerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          createMany: {
            args: Prisma.ServerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ServerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          update: {
            args: Prisma.ServerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          deleteMany: {
            args: Prisma.ServerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ServerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ServerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          aggregate: {
            args: Prisma.ServerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateServer>
          }
          groupBy: {
            args: Prisma.ServerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ServerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServerCountArgs<ExtArgs>,
            result: $Utils.Optional<ServerCountAggregateOutputType> | number
          }
        }
      }
      LibraryAccess: {
        payload: Prisma.$LibraryAccessPayload<ExtArgs>
        fields: Prisma.LibraryAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LibraryAccessFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LibraryAccessFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryAccessPayload>
          }
          findFirst: {
            args: Prisma.LibraryAccessFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LibraryAccessFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryAccessPayload>
          }
          findMany: {
            args: Prisma.LibraryAccessFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryAccessPayload>[]
          }
          create: {
            args: Prisma.LibraryAccessCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryAccessPayload>
          }
          createMany: {
            args: Prisma.LibraryAccessCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LibraryAccessDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryAccessPayload>
          }
          update: {
            args: Prisma.LibraryAccessUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryAccessPayload>
          }
          deleteMany: {
            args: Prisma.LibraryAccessDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LibraryAccessUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LibraryAccessUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LibraryAccessPayload>
          }
          aggregate: {
            args: Prisma.LibraryAccessAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLibraryAccess>
          }
          groupBy: {
            args: Prisma.LibraryAccessGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LibraryAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.LibraryAccessCountArgs<ExtArgs>,
            result: $Utils.Optional<LibraryAccessCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LibraryCountOutputType
   */

  export type LibraryCountOutputType = {
    medias: number
    shows: number
    movies: number
    libraryAccess: number
  }

  export type LibraryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medias?: boolean | LibraryCountOutputTypeCountMediasArgs
    shows?: boolean | LibraryCountOutputTypeCountShowsArgs
    movies?: boolean | LibraryCountOutputTypeCountMoviesArgs
    libraryAccess?: boolean | LibraryCountOutputTypeCountLibraryAccessArgs
  }

  // Custom InputTypes

  /**
   * LibraryCountOutputType without action
   */
  export type LibraryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryCountOutputType
     */
    select?: LibraryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * LibraryCountOutputType without action
   */
  export type LibraryCountOutputTypeCountMediasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }


  /**
   * LibraryCountOutputType without action
   */
  export type LibraryCountOutputTypeCountShowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowWhereInput
  }


  /**
   * LibraryCountOutputType without action
   */
  export type LibraryCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
  }


  /**
   * LibraryCountOutputType without action
   */
  export type LibraryCountOutputTypeCountLibraryAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibraryAccessWhereInput
  }



  /**
   * Count Type MediaCountOutputType
   */

  export type MediaCountOutputType = {
    streams: number
  }

  export type MediaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streams?: boolean | MediaCountOutputTypeCountStreamsArgs
  }

  // Custom InputTypes

  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaCountOutputType
     */
    select?: MediaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeCountStreamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamWhereInput
  }



  /**
   * Count Type SeasonCountOutputType
   */

  export type SeasonCountOutputType = {
    episodes: number
  }

  export type SeasonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | SeasonCountOutputTypeCountEpisodesArgs
  }

  // Custom InputTypes

  /**
   * SeasonCountOutputType without action
   */
  export type SeasonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonCountOutputType
     */
    select?: SeasonCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SeasonCountOutputType without action
   */
  export type SeasonCountOutputTypeCountEpisodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
  }



  /**
   * Count Type ShowCountOutputType
   */

  export type ShowCountOutputType = {
    seasons: number
  }

  export type ShowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seasons?: boolean | ShowCountOutputTypeCountSeasonsArgs
  }

  // Custom InputTypes

  /**
   * ShowCountOutputType without action
   */
  export type ShowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCountOutputType
     */
    select?: ShowCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ShowCountOutputType without action
   */
  export type ShowCountOutputTypeCountSeasonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeasonWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    user: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserCountOutputTypeCountUserArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibraryAccessWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Library
   */

  export type AggregateLibrary = {
    _count: LibraryCountAggregateOutputType | null
    _min: LibraryMinAggregateOutputType | null
    _max: LibraryMaxAggregateOutputType | null
  }

  export type LibraryMinAggregateOutputType = {
    id: string | null
    type: $Enums.LibraryType | null
    name: string | null
    path: string | null
    createdAt: Date | null
  }

  export type LibraryMaxAggregateOutputType = {
    id: string | null
    type: $Enums.LibraryType | null
    name: string | null
    path: string | null
    createdAt: Date | null
  }

  export type LibraryCountAggregateOutputType = {
    id: number
    type: number
    name: number
    path: number
    createdAt: number
    _all: number
  }


  export type LibraryMinAggregateInputType = {
    id?: true
    type?: true
    name?: true
    path?: true
    createdAt?: true
  }

  export type LibraryMaxAggregateInputType = {
    id?: true
    type?: true
    name?: true
    path?: true
    createdAt?: true
  }

  export type LibraryCountAggregateInputType = {
    id?: true
    type?: true
    name?: true
    path?: true
    createdAt?: true
    _all?: true
  }

  export type LibraryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Library to aggregate.
     */
    where?: LibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libraries to fetch.
     */
    orderBy?: LibraryOrderByWithRelationInput | LibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Libraries
    **/
    _count?: true | LibraryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibraryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibraryMaxAggregateInputType
  }

  export type GetLibraryAggregateType<T extends LibraryAggregateArgs> = {
        [P in keyof T & keyof AggregateLibrary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibrary[P]>
      : GetScalarType<T[P], AggregateLibrary[P]>
  }




  export type LibraryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibraryWhereInput
    orderBy?: LibraryOrderByWithAggregationInput | LibraryOrderByWithAggregationInput[]
    by: LibraryScalarFieldEnum[] | LibraryScalarFieldEnum
    having?: LibraryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibraryCountAggregateInputType | true
    _min?: LibraryMinAggregateInputType
    _max?: LibraryMaxAggregateInputType
  }

  export type LibraryGroupByOutputType = {
    id: string
    type: $Enums.LibraryType
    name: string
    path: string
    createdAt: Date
    _count: LibraryCountAggregateOutputType | null
    _min: LibraryMinAggregateOutputType | null
    _max: LibraryMaxAggregateOutputType | null
  }

  type GetLibraryGroupByPayload<T extends LibraryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibraryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibraryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibraryGroupByOutputType[P]>
            : GetScalarType<T[P], LibraryGroupByOutputType[P]>
        }
      >
    >


  export type LibrarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    path?: boolean
    createdAt?: boolean
    medias?: boolean | Library$mediasArgs<ExtArgs>
    shows?: boolean | Library$showsArgs<ExtArgs>
    movies?: boolean | Library$moviesArgs<ExtArgs>
    libraryAccess?: boolean | Library$libraryAccessArgs<ExtArgs>
    _count?: boolean | LibraryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["library"]>

  export type LibrarySelectScalar = {
    id?: boolean
    type?: boolean
    name?: boolean
    path?: boolean
    createdAt?: boolean
  }

  export type LibraryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medias?: boolean | Library$mediasArgs<ExtArgs>
    shows?: boolean | Library$showsArgs<ExtArgs>
    movies?: boolean | Library$moviesArgs<ExtArgs>
    libraryAccess?: boolean | Library$libraryAccessArgs<ExtArgs>
    _count?: boolean | LibraryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $LibraryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Library"
    objects: {
      medias: Prisma.$MediaPayload<ExtArgs>[]
      shows: Prisma.$ShowPayload<ExtArgs>[]
      movies: Prisma.$MoviePayload<ExtArgs>[]
      libraryAccess: Prisma.$LibraryAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.LibraryType
      name: string
      path: string
      createdAt: Date
    }, ExtArgs["result"]["library"]>
    composites: {}
  }


  type LibraryGetPayload<S extends boolean | null | undefined | LibraryDefaultArgs> = $Result.GetResult<Prisma.$LibraryPayload, S>

  type LibraryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LibraryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LibraryCountAggregateInputType | true
    }

  export interface LibraryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Library'], meta: { name: 'Library' } }
    /**
     * Find zero or one Library that matches the filter.
     * @param {LibraryFindUniqueArgs} args - Arguments to find a Library
     * @example
     * // Get one Library
     * const library = await prisma.library.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LibraryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LibraryFindUniqueArgs<ExtArgs>>
    ): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Library that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LibraryFindUniqueOrThrowArgs} args - Arguments to find a Library
     * @example
     * // Get one Library
     * const library = await prisma.library.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LibraryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LibraryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Library that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryFindFirstArgs} args - Arguments to find a Library
     * @example
     * // Get one Library
     * const library = await prisma.library.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LibraryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LibraryFindFirstArgs<ExtArgs>>
    ): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Library that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryFindFirstOrThrowArgs} args - Arguments to find a Library
     * @example
     * // Get one Library
     * const library = await prisma.library.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LibraryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LibraryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Libraries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Libraries
     * const libraries = await prisma.library.findMany()
     * 
     * // Get first 10 Libraries
     * const libraries = await prisma.library.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const libraryWithIdOnly = await prisma.library.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LibraryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LibraryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Library.
     * @param {LibraryCreateArgs} args - Arguments to create a Library.
     * @example
     * // Create one Library
     * const Library = await prisma.library.create({
     *   data: {
     *     // ... data to create a Library
     *   }
     * })
     * 
    **/
    create<T extends LibraryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LibraryCreateArgs<ExtArgs>>
    ): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Libraries.
     *     @param {LibraryCreateManyArgs} args - Arguments to create many Libraries.
     *     @example
     *     // Create many Libraries
     *     const library = await prisma.library.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LibraryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LibraryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Library.
     * @param {LibraryDeleteArgs} args - Arguments to delete one Library.
     * @example
     * // Delete one Library
     * const Library = await prisma.library.delete({
     *   where: {
     *     // ... filter to delete one Library
     *   }
     * })
     * 
    **/
    delete<T extends LibraryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LibraryDeleteArgs<ExtArgs>>
    ): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Library.
     * @param {LibraryUpdateArgs} args - Arguments to update one Library.
     * @example
     * // Update one Library
     * const library = await prisma.library.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LibraryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LibraryUpdateArgs<ExtArgs>>
    ): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Libraries.
     * @param {LibraryDeleteManyArgs} args - Arguments to filter Libraries to delete.
     * @example
     * // Delete a few Libraries
     * const { count } = await prisma.library.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LibraryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LibraryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Libraries
     * const library = await prisma.library.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LibraryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LibraryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Library.
     * @param {LibraryUpsertArgs} args - Arguments to update or create a Library.
     * @example
     * // Update or create a Library
     * const library = await prisma.library.upsert({
     *   create: {
     *     // ... data to create a Library
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Library we want to update
     *   }
     * })
    **/
    upsert<T extends LibraryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LibraryUpsertArgs<ExtArgs>>
    ): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Libraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryCountArgs} args - Arguments to filter Libraries to count.
     * @example
     * // Count the number of Libraries
     * const count = await prisma.library.count({
     *   where: {
     *     // ... the filter for the Libraries we want to count
     *   }
     * })
    **/
    count<T extends LibraryCountArgs>(
      args?: Subset<T, LibraryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibraryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Library.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LibraryAggregateArgs>(args: Subset<T, LibraryAggregateArgs>): Prisma.PrismaPromise<GetLibraryAggregateType<T>>

    /**
     * Group by Library.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LibraryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LibraryGroupByArgs['orderBy'] }
        : { orderBy?: LibraryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LibraryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibraryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Library model
   */
  readonly fields: LibraryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Library.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LibraryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    medias<T extends Library$mediasArgs<ExtArgs> = {}>(args?: Subset<T, Library$mediasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, 'findMany'> | Null>;

    shows<T extends Library$showsArgs<ExtArgs> = {}>(args?: Subset<T, Library$showsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, 'findMany'> | Null>;

    movies<T extends Library$moviesArgs<ExtArgs> = {}>(args?: Subset<T, Library$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findMany'> | Null>;

    libraryAccess<T extends Library$libraryAccessArgs<ExtArgs> = {}>(args?: Subset<T, Library$libraryAccessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryAccessPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Library model
   */ 
  interface LibraryFieldRefs {
    readonly id: FieldRef<"Library", 'String'>
    readonly type: FieldRef<"Library", 'LibraryType'>
    readonly name: FieldRef<"Library", 'String'>
    readonly path: FieldRef<"Library", 'String'>
    readonly createdAt: FieldRef<"Library", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Library findUnique
   */
  export type LibraryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Library to fetch.
     */
    where: LibraryWhereUniqueInput
  }


  /**
   * Library findUniqueOrThrow
   */
  export type LibraryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Library to fetch.
     */
    where: LibraryWhereUniqueInput
  }


  /**
   * Library findFirst
   */
  export type LibraryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Library to fetch.
     */
    where?: LibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libraries to fetch.
     */
    orderBy?: LibraryOrderByWithRelationInput | LibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Libraries.
     */
    cursor?: LibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Libraries.
     */
    distinct?: LibraryScalarFieldEnum | LibraryScalarFieldEnum[]
  }


  /**
   * Library findFirstOrThrow
   */
  export type LibraryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Library to fetch.
     */
    where?: LibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libraries to fetch.
     */
    orderBy?: LibraryOrderByWithRelationInput | LibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Libraries.
     */
    cursor?: LibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Libraries.
     */
    distinct?: LibraryScalarFieldEnum | LibraryScalarFieldEnum[]
  }


  /**
   * Library findMany
   */
  export type LibraryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Libraries to fetch.
     */
    where?: LibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libraries to fetch.
     */
    orderBy?: LibraryOrderByWithRelationInput | LibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Libraries.
     */
    cursor?: LibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libraries.
     */
    skip?: number
    distinct?: LibraryScalarFieldEnum | LibraryScalarFieldEnum[]
  }


  /**
   * Library create
   */
  export type LibraryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * The data needed to create a Library.
     */
    data: XOR<LibraryCreateInput, LibraryUncheckedCreateInput>
  }


  /**
   * Library createMany
   */
  export type LibraryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Libraries.
     */
    data: LibraryCreateManyInput | LibraryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Library update
   */
  export type LibraryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * The data needed to update a Library.
     */
    data: XOR<LibraryUpdateInput, LibraryUncheckedUpdateInput>
    /**
     * Choose, which Library to update.
     */
    where: LibraryWhereUniqueInput
  }


  /**
   * Library updateMany
   */
  export type LibraryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Libraries.
     */
    data: XOR<LibraryUpdateManyMutationInput, LibraryUncheckedUpdateManyInput>
    /**
     * Filter which Libraries to update
     */
    where?: LibraryWhereInput
  }


  /**
   * Library upsert
   */
  export type LibraryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * The filter to search for the Library to update in case it exists.
     */
    where: LibraryWhereUniqueInput
    /**
     * In case the Library found by the `where` argument doesn't exist, create a new Library with this data.
     */
    create: XOR<LibraryCreateInput, LibraryUncheckedCreateInput>
    /**
     * In case the Library was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LibraryUpdateInput, LibraryUncheckedUpdateInput>
  }


  /**
   * Library delete
   */
  export type LibraryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter which Library to delete.
     */
    where: LibraryWhereUniqueInput
  }


  /**
   * Library deleteMany
   */
  export type LibraryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Libraries to delete
     */
    where?: LibraryWhereInput
  }


  /**
   * Library.medias
   */
  export type Library$mediasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    cursor?: MediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }


  /**
   * Library.shows
   */
  export type Library$showsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShowInclude<ExtArgs> | null
    where?: ShowWhereInput
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    cursor?: ShowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }


  /**
   * Library.movies
   */
  export type Library$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    cursor?: MovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }


  /**
   * Library.libraryAccess
   */
  export type Library$libraryAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryAccess
     */
    select?: LibraryAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LibraryAccessInclude<ExtArgs> | null
    where?: LibraryAccessWhereInput
    orderBy?: LibraryAccessOrderByWithRelationInput | LibraryAccessOrderByWithRelationInput[]
    cursor?: LibraryAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LibraryAccessScalarFieldEnum | LibraryAccessScalarFieldEnum[]
  }


  /**
   * Library without action
   */
  export type LibraryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LibraryInclude<ExtArgs> | null
  }



  /**
   * Model Stream
   */

  export type AggregateStream = {
    _count: StreamCountAggregateOutputType | null
    _avg: StreamAvgAggregateOutputType | null
    _sum: StreamSumAggregateOutputType | null
    _min: StreamMinAggregateOutputType | null
    _max: StreamMaxAggregateOutputType | null
  }

  export type StreamAvgAggregateOutputType = {
    streamIndex: number | null
  }

  export type StreamSumAggregateOutputType = {
    streamIndex: number | null
  }

  export type StreamMinAggregateOutputType = {
    id: string | null
    name: string | null
    streamIndex: number | null
    type: $Enums.StreamType | null
    mediaId: string | null
  }

  export type StreamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    streamIndex: number | null
    type: $Enums.StreamType | null
    mediaId: string | null
  }

  export type StreamCountAggregateOutputType = {
    id: number
    name: number
    streamIndex: number
    type: number
    mediaId: number
    _all: number
  }


  export type StreamAvgAggregateInputType = {
    streamIndex?: true
  }

  export type StreamSumAggregateInputType = {
    streamIndex?: true
  }

  export type StreamMinAggregateInputType = {
    id?: true
    name?: true
    streamIndex?: true
    type?: true
    mediaId?: true
  }

  export type StreamMaxAggregateInputType = {
    id?: true
    name?: true
    streamIndex?: true
    type?: true
    mediaId?: true
  }

  export type StreamCountAggregateInputType = {
    id?: true
    name?: true
    streamIndex?: true
    type?: true
    mediaId?: true
    _all?: true
  }

  export type StreamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stream to aggregate.
     */
    where?: StreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
     */
    orderBy?: StreamOrderByWithRelationInput | StreamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Streams
    **/
    _count?: true | StreamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StreamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StreamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreamMaxAggregateInputType
  }

  export type GetStreamAggregateType<T extends StreamAggregateArgs> = {
        [P in keyof T & keyof AggregateStream]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStream[P]>
      : GetScalarType<T[P], AggregateStream[P]>
  }




  export type StreamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamWhereInput
    orderBy?: StreamOrderByWithAggregationInput | StreamOrderByWithAggregationInput[]
    by: StreamScalarFieldEnum[] | StreamScalarFieldEnum
    having?: StreamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreamCountAggregateInputType | true
    _avg?: StreamAvgAggregateInputType
    _sum?: StreamSumAggregateInputType
    _min?: StreamMinAggregateInputType
    _max?: StreamMaxAggregateInputType
  }

  export type StreamGroupByOutputType = {
    id: string
    name: string
    streamIndex: number
    type: $Enums.StreamType
    mediaId: string | null
    _count: StreamCountAggregateOutputType | null
    _avg: StreamAvgAggregateOutputType | null
    _sum: StreamSumAggregateOutputType | null
    _min: StreamMinAggregateOutputType | null
    _max: StreamMaxAggregateOutputType | null
  }

  type GetStreamGroupByPayload<T extends StreamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreamGroupByOutputType[P]>
            : GetScalarType<T[P], StreamGroupByOutputType[P]>
        }
      >
    >


  export type StreamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    streamIndex?: boolean
    type?: boolean
    mediaId?: boolean
    media?: boolean | Stream$mediaArgs<ExtArgs>
  }, ExtArgs["result"]["stream"]>

  export type StreamSelectScalar = {
    id?: boolean
    name?: boolean
    streamIndex?: boolean
    type?: boolean
    mediaId?: boolean
  }

  export type StreamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | Stream$mediaArgs<ExtArgs>
  }


  export type $StreamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stream"
    objects: {
      media: Prisma.$MediaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      streamIndex: number
      type: $Enums.StreamType
      mediaId: string | null
    }, ExtArgs["result"]["stream"]>
    composites: {}
  }


  type StreamGetPayload<S extends boolean | null | undefined | StreamDefaultArgs> = $Result.GetResult<Prisma.$StreamPayload, S>

  type StreamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StreamFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StreamCountAggregateInputType | true
    }

  export interface StreamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stream'], meta: { name: 'Stream' } }
    /**
     * Find zero or one Stream that matches the filter.
     * @param {StreamFindUniqueArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StreamFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StreamFindUniqueArgs<ExtArgs>>
    ): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Stream that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StreamFindUniqueOrThrowArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StreamFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StreamFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Stream that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamFindFirstArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StreamFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StreamFindFirstArgs<ExtArgs>>
    ): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Stream that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamFindFirstOrThrowArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StreamFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StreamFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Streams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Streams
     * const streams = await prisma.stream.findMany()
     * 
     * // Get first 10 Streams
     * const streams = await prisma.stream.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streamWithIdOnly = await prisma.stream.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StreamFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StreamFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Stream.
     * @param {StreamCreateArgs} args - Arguments to create a Stream.
     * @example
     * // Create one Stream
     * const Stream = await prisma.stream.create({
     *   data: {
     *     // ... data to create a Stream
     *   }
     * })
     * 
    **/
    create<T extends StreamCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StreamCreateArgs<ExtArgs>>
    ): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Streams.
     *     @param {StreamCreateManyArgs} args - Arguments to create many Streams.
     *     @example
     *     // Create many Streams
     *     const stream = await prisma.stream.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StreamCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StreamCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Stream.
     * @param {StreamDeleteArgs} args - Arguments to delete one Stream.
     * @example
     * // Delete one Stream
     * const Stream = await prisma.stream.delete({
     *   where: {
     *     // ... filter to delete one Stream
     *   }
     * })
     * 
    **/
    delete<T extends StreamDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StreamDeleteArgs<ExtArgs>>
    ): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Stream.
     * @param {StreamUpdateArgs} args - Arguments to update one Stream.
     * @example
     * // Update one Stream
     * const stream = await prisma.stream.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StreamUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StreamUpdateArgs<ExtArgs>>
    ): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Streams.
     * @param {StreamDeleteManyArgs} args - Arguments to filter Streams to delete.
     * @example
     * // Delete a few Streams
     * const { count } = await prisma.stream.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StreamDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StreamDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Streams
     * const stream = await prisma.stream.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StreamUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StreamUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stream.
     * @param {StreamUpsertArgs} args - Arguments to update or create a Stream.
     * @example
     * // Update or create a Stream
     * const stream = await prisma.stream.upsert({
     *   create: {
     *     // ... data to create a Stream
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stream we want to update
     *   }
     * })
    **/
    upsert<T extends StreamUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StreamUpsertArgs<ExtArgs>>
    ): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Streams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamCountArgs} args - Arguments to filter Streams to count.
     * @example
     * // Count the number of Streams
     * const count = await prisma.stream.count({
     *   where: {
     *     // ... the filter for the Streams we want to count
     *   }
     * })
    **/
    count<T extends StreamCountArgs>(
      args?: Subset<T, StreamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stream.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StreamAggregateArgs>(args: Subset<T, StreamAggregateArgs>): Prisma.PrismaPromise<GetStreamAggregateType<T>>

    /**
     * Group by Stream.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StreamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreamGroupByArgs['orderBy'] }
        : { orderBy?: StreamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StreamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stream model
   */
  readonly fields: StreamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stream.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    media<T extends Stream$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Stream$mediaArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Stream model
   */ 
  interface StreamFieldRefs {
    readonly id: FieldRef<"Stream", 'String'>
    readonly name: FieldRef<"Stream", 'String'>
    readonly streamIndex: FieldRef<"Stream", 'Int'>
    readonly type: FieldRef<"Stream", 'StreamType'>
    readonly mediaId: FieldRef<"Stream", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Stream findUnique
   */
  export type StreamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * Filter, which Stream to fetch.
     */
    where: StreamWhereUniqueInput
  }


  /**
   * Stream findUniqueOrThrow
   */
  export type StreamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * Filter, which Stream to fetch.
     */
    where: StreamWhereUniqueInput
  }


  /**
   * Stream findFirst
   */
  export type StreamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * Filter, which Stream to fetch.
     */
    where?: StreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
     */
    orderBy?: StreamOrderByWithRelationInput | StreamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streams.
     */
    cursor?: StreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streams.
     */
    distinct?: StreamScalarFieldEnum | StreamScalarFieldEnum[]
  }


  /**
   * Stream findFirstOrThrow
   */
  export type StreamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * Filter, which Stream to fetch.
     */
    where?: StreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
     */
    orderBy?: StreamOrderByWithRelationInput | StreamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streams.
     */
    cursor?: StreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streams.
     */
    distinct?: StreamScalarFieldEnum | StreamScalarFieldEnum[]
  }


  /**
   * Stream findMany
   */
  export type StreamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * Filter, which Streams to fetch.
     */
    where?: StreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
     */
    orderBy?: StreamOrderByWithRelationInput | StreamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Streams.
     */
    cursor?: StreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
     */
    skip?: number
    distinct?: StreamScalarFieldEnum | StreamScalarFieldEnum[]
  }


  /**
   * Stream create
   */
  export type StreamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * The data needed to create a Stream.
     */
    data: XOR<StreamCreateInput, StreamUncheckedCreateInput>
  }


  /**
   * Stream createMany
   */
  export type StreamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Streams.
     */
    data: StreamCreateManyInput | StreamCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Stream update
   */
  export type StreamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * The data needed to update a Stream.
     */
    data: XOR<StreamUpdateInput, StreamUncheckedUpdateInput>
    /**
     * Choose, which Stream to update.
     */
    where: StreamWhereUniqueInput
  }


  /**
   * Stream updateMany
   */
  export type StreamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Streams.
     */
    data: XOR<StreamUpdateManyMutationInput, StreamUncheckedUpdateManyInput>
    /**
     * Filter which Streams to update
     */
    where?: StreamWhereInput
  }


  /**
   * Stream upsert
   */
  export type StreamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * The filter to search for the Stream to update in case it exists.
     */
    where: StreamWhereUniqueInput
    /**
     * In case the Stream found by the `where` argument doesn't exist, create a new Stream with this data.
     */
    create: XOR<StreamCreateInput, StreamUncheckedCreateInput>
    /**
     * In case the Stream was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreamUpdateInput, StreamUncheckedUpdateInput>
  }


  /**
   * Stream delete
   */
  export type StreamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * Filter which Stream to delete.
     */
    where: StreamWhereUniqueInput
  }


  /**
   * Stream deleteMany
   */
  export type StreamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Streams to delete
     */
    where?: StreamWhereInput
  }


  /**
   * Stream.media
   */
  export type Stream$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
  }


  /**
   * Stream without action
   */
  export type StreamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StreamInclude<ExtArgs> | null
  }



  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaAvgAggregateOutputType = {
    width: number | null
    height: number | null
    bitrate: number | null
    duration: number | null
  }

  export type MediaSumAggregateOutputType = {
    width: number | null
    height: number | null
    bitrate: number | null
    duration: number | null
  }

  export type MediaMinAggregateOutputType = {
    id: string | null
    path: string | null
    libraryId: string | null
    createdAt: Date | null
    width: number | null
    height: number | null
    bitrate: number | null
    duration: number | null
  }

  export type MediaMaxAggregateOutputType = {
    id: string | null
    path: string | null
    libraryId: string | null
    createdAt: Date | null
    width: number | null
    height: number | null
    bitrate: number | null
    duration: number | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    path: number
    libraryId: number
    createdAt: number
    width: number
    height: number
    bitrate: number
    duration: number
    _all: number
  }


  export type MediaAvgAggregateInputType = {
    width?: true
    height?: true
    bitrate?: true
    duration?: true
  }

  export type MediaSumAggregateInputType = {
    width?: true
    height?: true
    bitrate?: true
    duration?: true
  }

  export type MediaMinAggregateInputType = {
    id?: true
    path?: true
    libraryId?: true
    createdAt?: true
    width?: true
    height?: true
    bitrate?: true
    duration?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    path?: true
    libraryId?: true
    createdAt?: true
    width?: true
    height?: true
    bitrate?: true
    duration?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    path?: true
    libraryId?: true
    createdAt?: true
    width?: true
    height?: true
    bitrate?: true
    duration?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _avg?: MediaAvgAggregateInputType
    _sum?: MediaSumAggregateInputType
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: string
    path: string
    libraryId: string
    createdAt: Date
    width: number
    height: number
    bitrate: number
    duration: number
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    libraryId?: boolean
    createdAt?: boolean
    width?: boolean
    height?: boolean
    bitrate?: boolean
    duration?: boolean
    library?: boolean | LibraryDefaultArgs<ExtArgs>
    streams?: boolean | Media$streamsArgs<ExtArgs>
    episode?: boolean | Media$episodeArgs<ExtArgs>
    movie?: boolean | Media$movieArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectScalar = {
    id?: boolean
    path?: boolean
    libraryId?: boolean
    createdAt?: boolean
    width?: boolean
    height?: boolean
    bitrate?: boolean
    duration?: boolean
  }

  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    library?: boolean | LibraryDefaultArgs<ExtArgs>
    streams?: boolean | Media$streamsArgs<ExtArgs>
    episode?: boolean | Media$episodeArgs<ExtArgs>
    movie?: boolean | Media$movieArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      library: Prisma.$LibraryPayload<ExtArgs>
      streams: Prisma.$StreamPayload<ExtArgs>[]
      episode: Prisma.$EpisodePayload<ExtArgs> | null
      movie: Prisma.$MoviePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      path: string
      libraryId: string
      createdAt: Date
      width: number
      height: number
      bitrate: number
      duration: number
    }, ExtArgs["result"]["media"]>
    composites: {}
  }


  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MediaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>
    ): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Media that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MediaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>
    ): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MediaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
    **/
    create<T extends MediaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MediaCreateArgs<ExtArgs>>
    ): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Media.
     *     @param {MediaCreateManyArgs} args - Arguments to create many Media.
     *     @example
     *     // Create many Media
     *     const media = await prisma.media.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MediaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
    **/
    delete<T extends MediaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>
    ): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MediaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>
    ): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MediaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MediaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
    **/
    upsert<T extends MediaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>
    ): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    library<T extends LibraryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LibraryDefaultArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    streams<T extends Media$streamsArgs<ExtArgs> = {}>(args?: Subset<T, Media$streamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, 'findMany'> | Null>;

    episode<T extends Media$episodeArgs<ExtArgs> = {}>(args?: Subset<T, Media$episodeArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    movie<T extends Media$movieArgs<ExtArgs> = {}>(args?: Subset<T, Media$movieArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Media model
   */ 
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'String'>
    readonly path: FieldRef<"Media", 'String'>
    readonly libraryId: FieldRef<"Media", 'String'>
    readonly createdAt: FieldRef<"Media", 'DateTime'>
    readonly width: FieldRef<"Media", 'Int'>
    readonly height: FieldRef<"Media", 'Int'>
    readonly bitrate: FieldRef<"Media", 'Int'>
    readonly duration: FieldRef<"Media", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }


  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }


  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }


  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }


  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }


  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }


  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }


  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
  }


  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }


  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }


  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
  }


  /**
   * Media.streams
   */
  export type Media$streamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StreamInclude<ExtArgs> | null
    where?: StreamWhereInput
    orderBy?: StreamOrderByWithRelationInput | StreamOrderByWithRelationInput[]
    cursor?: StreamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreamScalarFieldEnum | StreamScalarFieldEnum[]
  }


  /**
   * Media.episode
   */
  export type Media$episodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude<ExtArgs> | null
    where?: EpisodeWhereInput
  }


  /**
   * Media.movie
   */
  export type Media$movieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    where?: MovieWhereInput
  }


  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MediaInclude<ExtArgs> | null
  }



  /**
   * Model Episode
   */

  export type AggregateEpisode = {
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  export type EpisodeAvgAggregateOutputType = {
    episode_number: number | null
  }

  export type EpisodeSumAggregateOutputType = {
    episode_number: number | null
  }

  export type EpisodeMinAggregateOutputType = {
    id: string | null
    mediaId: string | null
    seasonId: string | null
    overview: string | null
    name: string | null
    episode_number: number | null
  }

  export type EpisodeMaxAggregateOutputType = {
    id: string | null
    mediaId: string | null
    seasonId: string | null
    overview: string | null
    name: string | null
    episode_number: number | null
  }

  export type EpisodeCountAggregateOutputType = {
    id: number
    mediaId: number
    seasonId: number
    overview: number
    name: number
    episode_number: number
    images: number
    _all: number
  }


  export type EpisodeAvgAggregateInputType = {
    episode_number?: true
  }

  export type EpisodeSumAggregateInputType = {
    episode_number?: true
  }

  export type EpisodeMinAggregateInputType = {
    id?: true
    mediaId?: true
    seasonId?: true
    overview?: true
    name?: true
    episode_number?: true
  }

  export type EpisodeMaxAggregateInputType = {
    id?: true
    mediaId?: true
    seasonId?: true
    overview?: true
    name?: true
    episode_number?: true
  }

  export type EpisodeCountAggregateInputType = {
    id?: true
    mediaId?: true
    seasonId?: true
    overview?: true
    name?: true
    episode_number?: true
    images?: true
    _all?: true
  }

  export type EpisodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episode to aggregate.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Episodes
    **/
    _count?: true | EpisodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpisodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpisodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpisodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpisodeMaxAggregateInputType
  }

  export type GetEpisodeAggregateType<T extends EpisodeAggregateArgs> = {
        [P in keyof T & keyof AggregateEpisode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpisode[P]>
      : GetScalarType<T[P], AggregateEpisode[P]>
  }




  export type EpisodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithAggregationInput | EpisodeOrderByWithAggregationInput[]
    by: EpisodeScalarFieldEnum[] | EpisodeScalarFieldEnum
    having?: EpisodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpisodeCountAggregateInputType | true
    _avg?: EpisodeAvgAggregateInputType
    _sum?: EpisodeSumAggregateInputType
    _min?: EpisodeMinAggregateInputType
    _max?: EpisodeMaxAggregateInputType
  }

  export type EpisodeGroupByOutputType = {
    id: string
    mediaId: string
    seasonId: string | null
    overview: string | null
    name: string
    episode_number: number
    images: string[]
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  type GetEpisodeGroupByPayload<T extends EpisodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpisodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpisodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
            : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
        }
      >
    >


  export type EpisodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mediaId?: boolean
    seasonId?: boolean
    overview?: boolean
    name?: boolean
    episode_number?: boolean
    images?: boolean
    media?: boolean | MediaDefaultArgs<ExtArgs>
    season?: boolean | Episode$seasonArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectScalar = {
    id?: boolean
    mediaId?: boolean
    seasonId?: boolean
    overview?: boolean
    name?: boolean
    episode_number?: boolean
    images?: boolean
  }

  export type EpisodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | MediaDefaultArgs<ExtArgs>
    season?: boolean | Episode$seasonArgs<ExtArgs>
  }


  export type $EpisodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Episode"
    objects: {
      media: Prisma.$MediaPayload<ExtArgs>
      season: Prisma.$SeasonPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mediaId: string
      seasonId: string | null
      overview: string | null
      name: string
      episode_number: number
      images: string[]
    }, ExtArgs["result"]["episode"]>
    composites: {}
  }


  type EpisodeGetPayload<S extends boolean | null | undefined | EpisodeDefaultArgs> = $Result.GetResult<Prisma.$EpisodePayload, S>

  type EpisodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EpisodeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EpisodeCountAggregateInputType | true
    }

  export interface EpisodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Episode'], meta: { name: 'Episode' } }
    /**
     * Find zero or one Episode that matches the filter.
     * @param {EpisodeFindUniqueArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EpisodeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EpisodeFindUniqueArgs<ExtArgs>>
    ): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Episode that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EpisodeFindUniqueOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EpisodeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EpisodeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Episode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EpisodeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EpisodeFindFirstArgs<ExtArgs>>
    ): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Episode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EpisodeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EpisodeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Episodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Episodes
     * const episodes = await prisma.episode.findMany()
     * 
     * // Get first 10 Episodes
     * const episodes = await prisma.episode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const episodeWithIdOnly = await prisma.episode.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EpisodeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EpisodeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Episode.
     * @param {EpisodeCreateArgs} args - Arguments to create a Episode.
     * @example
     * // Create one Episode
     * const Episode = await prisma.episode.create({
     *   data: {
     *     // ... data to create a Episode
     *   }
     * })
     * 
    **/
    create<T extends EpisodeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EpisodeCreateArgs<ExtArgs>>
    ): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Episodes.
     *     @param {EpisodeCreateManyArgs} args - Arguments to create many Episodes.
     *     @example
     *     // Create many Episodes
     *     const episode = await prisma.episode.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EpisodeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EpisodeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Episode.
     * @param {EpisodeDeleteArgs} args - Arguments to delete one Episode.
     * @example
     * // Delete one Episode
     * const Episode = await prisma.episode.delete({
     *   where: {
     *     // ... filter to delete one Episode
     *   }
     * })
     * 
    **/
    delete<T extends EpisodeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EpisodeDeleteArgs<ExtArgs>>
    ): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Episode.
     * @param {EpisodeUpdateArgs} args - Arguments to update one Episode.
     * @example
     * // Update one Episode
     * const episode = await prisma.episode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EpisodeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EpisodeUpdateArgs<ExtArgs>>
    ): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Episodes.
     * @param {EpisodeDeleteManyArgs} args - Arguments to filter Episodes to delete.
     * @example
     * // Delete a few Episodes
     * const { count } = await prisma.episode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EpisodeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EpisodeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EpisodeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EpisodeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Episode.
     * @param {EpisodeUpsertArgs} args - Arguments to update or create a Episode.
     * @example
     * // Update or create a Episode
     * const episode = await prisma.episode.upsert({
     *   create: {
     *     // ... data to create a Episode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Episode we want to update
     *   }
     * })
    **/
    upsert<T extends EpisodeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EpisodeUpsertArgs<ExtArgs>>
    ): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeCountArgs} args - Arguments to filter Episodes to count.
     * @example
     * // Count the number of Episodes
     * const count = await prisma.episode.count({
     *   where: {
     *     // ... the filter for the Episodes we want to count
     *   }
     * })
    **/
    count<T extends EpisodeCountArgs>(
      args?: Subset<T, EpisodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpisodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EpisodeAggregateArgs>(args: Subset<T, EpisodeAggregateArgs>): Prisma.PrismaPromise<GetEpisodeAggregateType<T>>

    /**
     * Group by Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EpisodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpisodeGroupByArgs['orderBy'] }
        : { orderBy?: EpisodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EpisodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpisodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Episode model
   */
  readonly fields: EpisodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Episode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EpisodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    media<T extends MediaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MediaDefaultArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    season<T extends Episode$seasonArgs<ExtArgs> = {}>(args?: Subset<T, Episode$seasonArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Episode model
   */ 
  interface EpisodeFieldRefs {
    readonly id: FieldRef<"Episode", 'String'>
    readonly mediaId: FieldRef<"Episode", 'String'>
    readonly seasonId: FieldRef<"Episode", 'String'>
    readonly overview: FieldRef<"Episode", 'String'>
    readonly name: FieldRef<"Episode", 'String'>
    readonly episode_number: FieldRef<"Episode", 'Int'>
    readonly images: FieldRef<"Episode", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * Episode findUnique
   */
  export type EpisodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }


  /**
   * Episode findUniqueOrThrow
   */
  export type EpisodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }


  /**
   * Episode findFirst
   */
  export type EpisodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }


  /**
   * Episode findFirstOrThrow
   */
  export type EpisodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }


  /**
   * Episode findMany
   */
  export type EpisodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episodes to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }


  /**
   * Episode create
   */
  export type EpisodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to create a Episode.
     */
    data: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
  }


  /**
   * Episode createMany
   */
  export type EpisodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Episodes.
     */
    data: EpisodeCreateManyInput | EpisodeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Episode update
   */
  export type EpisodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to update a Episode.
     */
    data: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
    /**
     * Choose, which Episode to update.
     */
    where: EpisodeWhereUniqueInput
  }


  /**
   * Episode updateMany
   */
  export type EpisodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodeWhereInput
  }


  /**
   * Episode upsert
   */
  export type EpisodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The filter to search for the Episode to update in case it exists.
     */
    where: EpisodeWhereUniqueInput
    /**
     * In case the Episode found by the `where` argument doesn't exist, create a new Episode with this data.
     */
    create: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
    /**
     * In case the Episode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
  }


  /**
   * Episode delete
   */
  export type EpisodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter which Episode to delete.
     */
    where: EpisodeWhereUniqueInput
  }


  /**
   * Episode deleteMany
   */
  export type EpisodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episodes to delete
     */
    where?: EpisodeWhereInput
  }


  /**
   * Episode.season
   */
  export type Episode$seasonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeasonInclude<ExtArgs> | null
    where?: SeasonWhereInput
  }


  /**
   * Episode without action
   */
  export type EpisodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude<ExtArgs> | null
  }



  /**
   * Model Season
   */

  export type AggregateSeason = {
    _count: SeasonCountAggregateOutputType | null
    _avg: SeasonAvgAggregateOutputType | null
    _sum: SeasonSumAggregateOutputType | null
    _min: SeasonMinAggregateOutputType | null
    _max: SeasonMaxAggregateOutputType | null
  }

  export type SeasonAvgAggregateOutputType = {
    season_number: number | null
  }

  export type SeasonSumAggregateOutputType = {
    season_number: number | null
  }

  export type SeasonMinAggregateOutputType = {
    id: string | null
    name: string | null
    season_number: number | null
    overview: string | null
    showId: string | null
  }

  export type SeasonMaxAggregateOutputType = {
    id: string | null
    name: string | null
    season_number: number | null
    overview: string | null
    showId: string | null
  }

  export type SeasonCountAggregateOutputType = {
    id: number
    name: number
    season_number: number
    overview: number
    showId: number
    images: number
    _all: number
  }


  export type SeasonAvgAggregateInputType = {
    season_number?: true
  }

  export type SeasonSumAggregateInputType = {
    season_number?: true
  }

  export type SeasonMinAggregateInputType = {
    id?: true
    name?: true
    season_number?: true
    overview?: true
    showId?: true
  }

  export type SeasonMaxAggregateInputType = {
    id?: true
    name?: true
    season_number?: true
    overview?: true
    showId?: true
  }

  export type SeasonCountAggregateInputType = {
    id?: true
    name?: true
    season_number?: true
    overview?: true
    showId?: true
    images?: true
    _all?: true
  }

  export type SeasonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Season to aggregate.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seasons
    **/
    _count?: true | SeasonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeasonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeasonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeasonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeasonMaxAggregateInputType
  }

  export type GetSeasonAggregateType<T extends SeasonAggregateArgs> = {
        [P in keyof T & keyof AggregateSeason]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeason[P]>
      : GetScalarType<T[P], AggregateSeason[P]>
  }




  export type SeasonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeasonWhereInput
    orderBy?: SeasonOrderByWithAggregationInput | SeasonOrderByWithAggregationInput[]
    by: SeasonScalarFieldEnum[] | SeasonScalarFieldEnum
    having?: SeasonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeasonCountAggregateInputType | true
    _avg?: SeasonAvgAggregateInputType
    _sum?: SeasonSumAggregateInputType
    _min?: SeasonMinAggregateInputType
    _max?: SeasonMaxAggregateInputType
  }

  export type SeasonGroupByOutputType = {
    id: string
    name: string
    season_number: number
    overview: string | null
    showId: string
    images: string[]
    _count: SeasonCountAggregateOutputType | null
    _avg: SeasonAvgAggregateOutputType | null
    _sum: SeasonSumAggregateOutputType | null
    _min: SeasonMinAggregateOutputType | null
    _max: SeasonMaxAggregateOutputType | null
  }

  type GetSeasonGroupByPayload<T extends SeasonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeasonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeasonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeasonGroupByOutputType[P]>
            : GetScalarType<T[P], SeasonGroupByOutputType[P]>
        }
      >
    >


  export type SeasonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    season_number?: boolean
    overview?: boolean
    showId?: boolean
    images?: boolean
    episodes?: boolean | Season$episodesArgs<ExtArgs>
    show?: boolean | ShowDefaultArgs<ExtArgs>
    _count?: boolean | SeasonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["season"]>

  export type SeasonSelectScalar = {
    id?: boolean
    name?: boolean
    season_number?: boolean
    overview?: boolean
    showId?: boolean
    images?: boolean
  }

  export type SeasonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | Season$episodesArgs<ExtArgs>
    show?: boolean | ShowDefaultArgs<ExtArgs>
    _count?: boolean | SeasonCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SeasonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Season"
    objects: {
      episodes: Prisma.$EpisodePayload<ExtArgs>[]
      show: Prisma.$ShowPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      season_number: number
      overview: string | null
      showId: string
      images: string[]
    }, ExtArgs["result"]["season"]>
    composites: {}
  }


  type SeasonGetPayload<S extends boolean | null | undefined | SeasonDefaultArgs> = $Result.GetResult<Prisma.$SeasonPayload, S>

  type SeasonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SeasonFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SeasonCountAggregateInputType | true
    }

  export interface SeasonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Season'], meta: { name: 'Season' } }
    /**
     * Find zero or one Season that matches the filter.
     * @param {SeasonFindUniqueArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SeasonFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SeasonFindUniqueArgs<ExtArgs>>
    ): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Season that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SeasonFindUniqueOrThrowArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SeasonFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SeasonFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Season that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindFirstArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SeasonFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SeasonFindFirstArgs<ExtArgs>>
    ): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Season that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindFirstOrThrowArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SeasonFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SeasonFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Seasons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seasons
     * const seasons = await prisma.season.findMany()
     * 
     * // Get first 10 Seasons
     * const seasons = await prisma.season.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seasonWithIdOnly = await prisma.season.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SeasonFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SeasonFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Season.
     * @param {SeasonCreateArgs} args - Arguments to create a Season.
     * @example
     * // Create one Season
     * const Season = await prisma.season.create({
     *   data: {
     *     // ... data to create a Season
     *   }
     * })
     * 
    **/
    create<T extends SeasonCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SeasonCreateArgs<ExtArgs>>
    ): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Seasons.
     *     @param {SeasonCreateManyArgs} args - Arguments to create many Seasons.
     *     @example
     *     // Create many Seasons
     *     const season = await prisma.season.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SeasonCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SeasonCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Season.
     * @param {SeasonDeleteArgs} args - Arguments to delete one Season.
     * @example
     * // Delete one Season
     * const Season = await prisma.season.delete({
     *   where: {
     *     // ... filter to delete one Season
     *   }
     * })
     * 
    **/
    delete<T extends SeasonDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SeasonDeleteArgs<ExtArgs>>
    ): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Season.
     * @param {SeasonUpdateArgs} args - Arguments to update one Season.
     * @example
     * // Update one Season
     * const season = await prisma.season.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SeasonUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SeasonUpdateArgs<ExtArgs>>
    ): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Seasons.
     * @param {SeasonDeleteManyArgs} args - Arguments to filter Seasons to delete.
     * @example
     * // Delete a few Seasons
     * const { count } = await prisma.season.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SeasonDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SeasonDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seasons
     * const season = await prisma.season.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SeasonUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SeasonUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Season.
     * @param {SeasonUpsertArgs} args - Arguments to update or create a Season.
     * @example
     * // Update or create a Season
     * const season = await prisma.season.upsert({
     *   create: {
     *     // ... data to create a Season
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Season we want to update
     *   }
     * })
    **/
    upsert<T extends SeasonUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SeasonUpsertArgs<ExtArgs>>
    ): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonCountArgs} args - Arguments to filter Seasons to count.
     * @example
     * // Count the number of Seasons
     * const count = await prisma.season.count({
     *   where: {
     *     // ... the filter for the Seasons we want to count
     *   }
     * })
    **/
    count<T extends SeasonCountArgs>(
      args?: Subset<T, SeasonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeasonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Season.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeasonAggregateArgs>(args: Subset<T, SeasonAggregateArgs>): Prisma.PrismaPromise<GetSeasonAggregateType<T>>

    /**
     * Group by Season.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeasonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeasonGroupByArgs['orderBy'] }
        : { orderBy?: SeasonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeasonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeasonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Season model
   */
  readonly fields: SeasonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Season.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeasonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    episodes<T extends Season$episodesArgs<ExtArgs> = {}>(args?: Subset<T, Season$episodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'findMany'> | Null>;

    show<T extends ShowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShowDefaultArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Season model
   */ 
  interface SeasonFieldRefs {
    readonly id: FieldRef<"Season", 'String'>
    readonly name: FieldRef<"Season", 'String'>
    readonly season_number: FieldRef<"Season", 'Int'>
    readonly overview: FieldRef<"Season", 'String'>
    readonly showId: FieldRef<"Season", 'String'>
    readonly images: FieldRef<"Season", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * Season findUnique
   */
  export type SeasonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where: SeasonWhereUniqueInput
  }


  /**
   * Season findUniqueOrThrow
   */
  export type SeasonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where: SeasonWhereUniqueInput
  }


  /**
   * Season findFirst
   */
  export type SeasonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seasons.
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seasons.
     */
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }


  /**
   * Season findFirstOrThrow
   */
  export type SeasonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seasons.
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seasons.
     */
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }


  /**
   * Season findMany
   */
  export type SeasonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Seasons to fetch.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seasons.
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }


  /**
   * Season create
   */
  export type SeasonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * The data needed to create a Season.
     */
    data: XOR<SeasonCreateInput, SeasonUncheckedCreateInput>
  }


  /**
   * Season createMany
   */
  export type SeasonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seasons.
     */
    data: SeasonCreateManyInput | SeasonCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Season update
   */
  export type SeasonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * The data needed to update a Season.
     */
    data: XOR<SeasonUpdateInput, SeasonUncheckedUpdateInput>
    /**
     * Choose, which Season to update.
     */
    where: SeasonWhereUniqueInput
  }


  /**
   * Season updateMany
   */
  export type SeasonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seasons.
     */
    data: XOR<SeasonUpdateManyMutationInput, SeasonUncheckedUpdateManyInput>
    /**
     * Filter which Seasons to update
     */
    where?: SeasonWhereInput
  }


  /**
   * Season upsert
   */
  export type SeasonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * The filter to search for the Season to update in case it exists.
     */
    where: SeasonWhereUniqueInput
    /**
     * In case the Season found by the `where` argument doesn't exist, create a new Season with this data.
     */
    create: XOR<SeasonCreateInput, SeasonUncheckedCreateInput>
    /**
     * In case the Season was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeasonUpdateInput, SeasonUncheckedUpdateInput>
  }


  /**
   * Season delete
   */
  export type SeasonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter which Season to delete.
     */
    where: SeasonWhereUniqueInput
  }


  /**
   * Season deleteMany
   */
  export type SeasonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seasons to delete
     */
    where?: SeasonWhereInput
  }


  /**
   * Season.episodes
   */
  export type Season$episodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodeInclude<ExtArgs> | null
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    cursor?: EpisodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }


  /**
   * Season without action
   */
  export type SeasonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeasonInclude<ExtArgs> | null
  }



  /**
   * Model Show
   */

  export type AggregateShow = {
    _count: ShowCountAggregateOutputType | null
    _avg: ShowAvgAggregateOutputType | null
    _sum: ShowSumAggregateOutputType | null
    _min: ShowMinAggregateOutputType | null
    _max: ShowMaxAggregateOutputType | null
  }

  export type ShowAvgAggregateOutputType = {
    tvmazeId: number | null
  }

  export type ShowSumAggregateOutputType = {
    tvmazeId: number | null
  }

  export type ShowMinAggregateOutputType = {
    id: string | null
    tvmazeId: number | null
    name: string | null
    path: string | null
    overview: string | null
    libraryId: string | null
  }

  export type ShowMaxAggregateOutputType = {
    id: string | null
    tvmazeId: number | null
    name: string | null
    path: string | null
    overview: string | null
    libraryId: string | null
  }

  export type ShowCountAggregateOutputType = {
    id: number
    tvmazeId: number
    name: number
    path: number
    overview: number
    images: number
    libraryId: number
    _all: number
  }


  export type ShowAvgAggregateInputType = {
    tvmazeId?: true
  }

  export type ShowSumAggregateInputType = {
    tvmazeId?: true
  }

  export type ShowMinAggregateInputType = {
    id?: true
    tvmazeId?: true
    name?: true
    path?: true
    overview?: true
    libraryId?: true
  }

  export type ShowMaxAggregateInputType = {
    id?: true
    tvmazeId?: true
    name?: true
    path?: true
    overview?: true
    libraryId?: true
  }

  export type ShowCountAggregateInputType = {
    id?: true
    tvmazeId?: true
    name?: true
    path?: true
    overview?: true
    images?: true
    libraryId?: true
    _all?: true
  }

  export type ShowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Show to aggregate.
     */
    where?: ShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shows
    **/
    _count?: true | ShowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowMaxAggregateInputType
  }

  export type GetShowAggregateType<T extends ShowAggregateArgs> = {
        [P in keyof T & keyof AggregateShow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShow[P]>
      : GetScalarType<T[P], AggregateShow[P]>
  }




  export type ShowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowWhereInput
    orderBy?: ShowOrderByWithAggregationInput | ShowOrderByWithAggregationInput[]
    by: ShowScalarFieldEnum[] | ShowScalarFieldEnum
    having?: ShowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowCountAggregateInputType | true
    _avg?: ShowAvgAggregateInputType
    _sum?: ShowSumAggregateInputType
    _min?: ShowMinAggregateInputType
    _max?: ShowMaxAggregateInputType
  }

  export type ShowGroupByOutputType = {
    id: string
    tvmazeId: number
    name: string
    path: string
    overview: string | null
    images: string[]
    libraryId: string
    _count: ShowCountAggregateOutputType | null
    _avg: ShowAvgAggregateOutputType | null
    _sum: ShowSumAggregateOutputType | null
    _min: ShowMinAggregateOutputType | null
    _max: ShowMaxAggregateOutputType | null
  }

  type GetShowGroupByPayload<T extends ShowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowGroupByOutputType[P]>
            : GetScalarType<T[P], ShowGroupByOutputType[P]>
        }
      >
    >


  export type ShowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tvmazeId?: boolean
    name?: boolean
    path?: boolean
    overview?: boolean
    images?: boolean
    libraryId?: boolean
    seasons?: boolean | Show$seasonsArgs<ExtArgs>
    library?: boolean | LibraryDefaultArgs<ExtArgs>
    _count?: boolean | ShowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["show"]>

  export type ShowSelectScalar = {
    id?: boolean
    tvmazeId?: boolean
    name?: boolean
    path?: boolean
    overview?: boolean
    images?: boolean
    libraryId?: boolean
  }

  export type ShowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seasons?: boolean | Show$seasonsArgs<ExtArgs>
    library?: boolean | LibraryDefaultArgs<ExtArgs>
    _count?: boolean | ShowCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ShowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Show"
    objects: {
      seasons: Prisma.$SeasonPayload<ExtArgs>[]
      library: Prisma.$LibraryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tvmazeId: number
      name: string
      path: string
      overview: string | null
      images: string[]
      libraryId: string
    }, ExtArgs["result"]["show"]>
    composites: {}
  }


  type ShowGetPayload<S extends boolean | null | undefined | ShowDefaultArgs> = $Result.GetResult<Prisma.$ShowPayload, S>

  type ShowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShowFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ShowCountAggregateInputType | true
    }

  export interface ShowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Show'], meta: { name: 'Show' } }
    /**
     * Find zero or one Show that matches the filter.
     * @param {ShowFindUniqueArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShowFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ShowFindUniqueArgs<ExtArgs>>
    ): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Show that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ShowFindUniqueOrThrowArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShowFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShowFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Show that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowFindFirstArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShowFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ShowFindFirstArgs<ExtArgs>>
    ): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Show that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowFindFirstOrThrowArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShowFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShowFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Shows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shows
     * const shows = await prisma.show.findMany()
     * 
     * // Get first 10 Shows
     * const shows = await prisma.show.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const showWithIdOnly = await prisma.show.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ShowFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShowFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Show.
     * @param {ShowCreateArgs} args - Arguments to create a Show.
     * @example
     * // Create one Show
     * const Show = await prisma.show.create({
     *   data: {
     *     // ... data to create a Show
     *   }
     * })
     * 
    **/
    create<T extends ShowCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ShowCreateArgs<ExtArgs>>
    ): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Shows.
     *     @param {ShowCreateManyArgs} args - Arguments to create many Shows.
     *     @example
     *     // Create many Shows
     *     const show = await prisma.show.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShowCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShowCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Show.
     * @param {ShowDeleteArgs} args - Arguments to delete one Show.
     * @example
     * // Delete one Show
     * const Show = await prisma.show.delete({
     *   where: {
     *     // ... filter to delete one Show
     *   }
     * })
     * 
    **/
    delete<T extends ShowDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ShowDeleteArgs<ExtArgs>>
    ): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Show.
     * @param {ShowUpdateArgs} args - Arguments to update one Show.
     * @example
     * // Update one Show
     * const show = await prisma.show.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShowUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ShowUpdateArgs<ExtArgs>>
    ): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Shows.
     * @param {ShowDeleteManyArgs} args - Arguments to filter Shows to delete.
     * @example
     * // Delete a few Shows
     * const { count } = await prisma.show.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShowDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShowDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shows
     * const show = await prisma.show.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShowUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ShowUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Show.
     * @param {ShowUpsertArgs} args - Arguments to update or create a Show.
     * @example
     * // Update or create a Show
     * const show = await prisma.show.upsert({
     *   create: {
     *     // ... data to create a Show
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Show we want to update
     *   }
     * })
    **/
    upsert<T extends ShowUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ShowUpsertArgs<ExtArgs>>
    ): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Shows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCountArgs} args - Arguments to filter Shows to count.
     * @example
     * // Count the number of Shows
     * const count = await prisma.show.count({
     *   where: {
     *     // ... the filter for the Shows we want to count
     *   }
     * })
    **/
    count<T extends ShowCountArgs>(
      args?: Subset<T, ShowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Show.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShowAggregateArgs>(args: Subset<T, ShowAggregateArgs>): Prisma.PrismaPromise<GetShowAggregateType<T>>

    /**
     * Group by Show.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowGroupByArgs['orderBy'] }
        : { orderBy?: ShowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Show model
   */
  readonly fields: ShowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Show.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    seasons<T extends Show$seasonsArgs<ExtArgs> = {}>(args?: Subset<T, Show$seasonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, 'findMany'> | Null>;

    library<T extends LibraryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LibraryDefaultArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Show model
   */ 
  interface ShowFieldRefs {
    readonly id: FieldRef<"Show", 'String'>
    readonly tvmazeId: FieldRef<"Show", 'Int'>
    readonly name: FieldRef<"Show", 'String'>
    readonly path: FieldRef<"Show", 'String'>
    readonly overview: FieldRef<"Show", 'String'>
    readonly images: FieldRef<"Show", 'String[]'>
    readonly libraryId: FieldRef<"Show", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Show findUnique
   */
  export type ShowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Show to fetch.
     */
    where: ShowWhereUniqueInput
  }


  /**
   * Show findUniqueOrThrow
   */
  export type ShowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Show to fetch.
     */
    where: ShowWhereUniqueInput
  }


  /**
   * Show findFirst
   */
  export type ShowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Show to fetch.
     */
    where?: ShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shows.
     */
    cursor?: ShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shows.
     */
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }


  /**
   * Show findFirstOrThrow
   */
  export type ShowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Show to fetch.
     */
    where?: ShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shows.
     */
    cursor?: ShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shows.
     */
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }


  /**
   * Show findMany
   */
  export type ShowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Shows to fetch.
     */
    where?: ShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shows.
     */
    cursor?: ShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }


  /**
   * Show create
   */
  export type ShowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * The data needed to create a Show.
     */
    data: XOR<ShowCreateInput, ShowUncheckedCreateInput>
  }


  /**
   * Show createMany
   */
  export type ShowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shows.
     */
    data: ShowCreateManyInput | ShowCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Show update
   */
  export type ShowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * The data needed to update a Show.
     */
    data: XOR<ShowUpdateInput, ShowUncheckedUpdateInput>
    /**
     * Choose, which Show to update.
     */
    where: ShowWhereUniqueInput
  }


  /**
   * Show updateMany
   */
  export type ShowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shows.
     */
    data: XOR<ShowUpdateManyMutationInput, ShowUncheckedUpdateManyInput>
    /**
     * Filter which Shows to update
     */
    where?: ShowWhereInput
  }


  /**
   * Show upsert
   */
  export type ShowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * The filter to search for the Show to update in case it exists.
     */
    where: ShowWhereUniqueInput
    /**
     * In case the Show found by the `where` argument doesn't exist, create a new Show with this data.
     */
    create: XOR<ShowCreateInput, ShowUncheckedCreateInput>
    /**
     * In case the Show was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShowUpdateInput, ShowUncheckedUpdateInput>
  }


  /**
   * Show delete
   */
  export type ShowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter which Show to delete.
     */
    where: ShowWhereUniqueInput
  }


  /**
   * Show deleteMany
   */
  export type ShowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shows to delete
     */
    where?: ShowWhereInput
  }


  /**
   * Show.seasons
   */
  export type Show$seasonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeasonInclude<ExtArgs> | null
    where?: SeasonWhereInput
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    cursor?: SeasonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }


  /**
   * Show without action
   */
  export type ShowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShowInclude<ExtArgs> | null
  }



  /**
   * Model Movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieAvgAggregateOutputType = {
    tmdbId: number | null
  }

  export type MovieSumAggregateOutputType = {
    tmdbId: number | null
  }

  export type MovieMinAggregateOutputType = {
    id: string | null
    name: string | null
    overview: string | null
    tmdbId: number | null
    mediaId: string | null
    libraryId: string | null
  }

  export type MovieMaxAggregateOutputType = {
    id: string | null
    name: string | null
    overview: string | null
    tmdbId: number | null
    mediaId: string | null
    libraryId: string | null
  }

  export type MovieCountAggregateOutputType = {
    id: number
    name: number
    overview: number
    images: number
    tmdbId: number
    mediaId: number
    libraryId: number
    _all: number
  }


  export type MovieAvgAggregateInputType = {
    tmdbId?: true
  }

  export type MovieSumAggregateInputType = {
    tmdbId?: true
  }

  export type MovieMinAggregateInputType = {
    id?: true
    name?: true
    overview?: true
    tmdbId?: true
    mediaId?: true
    libraryId?: true
  }

  export type MovieMaxAggregateInputType = {
    id?: true
    name?: true
    overview?: true
    tmdbId?: true
    mediaId?: true
    libraryId?: true
  }

  export type MovieCountAggregateInputType = {
    id?: true
    name?: true
    overview?: true
    images?: true
    tmdbId?: true
    mediaId?: true
    libraryId?: true
    _all?: true
  }

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie to aggregate.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type MovieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithAggregationInput | MovieOrderByWithAggregationInput[]
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum
    having?: MovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _avg?: MovieAvgAggregateInputType
    _sum?: MovieSumAggregateInputType
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }

  export type MovieGroupByOutputType = {
    id: string
    name: string
    overview: string | null
    images: string[]
    tmdbId: number
    mediaId: string
    libraryId: string
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type MovieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    overview?: boolean
    images?: boolean
    tmdbId?: boolean
    mediaId?: boolean
    libraryId?: boolean
    media?: boolean | MediaDefaultArgs<ExtArgs>
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectScalar = {
    id?: boolean
    name?: boolean
    overview?: boolean
    images?: boolean
    tmdbId?: boolean
    mediaId?: boolean
    libraryId?: boolean
  }

  export type MovieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | MediaDefaultArgs<ExtArgs>
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }


  export type $MoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movie"
    objects: {
      media: Prisma.$MediaPayload<ExtArgs>
      library: Prisma.$LibraryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      overview: string | null
      images: string[]
      tmdbId: number
      mediaId: string
      libraryId: string
    }, ExtArgs["result"]["movie"]>
    composites: {}
  }


  type MovieGetPayload<S extends boolean | null | undefined | MovieDefaultArgs> = $Result.GetResult<Prisma.$MoviePayload, S>

  type MovieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MovieFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MovieCountAggregateInputType | true
    }

  export interface MovieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movie'], meta: { name: 'Movie' } }
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MovieFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MovieFindUniqueArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Movie that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MovieFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieFindFirstArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MovieFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
    **/
    create<T extends MovieCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MovieCreateArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Movies.
     *     @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     *     @example
     *     // Create many Movies
     *     const movie = await prisma.movie.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MovieCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
    **/
    delete<T extends MovieDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MovieDeleteArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MovieUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MovieUpdateArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MovieDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MovieUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MovieUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
    **/
    upsert<T extends MovieUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MovieUpsertArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): Prisma.PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movie model
   */
  readonly fields: MovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    media<T extends MediaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MediaDefaultArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    library<T extends LibraryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LibraryDefaultArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Movie model
   */ 
  interface MovieFieldRefs {
    readonly id: FieldRef<"Movie", 'String'>
    readonly name: FieldRef<"Movie", 'String'>
    readonly overview: FieldRef<"Movie", 'String'>
    readonly images: FieldRef<"Movie", 'String[]'>
    readonly tmdbId: FieldRef<"Movie", 'Int'>
    readonly mediaId: FieldRef<"Movie", 'String'>
    readonly libraryId: FieldRef<"Movie", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Movie findUnique
   */
  export type MovieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }


  /**
   * Movie findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }


  /**
   * Movie findFirst
   */
  export type MovieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }


  /**
   * Movie findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }


  /**
   * Movie findMany
   */
  export type MovieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }


  /**
   * Movie create
   */
  export type MovieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to create a Movie.
     */
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }


  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Movie update
   */
  export type MovieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to update a Movie.
     */
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
    /**
     * Choose, which Movie to update.
     */
    where: MovieWhereUniqueInput
  }


  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
  }


  /**
   * Movie upsert
   */
  export type MovieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The filter to search for the Movie to update in case it exists.
     */
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     */
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
  }


  /**
   * Movie delete
   */
  export type MovieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter which Movie to delete.
     */
    where: MovieWhereUniqueInput
  }


  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MovieWhereInput
  }


  /**
   * Movie without action
   */
  export type MovieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    isOwner: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    isOwner: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    isOwner: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    isOwner?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    isOwner?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    isOwner?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    isOwner: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    isOwner?: boolean
    user?: boolean | User$userArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    isOwner?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | User$userArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      user: Prisma.$LibraryAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      isOwner: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends User$userArgs<ExtArgs> = {}>(args?: Subset<T, User$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryAccessPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isOwner: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.user
   */
  export type User$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryAccess
     */
    select?: LibraryAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LibraryAccessInclude<ExtArgs> | null
    where?: LibraryAccessWhereInput
    orderBy?: LibraryAccessOrderByWithRelationInput | LibraryAccessOrderByWithRelationInput[]
    cursor?: LibraryAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LibraryAccessScalarFieldEnum | LibraryAccessScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Server
   */

  export type AggregateServer = {
    _count: ServerCountAggregateOutputType | null
    _min: ServerMinAggregateOutputType | null
    _max: ServerMaxAggregateOutputType | null
  }

  export type ServerMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ServerMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ServerCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ServerMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ServerMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ServerCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ServerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Server to aggregate.
     */
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServerOrderByWithRelationInput | ServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servers
    **/
    _count?: true | ServerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServerMaxAggregateInputType
  }

  export type GetServerAggregateType<T extends ServerAggregateArgs> = {
        [P in keyof T & keyof AggregateServer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServer[P]>
      : GetScalarType<T[P], AggregateServer[P]>
  }




  export type ServerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServerWhereInput
    orderBy?: ServerOrderByWithAggregationInput | ServerOrderByWithAggregationInput[]
    by: ServerScalarFieldEnum[] | ServerScalarFieldEnum
    having?: ServerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServerCountAggregateInputType | true
    _min?: ServerMinAggregateInputType
    _max?: ServerMaxAggregateInputType
  }

  export type ServerGroupByOutputType = {
    id: string
    name: string
    _count: ServerCountAggregateOutputType | null
    _min: ServerMinAggregateOutputType | null
    _max: ServerMaxAggregateOutputType | null
  }

  type GetServerGroupByPayload<T extends ServerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServerGroupByOutputType[P]>
            : GetScalarType<T[P], ServerGroupByOutputType[P]>
        }
      >
    >


  export type ServerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["server"]>

  export type ServerSelectScalar = {
    id?: boolean
    name?: boolean
  }


  export type $ServerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Server"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["server"]>
    composites: {}
  }


  type ServerGetPayload<S extends boolean | null | undefined | ServerDefaultArgs> = $Result.GetResult<Prisma.$ServerPayload, S>

  type ServerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServerCountAggregateInputType | true
    }

  export interface ServerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Server'], meta: { name: 'Server' } }
    /**
     * Find zero or one Server that matches the filter.
     * @param {ServerFindUniqueArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ServerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ServerFindUniqueArgs<ExtArgs>>
    ): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Server that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ServerFindUniqueOrThrowArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ServerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ServerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Server that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerFindFirstArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ServerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ServerFindFirstArgs<ExtArgs>>
    ): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Server that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerFindFirstOrThrowArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ServerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ServerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Servers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servers
     * const servers = await prisma.server.findMany()
     * 
     * // Get first 10 Servers
     * const servers = await prisma.server.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serverWithIdOnly = await prisma.server.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ServerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ServerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Server.
     * @param {ServerCreateArgs} args - Arguments to create a Server.
     * @example
     * // Create one Server
     * const Server = await prisma.server.create({
     *   data: {
     *     // ... data to create a Server
     *   }
     * })
     * 
    **/
    create<T extends ServerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ServerCreateArgs<ExtArgs>>
    ): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Servers.
     *     @param {ServerCreateManyArgs} args - Arguments to create many Servers.
     *     @example
     *     // Create many Servers
     *     const server = await prisma.server.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ServerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ServerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Server.
     * @param {ServerDeleteArgs} args - Arguments to delete one Server.
     * @example
     * // Delete one Server
     * const Server = await prisma.server.delete({
     *   where: {
     *     // ... filter to delete one Server
     *   }
     * })
     * 
    **/
    delete<T extends ServerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ServerDeleteArgs<ExtArgs>>
    ): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Server.
     * @param {ServerUpdateArgs} args - Arguments to update one Server.
     * @example
     * // Update one Server
     * const server = await prisma.server.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ServerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ServerUpdateArgs<ExtArgs>>
    ): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Servers.
     * @param {ServerDeleteManyArgs} args - Arguments to filter Servers to delete.
     * @example
     * // Delete a few Servers
     * const { count } = await prisma.server.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ServerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ServerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servers
     * const server = await prisma.server.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ServerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ServerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Server.
     * @param {ServerUpsertArgs} args - Arguments to update or create a Server.
     * @example
     * // Update or create a Server
     * const server = await prisma.server.upsert({
     *   create: {
     *     // ... data to create a Server
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Server we want to update
     *   }
     * })
    **/
    upsert<T extends ServerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ServerUpsertArgs<ExtArgs>>
    ): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerCountArgs} args - Arguments to filter Servers to count.
     * @example
     * // Count the number of Servers
     * const count = await prisma.server.count({
     *   where: {
     *     // ... the filter for the Servers we want to count
     *   }
     * })
    **/
    count<T extends ServerCountArgs>(
      args?: Subset<T, ServerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Server.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServerAggregateArgs>(args: Subset<T, ServerAggregateArgs>): Prisma.PrismaPromise<GetServerAggregateType<T>>

    /**
     * Group by Server.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServerGroupByArgs['orderBy'] }
        : { orderBy?: ServerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Server model
   */
  readonly fields: ServerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Server.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Server model
   */ 
  interface ServerFieldRefs {
    readonly id: FieldRef<"Server", 'String'>
    readonly name: FieldRef<"Server", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Server findUnique
   */
  export type ServerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Filter, which Server to fetch.
     */
    where: ServerWhereUniqueInput
  }


  /**
   * Server findUniqueOrThrow
   */
  export type ServerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Filter, which Server to fetch.
     */
    where: ServerWhereUniqueInput
  }


  /**
   * Server findFirst
   */
  export type ServerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Filter, which Server to fetch.
     */
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServerOrderByWithRelationInput | ServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servers.
     */
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servers.
     */
    distinct?: ServerScalarFieldEnum | ServerScalarFieldEnum[]
  }


  /**
   * Server findFirstOrThrow
   */
  export type ServerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Filter, which Server to fetch.
     */
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServerOrderByWithRelationInput | ServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servers.
     */
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servers.
     */
    distinct?: ServerScalarFieldEnum | ServerScalarFieldEnum[]
  }


  /**
   * Server findMany
   */
  export type ServerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Filter, which Servers to fetch.
     */
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServerOrderByWithRelationInput | ServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servers.
     */
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    distinct?: ServerScalarFieldEnum | ServerScalarFieldEnum[]
  }


  /**
   * Server create
   */
  export type ServerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * The data needed to create a Server.
     */
    data: XOR<ServerCreateInput, ServerUncheckedCreateInput>
  }


  /**
   * Server createMany
   */
  export type ServerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servers.
     */
    data: ServerCreateManyInput | ServerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Server update
   */
  export type ServerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * The data needed to update a Server.
     */
    data: XOR<ServerUpdateInput, ServerUncheckedUpdateInput>
    /**
     * Choose, which Server to update.
     */
    where: ServerWhereUniqueInput
  }


  /**
   * Server updateMany
   */
  export type ServerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servers.
     */
    data: XOR<ServerUpdateManyMutationInput, ServerUncheckedUpdateManyInput>
    /**
     * Filter which Servers to update
     */
    where?: ServerWhereInput
  }


  /**
   * Server upsert
   */
  export type ServerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * The filter to search for the Server to update in case it exists.
     */
    where: ServerWhereUniqueInput
    /**
     * In case the Server found by the `where` argument doesn't exist, create a new Server with this data.
     */
    create: XOR<ServerCreateInput, ServerUncheckedCreateInput>
    /**
     * In case the Server was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServerUpdateInput, ServerUncheckedUpdateInput>
  }


  /**
   * Server delete
   */
  export type ServerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Filter which Server to delete.
     */
    where: ServerWhereUniqueInput
  }


  /**
   * Server deleteMany
   */
  export type ServerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servers to delete
     */
    where?: ServerWhereInput
  }


  /**
   * Server without action
   */
  export type ServerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
  }



  /**
   * Model LibraryAccess
   */

  export type AggregateLibraryAccess = {
    _count: LibraryAccessCountAggregateOutputType | null
    _min: LibraryAccessMinAggregateOutputType | null
    _max: LibraryAccessMaxAggregateOutputType | null
  }

  export type LibraryAccessMinAggregateOutputType = {
    id: string | null
    libraryId: string | null
    userId: string | null
    access: $Enums.LibraryAccessType | null
  }

  export type LibraryAccessMaxAggregateOutputType = {
    id: string | null
    libraryId: string | null
    userId: string | null
    access: $Enums.LibraryAccessType | null
  }

  export type LibraryAccessCountAggregateOutputType = {
    id: number
    libraryId: number
    userId: number
    access: number
    _all: number
  }


  export type LibraryAccessMinAggregateInputType = {
    id?: true
    libraryId?: true
    userId?: true
    access?: true
  }

  export type LibraryAccessMaxAggregateInputType = {
    id?: true
    libraryId?: true
    userId?: true
    access?: true
  }

  export type LibraryAccessCountAggregateInputType = {
    id?: true
    libraryId?: true
    userId?: true
    access?: true
    _all?: true
  }

  export type LibraryAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LibraryAccess to aggregate.
     */
    where?: LibraryAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryAccesses to fetch.
     */
    orderBy?: LibraryAccessOrderByWithRelationInput | LibraryAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LibraryAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LibraryAccesses
    **/
    _count?: true | LibraryAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibraryAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibraryAccessMaxAggregateInputType
  }

  export type GetLibraryAccessAggregateType<T extends LibraryAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateLibraryAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibraryAccess[P]>
      : GetScalarType<T[P], AggregateLibraryAccess[P]>
  }




  export type LibraryAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibraryAccessWhereInput
    orderBy?: LibraryAccessOrderByWithAggregationInput | LibraryAccessOrderByWithAggregationInput[]
    by: LibraryAccessScalarFieldEnum[] | LibraryAccessScalarFieldEnum
    having?: LibraryAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibraryAccessCountAggregateInputType | true
    _min?: LibraryAccessMinAggregateInputType
    _max?: LibraryAccessMaxAggregateInputType
  }

  export type LibraryAccessGroupByOutputType = {
    id: string
    libraryId: string
    userId: string
    access: $Enums.LibraryAccessType
    _count: LibraryAccessCountAggregateOutputType | null
    _min: LibraryAccessMinAggregateOutputType | null
    _max: LibraryAccessMaxAggregateOutputType | null
  }

  type GetLibraryAccessGroupByPayload<T extends LibraryAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibraryAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibraryAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibraryAccessGroupByOutputType[P]>
            : GetScalarType<T[P], LibraryAccessGroupByOutputType[P]>
        }
      >
    >


  export type LibraryAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libraryId?: boolean
    userId?: boolean
    access?: boolean
    library?: boolean | LibraryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libraryAccess"]>

  export type LibraryAccessSelectScalar = {
    id?: boolean
    libraryId?: boolean
    userId?: boolean
    access?: boolean
  }

  export type LibraryAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    library?: boolean | LibraryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $LibraryAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LibraryAccess"
    objects: {
      library: Prisma.$LibraryPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      libraryId: string
      userId: string
      access: $Enums.LibraryAccessType
    }, ExtArgs["result"]["libraryAccess"]>
    composites: {}
  }


  type LibraryAccessGetPayload<S extends boolean | null | undefined | LibraryAccessDefaultArgs> = $Result.GetResult<Prisma.$LibraryAccessPayload, S>

  type LibraryAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LibraryAccessFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LibraryAccessCountAggregateInputType | true
    }

  export interface LibraryAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LibraryAccess'], meta: { name: 'LibraryAccess' } }
    /**
     * Find zero or one LibraryAccess that matches the filter.
     * @param {LibraryAccessFindUniqueArgs} args - Arguments to find a LibraryAccess
     * @example
     * // Get one LibraryAccess
     * const libraryAccess = await prisma.libraryAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LibraryAccessFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LibraryAccessFindUniqueArgs<ExtArgs>>
    ): Prisma__LibraryAccessClient<$Result.GetResult<Prisma.$LibraryAccessPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LibraryAccess that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LibraryAccessFindUniqueOrThrowArgs} args - Arguments to find a LibraryAccess
     * @example
     * // Get one LibraryAccess
     * const libraryAccess = await prisma.libraryAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LibraryAccessFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LibraryAccessFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LibraryAccessClient<$Result.GetResult<Prisma.$LibraryAccessPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LibraryAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryAccessFindFirstArgs} args - Arguments to find a LibraryAccess
     * @example
     * // Get one LibraryAccess
     * const libraryAccess = await prisma.libraryAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LibraryAccessFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LibraryAccessFindFirstArgs<ExtArgs>>
    ): Prisma__LibraryAccessClient<$Result.GetResult<Prisma.$LibraryAccessPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LibraryAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryAccessFindFirstOrThrowArgs} args - Arguments to find a LibraryAccess
     * @example
     * // Get one LibraryAccess
     * const libraryAccess = await prisma.libraryAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LibraryAccessFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LibraryAccessFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LibraryAccessClient<$Result.GetResult<Prisma.$LibraryAccessPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LibraryAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryAccessFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LibraryAccesses
     * const libraryAccesses = await prisma.libraryAccess.findMany()
     * 
     * // Get first 10 LibraryAccesses
     * const libraryAccesses = await prisma.libraryAccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const libraryAccessWithIdOnly = await prisma.libraryAccess.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LibraryAccessFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LibraryAccessFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryAccessPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LibraryAccess.
     * @param {LibraryAccessCreateArgs} args - Arguments to create a LibraryAccess.
     * @example
     * // Create one LibraryAccess
     * const LibraryAccess = await prisma.libraryAccess.create({
     *   data: {
     *     // ... data to create a LibraryAccess
     *   }
     * })
     * 
    **/
    create<T extends LibraryAccessCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LibraryAccessCreateArgs<ExtArgs>>
    ): Prisma__LibraryAccessClient<$Result.GetResult<Prisma.$LibraryAccessPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LibraryAccesses.
     *     @param {LibraryAccessCreateManyArgs} args - Arguments to create many LibraryAccesses.
     *     @example
     *     // Create many LibraryAccesses
     *     const libraryAccess = await prisma.libraryAccess.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LibraryAccessCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LibraryAccessCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LibraryAccess.
     * @param {LibraryAccessDeleteArgs} args - Arguments to delete one LibraryAccess.
     * @example
     * // Delete one LibraryAccess
     * const LibraryAccess = await prisma.libraryAccess.delete({
     *   where: {
     *     // ... filter to delete one LibraryAccess
     *   }
     * })
     * 
    **/
    delete<T extends LibraryAccessDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LibraryAccessDeleteArgs<ExtArgs>>
    ): Prisma__LibraryAccessClient<$Result.GetResult<Prisma.$LibraryAccessPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LibraryAccess.
     * @param {LibraryAccessUpdateArgs} args - Arguments to update one LibraryAccess.
     * @example
     * // Update one LibraryAccess
     * const libraryAccess = await prisma.libraryAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LibraryAccessUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LibraryAccessUpdateArgs<ExtArgs>>
    ): Prisma__LibraryAccessClient<$Result.GetResult<Prisma.$LibraryAccessPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LibraryAccesses.
     * @param {LibraryAccessDeleteManyArgs} args - Arguments to filter LibraryAccesses to delete.
     * @example
     * // Delete a few LibraryAccesses
     * const { count } = await prisma.libraryAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LibraryAccessDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LibraryAccessDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LibraryAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LibraryAccesses
     * const libraryAccess = await prisma.libraryAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LibraryAccessUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LibraryAccessUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LibraryAccess.
     * @param {LibraryAccessUpsertArgs} args - Arguments to update or create a LibraryAccess.
     * @example
     * // Update or create a LibraryAccess
     * const libraryAccess = await prisma.libraryAccess.upsert({
     *   create: {
     *     // ... data to create a LibraryAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LibraryAccess we want to update
     *   }
     * })
    **/
    upsert<T extends LibraryAccessUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LibraryAccessUpsertArgs<ExtArgs>>
    ): Prisma__LibraryAccessClient<$Result.GetResult<Prisma.$LibraryAccessPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LibraryAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryAccessCountArgs} args - Arguments to filter LibraryAccesses to count.
     * @example
     * // Count the number of LibraryAccesses
     * const count = await prisma.libraryAccess.count({
     *   where: {
     *     // ... the filter for the LibraryAccesses we want to count
     *   }
     * })
    **/
    count<T extends LibraryAccessCountArgs>(
      args?: Subset<T, LibraryAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibraryAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LibraryAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LibraryAccessAggregateArgs>(args: Subset<T, LibraryAccessAggregateArgs>): Prisma.PrismaPromise<GetLibraryAccessAggregateType<T>>

    /**
     * Group by LibraryAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryAccessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LibraryAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LibraryAccessGroupByArgs['orderBy'] }
        : { orderBy?: LibraryAccessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LibraryAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibraryAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LibraryAccess model
   */
  readonly fields: LibraryAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LibraryAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LibraryAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    library<T extends LibraryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LibraryDefaultArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LibraryAccess model
   */ 
  interface LibraryAccessFieldRefs {
    readonly id: FieldRef<"LibraryAccess", 'String'>
    readonly libraryId: FieldRef<"LibraryAccess", 'String'>
    readonly userId: FieldRef<"LibraryAccess", 'String'>
    readonly access: FieldRef<"LibraryAccess", 'LibraryAccessType'>
  }
    

  // Custom InputTypes

  /**
   * LibraryAccess findUnique
   */
  export type LibraryAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryAccess
     */
    select?: LibraryAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LibraryAccessInclude<ExtArgs> | null
    /**
     * Filter, which LibraryAccess to fetch.
     */
    where: LibraryAccessWhereUniqueInput
  }


  /**
   * LibraryAccess findUniqueOrThrow
   */
  export type LibraryAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryAccess
     */
    select?: LibraryAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LibraryAccessInclude<ExtArgs> | null
    /**
     * Filter, which LibraryAccess to fetch.
     */
    where: LibraryAccessWhereUniqueInput
  }


  /**
   * LibraryAccess findFirst
   */
  export type LibraryAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryAccess
     */
    select?: LibraryAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LibraryAccessInclude<ExtArgs> | null
    /**
     * Filter, which LibraryAccess to fetch.
     */
    where?: LibraryAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryAccesses to fetch.
     */
    orderBy?: LibraryAccessOrderByWithRelationInput | LibraryAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LibraryAccesses.
     */
    cursor?: LibraryAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LibraryAccesses.
     */
    distinct?: LibraryAccessScalarFieldEnum | LibraryAccessScalarFieldEnum[]
  }


  /**
   * LibraryAccess findFirstOrThrow
   */
  export type LibraryAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryAccess
     */
    select?: LibraryAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LibraryAccessInclude<ExtArgs> | null
    /**
     * Filter, which LibraryAccess to fetch.
     */
    where?: LibraryAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryAccesses to fetch.
     */
    orderBy?: LibraryAccessOrderByWithRelationInput | LibraryAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LibraryAccesses.
     */
    cursor?: LibraryAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LibraryAccesses.
     */
    distinct?: LibraryAccessScalarFieldEnum | LibraryAccessScalarFieldEnum[]
  }


  /**
   * LibraryAccess findMany
   */
  export type LibraryAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryAccess
     */
    select?: LibraryAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LibraryAccessInclude<ExtArgs> | null
    /**
     * Filter, which LibraryAccesses to fetch.
     */
    where?: LibraryAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryAccesses to fetch.
     */
    orderBy?: LibraryAccessOrderByWithRelationInput | LibraryAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LibraryAccesses.
     */
    cursor?: LibraryAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryAccesses.
     */
    skip?: number
    distinct?: LibraryAccessScalarFieldEnum | LibraryAccessScalarFieldEnum[]
  }


  /**
   * LibraryAccess create
   */
  export type LibraryAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryAccess
     */
    select?: LibraryAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LibraryAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a LibraryAccess.
     */
    data: XOR<LibraryAccessCreateInput, LibraryAccessUncheckedCreateInput>
  }


  /**
   * LibraryAccess createMany
   */
  export type LibraryAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LibraryAccesses.
     */
    data: LibraryAccessCreateManyInput | LibraryAccessCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * LibraryAccess update
   */
  export type LibraryAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryAccess
     */
    select?: LibraryAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LibraryAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a LibraryAccess.
     */
    data: XOR<LibraryAccessUpdateInput, LibraryAccessUncheckedUpdateInput>
    /**
     * Choose, which LibraryAccess to update.
     */
    where: LibraryAccessWhereUniqueInput
  }


  /**
   * LibraryAccess updateMany
   */
  export type LibraryAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LibraryAccesses.
     */
    data: XOR<LibraryAccessUpdateManyMutationInput, LibraryAccessUncheckedUpdateManyInput>
    /**
     * Filter which LibraryAccesses to update
     */
    where?: LibraryAccessWhereInput
  }


  /**
   * LibraryAccess upsert
   */
  export type LibraryAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryAccess
     */
    select?: LibraryAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LibraryAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the LibraryAccess to update in case it exists.
     */
    where: LibraryAccessWhereUniqueInput
    /**
     * In case the LibraryAccess found by the `where` argument doesn't exist, create a new LibraryAccess with this data.
     */
    create: XOR<LibraryAccessCreateInput, LibraryAccessUncheckedCreateInput>
    /**
     * In case the LibraryAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LibraryAccessUpdateInput, LibraryAccessUncheckedUpdateInput>
  }


  /**
   * LibraryAccess delete
   */
  export type LibraryAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryAccess
     */
    select?: LibraryAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LibraryAccessInclude<ExtArgs> | null
    /**
     * Filter which LibraryAccess to delete.
     */
    where: LibraryAccessWhereUniqueInput
  }


  /**
   * LibraryAccess deleteMany
   */
  export type LibraryAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LibraryAccesses to delete
     */
    where?: LibraryAccessWhereInput
  }


  /**
   * LibraryAccess without action
   */
  export type LibraryAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryAccess
     */
    select?: LibraryAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LibraryAccessInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LibraryScalarFieldEnum: {
    id: 'id',
    type: 'type',
    name: 'name',
    path: 'path',
    createdAt: 'createdAt'
  };

  export type LibraryScalarFieldEnum = (typeof LibraryScalarFieldEnum)[keyof typeof LibraryScalarFieldEnum]


  export const StreamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    streamIndex: 'streamIndex',
    type: 'type',
    mediaId: 'mediaId'
  };

  export type StreamScalarFieldEnum = (typeof StreamScalarFieldEnum)[keyof typeof StreamScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    path: 'path',
    libraryId: 'libraryId',
    createdAt: 'createdAt',
    width: 'width',
    height: 'height',
    bitrate: 'bitrate',
    duration: 'duration'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const EpisodeScalarFieldEnum: {
    id: 'id',
    mediaId: 'mediaId',
    seasonId: 'seasonId',
    overview: 'overview',
    name: 'name',
    episode_number: 'episode_number',
    images: 'images'
  };

  export type EpisodeScalarFieldEnum = (typeof EpisodeScalarFieldEnum)[keyof typeof EpisodeScalarFieldEnum]


  export const SeasonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    season_number: 'season_number',
    overview: 'overview',
    showId: 'showId',
    images: 'images'
  };

  export type SeasonScalarFieldEnum = (typeof SeasonScalarFieldEnum)[keyof typeof SeasonScalarFieldEnum]


  export const ShowScalarFieldEnum: {
    id: 'id',
    tvmazeId: 'tvmazeId',
    name: 'name',
    path: 'path',
    overview: 'overview',
    images: 'images',
    libraryId: 'libraryId'
  };

  export type ShowScalarFieldEnum = (typeof ShowScalarFieldEnum)[keyof typeof ShowScalarFieldEnum]


  export const MovieScalarFieldEnum: {
    id: 'id',
    name: 'name',
    overview: 'overview',
    images: 'images',
    tmdbId: 'tmdbId',
    mediaId: 'mediaId',
    libraryId: 'libraryId'
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    isOwner: 'isOwner'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ServerScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ServerScalarFieldEnum = (typeof ServerScalarFieldEnum)[keyof typeof ServerScalarFieldEnum]


  export const LibraryAccessScalarFieldEnum: {
    id: 'id',
    libraryId: 'libraryId',
    userId: 'userId',
    access: 'access'
  };

  export type LibraryAccessScalarFieldEnum = (typeof LibraryAccessScalarFieldEnum)[keyof typeof LibraryAccessScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'LibraryType'
   */
  export type EnumLibraryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LibraryType'>
    


  /**
   * Reference to a field of type 'LibraryType[]'
   */
  export type ListEnumLibraryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LibraryType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'StreamType'
   */
  export type EnumStreamTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StreamType'>
    


  /**
   * Reference to a field of type 'StreamType[]'
   */
  export type ListEnumStreamTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StreamType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'LibraryAccessType'
   */
  export type EnumLibraryAccessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LibraryAccessType'>
    


  /**
   * Reference to a field of type 'LibraryAccessType[]'
   */
  export type ListEnumLibraryAccessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LibraryAccessType[]'>
    
  /**
   * Deep Input Types
   */


  export type LibraryWhereInput = {
    AND?: LibraryWhereInput | LibraryWhereInput[]
    OR?: LibraryWhereInput[]
    NOT?: LibraryWhereInput | LibraryWhereInput[]
    id?: StringFilter<"Library"> | string
    type?: EnumLibraryTypeFilter<"Library"> | $Enums.LibraryType
    name?: StringFilter<"Library"> | string
    path?: StringFilter<"Library"> | string
    createdAt?: DateTimeFilter<"Library"> | Date | string
    medias?: MediaListRelationFilter
    shows?: ShowListRelationFilter
    movies?: MovieListRelationFilter
    libraryAccess?: LibraryAccessListRelationFilter
  }

  export type LibraryOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    medias?: MediaOrderByRelationAggregateInput
    shows?: ShowOrderByRelationAggregateInput
    movies?: MovieOrderByRelationAggregateInput
    libraryAccess?: LibraryAccessOrderByRelationAggregateInput
  }

  export type LibraryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    path?: string
    AND?: LibraryWhereInput | LibraryWhereInput[]
    OR?: LibraryWhereInput[]
    NOT?: LibraryWhereInput | LibraryWhereInput[]
    type?: EnumLibraryTypeFilter<"Library"> | $Enums.LibraryType
    createdAt?: DateTimeFilter<"Library"> | Date | string
    medias?: MediaListRelationFilter
    shows?: ShowListRelationFilter
    movies?: MovieListRelationFilter
    libraryAccess?: LibraryAccessListRelationFilter
  }, "id" | "id" | "name" | "path">

  export type LibraryOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    _count?: LibraryCountOrderByAggregateInput
    _max?: LibraryMaxOrderByAggregateInput
    _min?: LibraryMinOrderByAggregateInput
  }

  export type LibraryScalarWhereWithAggregatesInput = {
    AND?: LibraryScalarWhereWithAggregatesInput | LibraryScalarWhereWithAggregatesInput[]
    OR?: LibraryScalarWhereWithAggregatesInput[]
    NOT?: LibraryScalarWhereWithAggregatesInput | LibraryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Library"> | string
    type?: EnumLibraryTypeWithAggregatesFilter<"Library"> | $Enums.LibraryType
    name?: StringWithAggregatesFilter<"Library"> | string
    path?: StringWithAggregatesFilter<"Library"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Library"> | Date | string
  }

  export type StreamWhereInput = {
    AND?: StreamWhereInput | StreamWhereInput[]
    OR?: StreamWhereInput[]
    NOT?: StreamWhereInput | StreamWhereInput[]
    id?: StringFilter<"Stream"> | string
    name?: StringFilter<"Stream"> | string
    streamIndex?: IntFilter<"Stream"> | number
    type?: EnumStreamTypeFilter<"Stream"> | $Enums.StreamType
    mediaId?: StringNullableFilter<"Stream"> | string | null
    media?: XOR<MediaNullableRelationFilter, MediaWhereInput> | null
  }

  export type StreamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    streamIndex?: SortOrder
    type?: SortOrder
    mediaId?: SortOrderInput | SortOrder
    media?: MediaOrderByWithRelationInput
  }

  export type StreamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mediaId_streamIndex?: StreamMediaIdStreamIndexCompoundUniqueInput
    AND?: StreamWhereInput | StreamWhereInput[]
    OR?: StreamWhereInput[]
    NOT?: StreamWhereInput | StreamWhereInput[]
    name?: StringFilter<"Stream"> | string
    streamIndex?: IntFilter<"Stream"> | number
    type?: EnumStreamTypeFilter<"Stream"> | $Enums.StreamType
    mediaId?: StringNullableFilter<"Stream"> | string | null
    media?: XOR<MediaNullableRelationFilter, MediaWhereInput> | null
  }, "id" | "id" | "mediaId_streamIndex">

  export type StreamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    streamIndex?: SortOrder
    type?: SortOrder
    mediaId?: SortOrderInput | SortOrder
    _count?: StreamCountOrderByAggregateInput
    _avg?: StreamAvgOrderByAggregateInput
    _max?: StreamMaxOrderByAggregateInput
    _min?: StreamMinOrderByAggregateInput
    _sum?: StreamSumOrderByAggregateInput
  }

  export type StreamScalarWhereWithAggregatesInput = {
    AND?: StreamScalarWhereWithAggregatesInput | StreamScalarWhereWithAggregatesInput[]
    OR?: StreamScalarWhereWithAggregatesInput[]
    NOT?: StreamScalarWhereWithAggregatesInput | StreamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stream"> | string
    name?: StringWithAggregatesFilter<"Stream"> | string
    streamIndex?: IntWithAggregatesFilter<"Stream"> | number
    type?: EnumStreamTypeWithAggregatesFilter<"Stream"> | $Enums.StreamType
    mediaId?: StringNullableWithAggregatesFilter<"Stream"> | string | null
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: StringFilter<"Media"> | string
    path?: StringFilter<"Media"> | string
    libraryId?: StringFilter<"Media"> | string
    createdAt?: DateTimeFilter<"Media"> | Date | string
    width?: IntFilter<"Media"> | number
    height?: IntFilter<"Media"> | number
    bitrate?: IntFilter<"Media"> | number
    duration?: FloatFilter<"Media"> | number
    library?: XOR<LibraryRelationFilter, LibraryWhereInput>
    streams?: StreamListRelationFilter
    episode?: XOR<EpisodeNullableRelationFilter, EpisodeWhereInput> | null
    movie?: XOR<MovieNullableRelationFilter, MovieWhereInput> | null
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrder
    libraryId?: SortOrder
    createdAt?: SortOrder
    width?: SortOrder
    height?: SortOrder
    bitrate?: SortOrder
    duration?: SortOrder
    library?: LibraryOrderByWithRelationInput
    streams?: StreamOrderByRelationAggregateInput
    episode?: EpisodeOrderByWithRelationInput
    movie?: MovieOrderByWithRelationInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    path?: string
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    libraryId?: StringFilter<"Media"> | string
    createdAt?: DateTimeFilter<"Media"> | Date | string
    width?: IntFilter<"Media"> | number
    height?: IntFilter<"Media"> | number
    bitrate?: IntFilter<"Media"> | number
    duration?: FloatFilter<"Media"> | number
    library?: XOR<LibraryRelationFilter, LibraryWhereInput>
    streams?: StreamListRelationFilter
    episode?: XOR<EpisodeNullableRelationFilter, EpisodeWhereInput> | null
    movie?: XOR<MovieNullableRelationFilter, MovieWhereInput> | null
  }, "id" | "id" | "path">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    libraryId?: SortOrder
    createdAt?: SortOrder
    width?: SortOrder
    height?: SortOrder
    bitrate?: SortOrder
    duration?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _avg?: MediaAvgOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
    _sum?: MediaSumOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Media"> | string
    path?: StringWithAggregatesFilter<"Media"> | string
    libraryId?: StringWithAggregatesFilter<"Media"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
    width?: IntWithAggregatesFilter<"Media"> | number
    height?: IntWithAggregatesFilter<"Media"> | number
    bitrate?: IntWithAggregatesFilter<"Media"> | number
    duration?: FloatWithAggregatesFilter<"Media"> | number
  }

  export type EpisodeWhereInput = {
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    id?: StringFilter<"Episode"> | string
    mediaId?: StringFilter<"Episode"> | string
    seasonId?: StringNullableFilter<"Episode"> | string | null
    overview?: StringNullableFilter<"Episode"> | string | null
    name?: StringFilter<"Episode"> | string
    episode_number?: IntFilter<"Episode"> | number
    images?: StringNullableListFilter<"Episode">
    media?: XOR<MediaRelationFilter, MediaWhereInput>
    season?: XOR<SeasonNullableRelationFilter, SeasonWhereInput> | null
  }

  export type EpisodeOrderByWithRelationInput = {
    id?: SortOrder
    mediaId?: SortOrder
    seasonId?: SortOrderInput | SortOrder
    overview?: SortOrderInput | SortOrder
    name?: SortOrder
    episode_number?: SortOrder
    images?: SortOrder
    media?: MediaOrderByWithRelationInput
    season?: SeasonOrderByWithRelationInput
  }

  export type EpisodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mediaId?: string
    seasonId_episode_number?: EpisodeSeasonIdEpisode_numberCompoundUniqueInput
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    seasonId?: StringNullableFilter<"Episode"> | string | null
    overview?: StringNullableFilter<"Episode"> | string | null
    name?: StringFilter<"Episode"> | string
    episode_number?: IntFilter<"Episode"> | number
    images?: StringNullableListFilter<"Episode">
    media?: XOR<MediaRelationFilter, MediaWhereInput>
    season?: XOR<SeasonNullableRelationFilter, SeasonWhereInput> | null
  }, "id" | "id" | "mediaId" | "seasonId_episode_number">

  export type EpisodeOrderByWithAggregationInput = {
    id?: SortOrder
    mediaId?: SortOrder
    seasonId?: SortOrderInput | SortOrder
    overview?: SortOrderInput | SortOrder
    name?: SortOrder
    episode_number?: SortOrder
    images?: SortOrder
    _count?: EpisodeCountOrderByAggregateInput
    _avg?: EpisodeAvgOrderByAggregateInput
    _max?: EpisodeMaxOrderByAggregateInput
    _min?: EpisodeMinOrderByAggregateInput
    _sum?: EpisodeSumOrderByAggregateInput
  }

  export type EpisodeScalarWhereWithAggregatesInput = {
    AND?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    OR?: EpisodeScalarWhereWithAggregatesInput[]
    NOT?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Episode"> | string
    mediaId?: StringWithAggregatesFilter<"Episode"> | string
    seasonId?: StringNullableWithAggregatesFilter<"Episode"> | string | null
    overview?: StringNullableWithAggregatesFilter<"Episode"> | string | null
    name?: StringWithAggregatesFilter<"Episode"> | string
    episode_number?: IntWithAggregatesFilter<"Episode"> | number
    images?: StringNullableListFilter<"Episode">
  }

  export type SeasonWhereInput = {
    AND?: SeasonWhereInput | SeasonWhereInput[]
    OR?: SeasonWhereInput[]
    NOT?: SeasonWhereInput | SeasonWhereInput[]
    id?: StringFilter<"Season"> | string
    name?: StringFilter<"Season"> | string
    season_number?: IntFilter<"Season"> | number
    overview?: StringNullableFilter<"Season"> | string | null
    showId?: StringFilter<"Season"> | string
    images?: StringNullableListFilter<"Season">
    episodes?: EpisodeListRelationFilter
    show?: XOR<ShowRelationFilter, ShowWhereInput>
  }

  export type SeasonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    season_number?: SortOrder
    overview?: SortOrderInput | SortOrder
    showId?: SortOrder
    images?: SortOrder
    episodes?: EpisodeOrderByRelationAggregateInput
    show?: ShowOrderByWithRelationInput
  }

  export type SeasonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    showId_season_number?: SeasonShowIdSeason_numberCompoundUniqueInput
    AND?: SeasonWhereInput | SeasonWhereInput[]
    OR?: SeasonWhereInput[]
    NOT?: SeasonWhereInput | SeasonWhereInput[]
    name?: StringFilter<"Season"> | string
    season_number?: IntFilter<"Season"> | number
    overview?: StringNullableFilter<"Season"> | string | null
    showId?: StringFilter<"Season"> | string
    images?: StringNullableListFilter<"Season">
    episodes?: EpisodeListRelationFilter
    show?: XOR<ShowRelationFilter, ShowWhereInput>
  }, "id" | "id" | "showId_season_number">

  export type SeasonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    season_number?: SortOrder
    overview?: SortOrderInput | SortOrder
    showId?: SortOrder
    images?: SortOrder
    _count?: SeasonCountOrderByAggregateInput
    _avg?: SeasonAvgOrderByAggregateInput
    _max?: SeasonMaxOrderByAggregateInput
    _min?: SeasonMinOrderByAggregateInput
    _sum?: SeasonSumOrderByAggregateInput
  }

  export type SeasonScalarWhereWithAggregatesInput = {
    AND?: SeasonScalarWhereWithAggregatesInput | SeasonScalarWhereWithAggregatesInput[]
    OR?: SeasonScalarWhereWithAggregatesInput[]
    NOT?: SeasonScalarWhereWithAggregatesInput | SeasonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Season"> | string
    name?: StringWithAggregatesFilter<"Season"> | string
    season_number?: IntWithAggregatesFilter<"Season"> | number
    overview?: StringNullableWithAggregatesFilter<"Season"> | string | null
    showId?: StringWithAggregatesFilter<"Season"> | string
    images?: StringNullableListFilter<"Season">
  }

  export type ShowWhereInput = {
    AND?: ShowWhereInput | ShowWhereInput[]
    OR?: ShowWhereInput[]
    NOT?: ShowWhereInput | ShowWhereInput[]
    id?: StringFilter<"Show"> | string
    tvmazeId?: IntFilter<"Show"> | number
    name?: StringFilter<"Show"> | string
    path?: StringFilter<"Show"> | string
    overview?: StringNullableFilter<"Show"> | string | null
    images?: StringNullableListFilter<"Show">
    libraryId?: StringFilter<"Show"> | string
    seasons?: SeasonListRelationFilter
    library?: XOR<LibraryRelationFilter, LibraryWhereInput>
  }

  export type ShowOrderByWithRelationInput = {
    id?: SortOrder
    tvmazeId?: SortOrder
    name?: SortOrder
    path?: SortOrder
    overview?: SortOrderInput | SortOrder
    images?: SortOrder
    libraryId?: SortOrder
    seasons?: SeasonOrderByRelationAggregateInput
    library?: LibraryOrderByWithRelationInput
  }

  export type ShowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tvmazeId?: number
    AND?: ShowWhereInput | ShowWhereInput[]
    OR?: ShowWhereInput[]
    NOT?: ShowWhereInput | ShowWhereInput[]
    name?: StringFilter<"Show"> | string
    path?: StringFilter<"Show"> | string
    overview?: StringNullableFilter<"Show"> | string | null
    images?: StringNullableListFilter<"Show">
    libraryId?: StringFilter<"Show"> | string
    seasons?: SeasonListRelationFilter
    library?: XOR<LibraryRelationFilter, LibraryWhereInput>
  }, "id" | "id" | "tvmazeId">

  export type ShowOrderByWithAggregationInput = {
    id?: SortOrder
    tvmazeId?: SortOrder
    name?: SortOrder
    path?: SortOrder
    overview?: SortOrderInput | SortOrder
    images?: SortOrder
    libraryId?: SortOrder
    _count?: ShowCountOrderByAggregateInput
    _avg?: ShowAvgOrderByAggregateInput
    _max?: ShowMaxOrderByAggregateInput
    _min?: ShowMinOrderByAggregateInput
    _sum?: ShowSumOrderByAggregateInput
  }

  export type ShowScalarWhereWithAggregatesInput = {
    AND?: ShowScalarWhereWithAggregatesInput | ShowScalarWhereWithAggregatesInput[]
    OR?: ShowScalarWhereWithAggregatesInput[]
    NOT?: ShowScalarWhereWithAggregatesInput | ShowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Show"> | string
    tvmazeId?: IntWithAggregatesFilter<"Show"> | number
    name?: StringWithAggregatesFilter<"Show"> | string
    path?: StringWithAggregatesFilter<"Show"> | string
    overview?: StringNullableWithAggregatesFilter<"Show"> | string | null
    images?: StringNullableListFilter<"Show">
    libraryId?: StringWithAggregatesFilter<"Show"> | string
  }

  export type MovieWhereInput = {
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    id?: StringFilter<"Movie"> | string
    name?: StringFilter<"Movie"> | string
    overview?: StringNullableFilter<"Movie"> | string | null
    images?: StringNullableListFilter<"Movie">
    tmdbId?: IntFilter<"Movie"> | number
    mediaId?: StringFilter<"Movie"> | string
    libraryId?: StringFilter<"Movie"> | string
    media?: XOR<MediaRelationFilter, MediaWhereInput>
    library?: XOR<LibraryRelationFilter, LibraryWhereInput>
  }

  export type MovieOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    overview?: SortOrderInput | SortOrder
    images?: SortOrder
    tmdbId?: SortOrder
    mediaId?: SortOrder
    libraryId?: SortOrder
    media?: MediaOrderByWithRelationInput
    library?: LibraryOrderByWithRelationInput
  }

  export type MovieWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tmdbId?: number
    mediaId?: string
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    name?: StringFilter<"Movie"> | string
    overview?: StringNullableFilter<"Movie"> | string | null
    images?: StringNullableListFilter<"Movie">
    libraryId?: StringFilter<"Movie"> | string
    media?: XOR<MediaRelationFilter, MediaWhereInput>
    library?: XOR<LibraryRelationFilter, LibraryWhereInput>
  }, "id" | "id" | "tmdbId" | "mediaId">

  export type MovieOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    overview?: SortOrderInput | SortOrder
    images?: SortOrder
    tmdbId?: SortOrder
    mediaId?: SortOrder
    libraryId?: SortOrder
    _count?: MovieCountOrderByAggregateInput
    _avg?: MovieAvgOrderByAggregateInput
    _max?: MovieMaxOrderByAggregateInput
    _min?: MovieMinOrderByAggregateInput
    _sum?: MovieSumOrderByAggregateInput
  }

  export type MovieScalarWhereWithAggregatesInput = {
    AND?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    OR?: MovieScalarWhereWithAggregatesInput[]
    NOT?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Movie"> | string
    name?: StringWithAggregatesFilter<"Movie"> | string
    overview?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    images?: StringNullableListFilter<"Movie">
    tmdbId?: IntWithAggregatesFilter<"Movie"> | number
    mediaId?: StringWithAggregatesFilter<"Movie"> | string
    libraryId?: StringWithAggregatesFilter<"Movie"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isOwner?: BoolFilter<"User"> | boolean
    user?: LibraryAccessListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isOwner?: SortOrder
    user?: LibraryAccessOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    isOwner?: BoolFilter<"User"> | boolean
    user?: LibraryAccessListRelationFilter
  }, "id" | "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isOwner?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isOwner?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type ServerWhereInput = {
    AND?: ServerWhereInput | ServerWhereInput[]
    OR?: ServerWhereInput[]
    NOT?: ServerWhereInput | ServerWhereInput[]
    id?: StringFilter<"Server"> | string
    name?: StringFilter<"Server"> | string
  }

  export type ServerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ServerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServerWhereInput | ServerWhereInput[]
    OR?: ServerWhereInput[]
    NOT?: ServerWhereInput | ServerWhereInput[]
    name?: StringFilter<"Server"> | string
  }, "id" | "id">

  export type ServerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ServerCountOrderByAggregateInput
    _max?: ServerMaxOrderByAggregateInput
    _min?: ServerMinOrderByAggregateInput
  }

  export type ServerScalarWhereWithAggregatesInput = {
    AND?: ServerScalarWhereWithAggregatesInput | ServerScalarWhereWithAggregatesInput[]
    OR?: ServerScalarWhereWithAggregatesInput[]
    NOT?: ServerScalarWhereWithAggregatesInput | ServerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Server"> | string
    name?: StringWithAggregatesFilter<"Server"> | string
  }

  export type LibraryAccessWhereInput = {
    AND?: LibraryAccessWhereInput | LibraryAccessWhereInput[]
    OR?: LibraryAccessWhereInput[]
    NOT?: LibraryAccessWhereInput | LibraryAccessWhereInput[]
    id?: StringFilter<"LibraryAccess"> | string
    libraryId?: StringFilter<"LibraryAccess"> | string
    userId?: StringFilter<"LibraryAccess"> | string
    access?: EnumLibraryAccessTypeFilter<"LibraryAccess"> | $Enums.LibraryAccessType
    library?: XOR<LibraryRelationFilter, LibraryWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type LibraryAccessOrderByWithRelationInput = {
    id?: SortOrder
    libraryId?: SortOrder
    userId?: SortOrder
    access?: SortOrder
    library?: LibraryOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type LibraryAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LibraryAccessWhereInput | LibraryAccessWhereInput[]
    OR?: LibraryAccessWhereInput[]
    NOT?: LibraryAccessWhereInput | LibraryAccessWhereInput[]
    libraryId?: StringFilter<"LibraryAccess"> | string
    userId?: StringFilter<"LibraryAccess"> | string
    access?: EnumLibraryAccessTypeFilter<"LibraryAccess"> | $Enums.LibraryAccessType
    library?: XOR<LibraryRelationFilter, LibraryWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "id">

  export type LibraryAccessOrderByWithAggregationInput = {
    id?: SortOrder
    libraryId?: SortOrder
    userId?: SortOrder
    access?: SortOrder
    _count?: LibraryAccessCountOrderByAggregateInput
    _max?: LibraryAccessMaxOrderByAggregateInput
    _min?: LibraryAccessMinOrderByAggregateInput
  }

  export type LibraryAccessScalarWhereWithAggregatesInput = {
    AND?: LibraryAccessScalarWhereWithAggregatesInput | LibraryAccessScalarWhereWithAggregatesInput[]
    OR?: LibraryAccessScalarWhereWithAggregatesInput[]
    NOT?: LibraryAccessScalarWhereWithAggregatesInput | LibraryAccessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LibraryAccess"> | string
    libraryId?: StringWithAggregatesFilter<"LibraryAccess"> | string
    userId?: StringWithAggregatesFilter<"LibraryAccess"> | string
    access?: EnumLibraryAccessTypeWithAggregatesFilter<"LibraryAccess"> | $Enums.LibraryAccessType
  }

  export type LibraryCreateInput = {
    id?: string
    type: $Enums.LibraryType
    name: string
    path: string
    createdAt?: Date | string
    medias?: MediaCreateNestedManyWithoutLibraryInput
    shows?: ShowCreateNestedManyWithoutLibraryInput
    movies?: MovieCreateNestedManyWithoutLibraryInput
    libraryAccess?: LibraryAccessCreateNestedManyWithoutLibraryInput
  }

  export type LibraryUncheckedCreateInput = {
    id?: string
    type: $Enums.LibraryType
    name: string
    path: string
    createdAt?: Date | string
    medias?: MediaUncheckedCreateNestedManyWithoutLibraryInput
    shows?: ShowUncheckedCreateNestedManyWithoutLibraryInput
    movies?: MovieUncheckedCreateNestedManyWithoutLibraryInput
    libraryAccess?: LibraryAccessUncheckedCreateNestedManyWithoutLibraryInput
  }

  export type LibraryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medias?: MediaUpdateManyWithoutLibraryNestedInput
    shows?: ShowUpdateManyWithoutLibraryNestedInput
    movies?: MovieUpdateManyWithoutLibraryNestedInput
    libraryAccess?: LibraryAccessUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medias?: MediaUncheckedUpdateManyWithoutLibraryNestedInput
    shows?: ShowUncheckedUpdateManyWithoutLibraryNestedInput
    movies?: MovieUncheckedUpdateManyWithoutLibraryNestedInput
    libraryAccess?: LibraryAccessUncheckedUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryCreateManyInput = {
    id?: string
    type: $Enums.LibraryType
    name: string
    path: string
    createdAt?: Date | string
  }

  export type LibraryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibraryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamCreateInput = {
    id?: string
    name: string
    streamIndex: number
    type: $Enums.StreamType
    media?: MediaCreateNestedOneWithoutStreamsInput
  }

  export type StreamUncheckedCreateInput = {
    id?: string
    name: string
    streamIndex: number
    type: $Enums.StreamType
    mediaId?: string | null
  }

  export type StreamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    streamIndex?: IntFieldUpdateOperationsInput | number
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
    media?: MediaUpdateOneWithoutStreamsNestedInput
  }

  export type StreamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    streamIndex?: IntFieldUpdateOperationsInput | number
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StreamCreateManyInput = {
    id?: string
    name: string
    streamIndex: number
    type: $Enums.StreamType
    mediaId?: string | null
  }

  export type StreamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    streamIndex?: IntFieldUpdateOperationsInput | number
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
  }

  export type StreamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    streamIndex?: IntFieldUpdateOperationsInput | number
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaCreateInput = {
    id?: string
    path: string
    createdAt?: Date | string
    width: number
    height: number
    bitrate: number
    duration: number
    library: LibraryCreateNestedOneWithoutMediasInput
    streams?: StreamCreateNestedManyWithoutMediaInput
    episode?: EpisodeCreateNestedOneWithoutMediaInput
    movie?: MovieCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id?: string
    path: string
    libraryId: string
    createdAt?: Date | string
    width: number
    height: number
    bitrate: number
    duration: number
    streams?: StreamUncheckedCreateNestedManyWithoutMediaInput
    episode?: EpisodeUncheckedCreateNestedOneWithoutMediaInput
    movie?: MovieUncheckedCreateNestedOneWithoutMediaInput
  }

  export type MediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    bitrate?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    library?: LibraryUpdateOneRequiredWithoutMediasNestedInput
    streams?: StreamUpdateManyWithoutMediaNestedInput
    episode?: EpisodeUpdateOneWithoutMediaNestedInput
    movie?: MovieUpdateOneWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    libraryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    bitrate?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    streams?: StreamUncheckedUpdateManyWithoutMediaNestedInput
    episode?: EpisodeUncheckedUpdateOneWithoutMediaNestedInput
    movie?: MovieUncheckedUpdateOneWithoutMediaNestedInput
  }

  export type MediaCreateManyInput = {
    id?: string
    path: string
    libraryId: string
    createdAt?: Date | string
    width: number
    height: number
    bitrate: number
    duration: number
  }

  export type MediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    bitrate?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    libraryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    bitrate?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
  }

  export type EpisodeCreateInput = {
    id?: string
    overview?: string | null
    name: string
    episode_number: number
    images?: EpisodeCreateimagesInput | string[]
    media: MediaCreateNestedOneWithoutEpisodeInput
    season?: SeasonCreateNestedOneWithoutEpisodesInput
  }

  export type EpisodeUncheckedCreateInput = {
    id?: string
    mediaId: string
    seasonId?: string | null
    overview?: string | null
    name: string
    episode_number: number
    images?: EpisodeCreateimagesInput | string[]
  }

  export type EpisodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    episode_number?: IntFieldUpdateOperationsInput | number
    images?: EpisodeUpdateimagesInput | string[]
    media?: MediaUpdateOneRequiredWithoutEpisodeNestedInput
    season?: SeasonUpdateOneWithoutEpisodesNestedInput
  }

  export type EpisodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
    seasonId?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    episode_number?: IntFieldUpdateOperationsInput | number
    images?: EpisodeUpdateimagesInput | string[]
  }

  export type EpisodeCreateManyInput = {
    id?: string
    mediaId: string
    seasonId?: string | null
    overview?: string | null
    name: string
    episode_number: number
    images?: EpisodeCreateimagesInput | string[]
  }

  export type EpisodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    episode_number?: IntFieldUpdateOperationsInput | number
    images?: EpisodeUpdateimagesInput | string[]
  }

  export type EpisodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
    seasonId?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    episode_number?: IntFieldUpdateOperationsInput | number
    images?: EpisodeUpdateimagesInput | string[]
  }

  export type SeasonCreateInput = {
    id?: string
    name: string
    season_number: number
    overview?: string | null
    images?: SeasonCreateimagesInput | string[]
    episodes?: EpisodeCreateNestedManyWithoutSeasonInput
    show: ShowCreateNestedOneWithoutSeasonsInput
  }

  export type SeasonUncheckedCreateInput = {
    id?: string
    name: string
    season_number: number
    overview?: string | null
    showId: string
    images?: SeasonCreateimagesInput | string[]
    episodes?: EpisodeUncheckedCreateNestedManyWithoutSeasonInput
  }

  export type SeasonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    season_number?: IntFieldUpdateOperationsInput | number
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    images?: SeasonUpdateimagesInput | string[]
    episodes?: EpisodeUpdateManyWithoutSeasonNestedInput
    show?: ShowUpdateOneRequiredWithoutSeasonsNestedInput
  }

  export type SeasonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    season_number?: IntFieldUpdateOperationsInput | number
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    showId?: StringFieldUpdateOperationsInput | string
    images?: SeasonUpdateimagesInput | string[]
    episodes?: EpisodeUncheckedUpdateManyWithoutSeasonNestedInput
  }

  export type SeasonCreateManyInput = {
    id?: string
    name: string
    season_number: number
    overview?: string | null
    showId: string
    images?: SeasonCreateimagesInput | string[]
  }

  export type SeasonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    season_number?: IntFieldUpdateOperationsInput | number
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    images?: SeasonUpdateimagesInput | string[]
  }

  export type SeasonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    season_number?: IntFieldUpdateOperationsInput | number
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    showId?: StringFieldUpdateOperationsInput | string
    images?: SeasonUpdateimagesInput | string[]
  }

  export type ShowCreateInput = {
    id?: string
    tvmazeId: number
    name: string
    path: string
    overview?: string | null
    images?: ShowCreateimagesInput | string[]
    seasons?: SeasonCreateNestedManyWithoutShowInput
    library: LibraryCreateNestedOneWithoutShowsInput
  }

  export type ShowUncheckedCreateInput = {
    id?: string
    tvmazeId: number
    name: string
    path: string
    overview?: string | null
    images?: ShowCreateimagesInput | string[]
    libraryId: string
    seasons?: SeasonUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvmazeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ShowUpdateimagesInput | string[]
    seasons?: SeasonUpdateManyWithoutShowNestedInput
    library?: LibraryUpdateOneRequiredWithoutShowsNestedInput
  }

  export type ShowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvmazeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ShowUpdateimagesInput | string[]
    libraryId?: StringFieldUpdateOperationsInput | string
    seasons?: SeasonUncheckedUpdateManyWithoutShowNestedInput
  }

  export type ShowCreateManyInput = {
    id?: string
    tvmazeId: number
    name: string
    path: string
    overview?: string | null
    images?: ShowCreateimagesInput | string[]
    libraryId: string
  }

  export type ShowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvmazeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ShowUpdateimagesInput | string[]
  }

  export type ShowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvmazeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ShowUpdateimagesInput | string[]
    libraryId?: StringFieldUpdateOperationsInput | string
  }

  export type MovieCreateInput = {
    id?: string
    name: string
    overview?: string | null
    images?: MovieCreateimagesInput | string[]
    tmdbId: number
    media: MediaCreateNestedOneWithoutMovieInput
    library: LibraryCreateNestedOneWithoutMoviesInput
  }

  export type MovieUncheckedCreateInput = {
    id?: string
    name: string
    overview?: string | null
    images?: MovieCreateimagesInput | string[]
    tmdbId: number
    mediaId: string
    libraryId: string
  }

  export type MovieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    images?: MovieUpdateimagesInput | string[]
    tmdbId?: IntFieldUpdateOperationsInput | number
    media?: MediaUpdateOneRequiredWithoutMovieNestedInput
    library?: LibraryUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    images?: MovieUpdateimagesInput | string[]
    tmdbId?: IntFieldUpdateOperationsInput | number
    mediaId?: StringFieldUpdateOperationsInput | string
    libraryId?: StringFieldUpdateOperationsInput | string
  }

  export type MovieCreateManyInput = {
    id?: string
    name: string
    overview?: string | null
    images?: MovieCreateimagesInput | string[]
    tmdbId: number
    mediaId: string
    libraryId: string
  }

  export type MovieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    images?: MovieUpdateimagesInput | string[]
    tmdbId?: IntFieldUpdateOperationsInput | number
  }

  export type MovieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    images?: MovieUpdateimagesInput | string[]
    tmdbId?: IntFieldUpdateOperationsInput | number
    mediaId?: StringFieldUpdateOperationsInput | string
    libraryId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    isOwner: boolean
    user?: LibraryAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    isOwner: boolean
    user?: LibraryAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    user?: LibraryAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    user?: LibraryAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    isOwner: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServerCreateInput = {
    id?: string
    name: string
  }

  export type ServerUncheckedCreateInput = {
    id?: string
    name: string
  }

  export type ServerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ServerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ServerCreateManyInput = {
    id?: string
    name: string
  }

  export type ServerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ServerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LibraryAccessCreateInput = {
    id?: string
    access: $Enums.LibraryAccessType
    library: LibraryCreateNestedOneWithoutLibraryAccessInput
    user: UserCreateNestedOneWithoutUserInput
  }

  export type LibraryAccessUncheckedCreateInput = {
    id?: string
    libraryId: string
    userId: string
    access: $Enums.LibraryAccessType
  }

  export type LibraryAccessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    access?: EnumLibraryAccessTypeFieldUpdateOperationsInput | $Enums.LibraryAccessType
    library?: LibraryUpdateOneRequiredWithoutLibraryAccessNestedInput
    user?: UserUpdateOneRequiredWithoutUserNestedInput
  }

  export type LibraryAccessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    libraryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    access?: EnumLibraryAccessTypeFieldUpdateOperationsInput | $Enums.LibraryAccessType
  }

  export type LibraryAccessCreateManyInput = {
    id?: string
    libraryId: string
    userId: string
    access: $Enums.LibraryAccessType
  }

  export type LibraryAccessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    access?: EnumLibraryAccessTypeFieldUpdateOperationsInput | $Enums.LibraryAccessType
  }

  export type LibraryAccessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    libraryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    access?: EnumLibraryAccessTypeFieldUpdateOperationsInput | $Enums.LibraryAccessType
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumLibraryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LibraryType | EnumLibraryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LibraryType[] | ListEnumLibraryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LibraryType[] | ListEnumLibraryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLibraryTypeFilter<$PrismaModel> | $Enums.LibraryType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MediaListRelationFilter = {
    every?: MediaWhereInput
    some?: MediaWhereInput
    none?: MediaWhereInput
  }

  export type ShowListRelationFilter = {
    every?: ShowWhereInput
    some?: ShowWhereInput
    none?: ShowWhereInput
  }

  export type MovieListRelationFilter = {
    every?: MovieWhereInput
    some?: MovieWhereInput
    none?: MovieWhereInput
  }

  export type LibraryAccessListRelationFilter = {
    every?: LibraryAccessWhereInput
    some?: LibraryAccessWhereInput
    none?: LibraryAccessWhereInput
  }

  export type MediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LibraryAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LibraryCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
  }

  export type LibraryMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
  }

  export type LibraryMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumLibraryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LibraryType | EnumLibraryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LibraryType[] | ListEnumLibraryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LibraryType[] | ListEnumLibraryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLibraryTypeWithAggregatesFilter<$PrismaModel> | $Enums.LibraryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLibraryTypeFilter<$PrismaModel>
    _max?: NestedEnumLibraryTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumStreamTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StreamType | EnumStreamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StreamType[] | ListEnumStreamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StreamType[] | ListEnumStreamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStreamTypeFilter<$PrismaModel> | $Enums.StreamType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MediaNullableRelationFilter = {
    is?: MediaWhereInput | null
    isNot?: MediaWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StreamMediaIdStreamIndexCompoundUniqueInput = {
    mediaId: string
    streamIndex: number
  }

  export type StreamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    streamIndex?: SortOrder
    type?: SortOrder
    mediaId?: SortOrder
  }

  export type StreamAvgOrderByAggregateInput = {
    streamIndex?: SortOrder
  }

  export type StreamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    streamIndex?: SortOrder
    type?: SortOrder
    mediaId?: SortOrder
  }

  export type StreamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    streamIndex?: SortOrder
    type?: SortOrder
    mediaId?: SortOrder
  }

  export type StreamSumOrderByAggregateInput = {
    streamIndex?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumStreamTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StreamType | EnumStreamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StreamType[] | ListEnumStreamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StreamType[] | ListEnumStreamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStreamTypeWithAggregatesFilter<$PrismaModel> | $Enums.StreamType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStreamTypeFilter<$PrismaModel>
    _max?: NestedEnumStreamTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type LibraryRelationFilter = {
    is?: LibraryWhereInput
    isNot?: LibraryWhereInput
  }

  export type StreamListRelationFilter = {
    every?: StreamWhereInput
    some?: StreamWhereInput
    none?: StreamWhereInput
  }

  export type EpisodeNullableRelationFilter = {
    is?: EpisodeWhereInput | null
    isNot?: EpisodeWhereInput | null
  }

  export type MovieNullableRelationFilter = {
    is?: MovieWhereInput | null
    isNot?: MovieWhereInput | null
  }

  export type StreamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    libraryId?: SortOrder
    createdAt?: SortOrder
    width?: SortOrder
    height?: SortOrder
    bitrate?: SortOrder
    duration?: SortOrder
  }

  export type MediaAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
    bitrate?: SortOrder
    duration?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    libraryId?: SortOrder
    createdAt?: SortOrder
    width?: SortOrder
    height?: SortOrder
    bitrate?: SortOrder
    duration?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    libraryId?: SortOrder
    createdAt?: SortOrder
    width?: SortOrder
    height?: SortOrder
    bitrate?: SortOrder
    duration?: SortOrder
  }

  export type MediaSumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
    bitrate?: SortOrder
    duration?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MediaRelationFilter = {
    is?: MediaWhereInput
    isNot?: MediaWhereInput
  }

  export type SeasonNullableRelationFilter = {
    is?: SeasonWhereInput | null
    isNot?: SeasonWhereInput | null
  }

  export type EpisodeSeasonIdEpisode_numberCompoundUniqueInput = {
    seasonId: string
    episode_number: number
  }

  export type EpisodeCountOrderByAggregateInput = {
    id?: SortOrder
    mediaId?: SortOrder
    seasonId?: SortOrder
    overview?: SortOrder
    name?: SortOrder
    episode_number?: SortOrder
    images?: SortOrder
  }

  export type EpisodeAvgOrderByAggregateInput = {
    episode_number?: SortOrder
  }

  export type EpisodeMaxOrderByAggregateInput = {
    id?: SortOrder
    mediaId?: SortOrder
    seasonId?: SortOrder
    overview?: SortOrder
    name?: SortOrder
    episode_number?: SortOrder
  }

  export type EpisodeMinOrderByAggregateInput = {
    id?: SortOrder
    mediaId?: SortOrder
    seasonId?: SortOrder
    overview?: SortOrder
    name?: SortOrder
    episode_number?: SortOrder
  }

  export type EpisodeSumOrderByAggregateInput = {
    episode_number?: SortOrder
  }

  export type EpisodeListRelationFilter = {
    every?: EpisodeWhereInput
    some?: EpisodeWhereInput
    none?: EpisodeWhereInput
  }

  export type ShowRelationFilter = {
    is?: ShowWhereInput
    isNot?: ShowWhereInput
  }

  export type EpisodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeasonShowIdSeason_numberCompoundUniqueInput = {
    showId: string
    season_number: number
  }

  export type SeasonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    season_number?: SortOrder
    overview?: SortOrder
    showId?: SortOrder
    images?: SortOrder
  }

  export type SeasonAvgOrderByAggregateInput = {
    season_number?: SortOrder
  }

  export type SeasonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    season_number?: SortOrder
    overview?: SortOrder
    showId?: SortOrder
  }

  export type SeasonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    season_number?: SortOrder
    overview?: SortOrder
    showId?: SortOrder
  }

  export type SeasonSumOrderByAggregateInput = {
    season_number?: SortOrder
  }

  export type SeasonListRelationFilter = {
    every?: SeasonWhereInput
    some?: SeasonWhereInput
    none?: SeasonWhereInput
  }

  export type SeasonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShowCountOrderByAggregateInput = {
    id?: SortOrder
    tvmazeId?: SortOrder
    name?: SortOrder
    path?: SortOrder
    overview?: SortOrder
    images?: SortOrder
    libraryId?: SortOrder
  }

  export type ShowAvgOrderByAggregateInput = {
    tvmazeId?: SortOrder
  }

  export type ShowMaxOrderByAggregateInput = {
    id?: SortOrder
    tvmazeId?: SortOrder
    name?: SortOrder
    path?: SortOrder
    overview?: SortOrder
    libraryId?: SortOrder
  }

  export type ShowMinOrderByAggregateInput = {
    id?: SortOrder
    tvmazeId?: SortOrder
    name?: SortOrder
    path?: SortOrder
    overview?: SortOrder
    libraryId?: SortOrder
  }

  export type ShowSumOrderByAggregateInput = {
    tvmazeId?: SortOrder
  }

  export type MovieCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    overview?: SortOrder
    images?: SortOrder
    tmdbId?: SortOrder
    mediaId?: SortOrder
    libraryId?: SortOrder
  }

  export type MovieAvgOrderByAggregateInput = {
    tmdbId?: SortOrder
  }

  export type MovieMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    overview?: SortOrder
    tmdbId?: SortOrder
    mediaId?: SortOrder
    libraryId?: SortOrder
  }

  export type MovieMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    overview?: SortOrder
    tmdbId?: SortOrder
    mediaId?: SortOrder
    libraryId?: SortOrder
  }

  export type MovieSumOrderByAggregateInput = {
    tmdbId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isOwner?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isOwner?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isOwner?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ServerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ServerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ServerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EnumLibraryAccessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LibraryAccessType | EnumLibraryAccessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LibraryAccessType[] | ListEnumLibraryAccessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LibraryAccessType[] | ListEnumLibraryAccessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLibraryAccessTypeFilter<$PrismaModel> | $Enums.LibraryAccessType
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LibraryAccessCountOrderByAggregateInput = {
    id?: SortOrder
    libraryId?: SortOrder
    userId?: SortOrder
    access?: SortOrder
  }

  export type LibraryAccessMaxOrderByAggregateInput = {
    id?: SortOrder
    libraryId?: SortOrder
    userId?: SortOrder
    access?: SortOrder
  }

  export type LibraryAccessMinOrderByAggregateInput = {
    id?: SortOrder
    libraryId?: SortOrder
    userId?: SortOrder
    access?: SortOrder
  }

  export type EnumLibraryAccessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LibraryAccessType | EnumLibraryAccessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LibraryAccessType[] | ListEnumLibraryAccessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LibraryAccessType[] | ListEnumLibraryAccessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLibraryAccessTypeWithAggregatesFilter<$PrismaModel> | $Enums.LibraryAccessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLibraryAccessTypeFilter<$PrismaModel>
    _max?: NestedEnumLibraryAccessTypeFilter<$PrismaModel>
  }

  export type MediaCreateNestedManyWithoutLibraryInput = {
    create?: XOR<MediaCreateWithoutLibraryInput, MediaUncheckedCreateWithoutLibraryInput> | MediaCreateWithoutLibraryInput[] | MediaUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutLibraryInput | MediaCreateOrConnectWithoutLibraryInput[]
    createMany?: MediaCreateManyLibraryInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type ShowCreateNestedManyWithoutLibraryInput = {
    create?: XOR<ShowCreateWithoutLibraryInput, ShowUncheckedCreateWithoutLibraryInput> | ShowCreateWithoutLibraryInput[] | ShowUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutLibraryInput | ShowCreateOrConnectWithoutLibraryInput[]
    createMany?: ShowCreateManyLibraryInputEnvelope
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
  }

  export type MovieCreateNestedManyWithoutLibraryInput = {
    create?: XOR<MovieCreateWithoutLibraryInput, MovieUncheckedCreateWithoutLibraryInput> | MovieCreateWithoutLibraryInput[] | MovieUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutLibraryInput | MovieCreateOrConnectWithoutLibraryInput[]
    createMany?: MovieCreateManyLibraryInputEnvelope
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type LibraryAccessCreateNestedManyWithoutLibraryInput = {
    create?: XOR<LibraryAccessCreateWithoutLibraryInput, LibraryAccessUncheckedCreateWithoutLibraryInput> | LibraryAccessCreateWithoutLibraryInput[] | LibraryAccessUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: LibraryAccessCreateOrConnectWithoutLibraryInput | LibraryAccessCreateOrConnectWithoutLibraryInput[]
    createMany?: LibraryAccessCreateManyLibraryInputEnvelope
    connect?: LibraryAccessWhereUniqueInput | LibraryAccessWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutLibraryInput = {
    create?: XOR<MediaCreateWithoutLibraryInput, MediaUncheckedCreateWithoutLibraryInput> | MediaCreateWithoutLibraryInput[] | MediaUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutLibraryInput | MediaCreateOrConnectWithoutLibraryInput[]
    createMany?: MediaCreateManyLibraryInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type ShowUncheckedCreateNestedManyWithoutLibraryInput = {
    create?: XOR<ShowCreateWithoutLibraryInput, ShowUncheckedCreateWithoutLibraryInput> | ShowCreateWithoutLibraryInput[] | ShowUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutLibraryInput | ShowCreateOrConnectWithoutLibraryInput[]
    createMany?: ShowCreateManyLibraryInputEnvelope
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
  }

  export type MovieUncheckedCreateNestedManyWithoutLibraryInput = {
    create?: XOR<MovieCreateWithoutLibraryInput, MovieUncheckedCreateWithoutLibraryInput> | MovieCreateWithoutLibraryInput[] | MovieUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutLibraryInput | MovieCreateOrConnectWithoutLibraryInput[]
    createMany?: MovieCreateManyLibraryInputEnvelope
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type LibraryAccessUncheckedCreateNestedManyWithoutLibraryInput = {
    create?: XOR<LibraryAccessCreateWithoutLibraryInput, LibraryAccessUncheckedCreateWithoutLibraryInput> | LibraryAccessCreateWithoutLibraryInput[] | LibraryAccessUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: LibraryAccessCreateOrConnectWithoutLibraryInput | LibraryAccessCreateOrConnectWithoutLibraryInput[]
    createMany?: LibraryAccessCreateManyLibraryInputEnvelope
    connect?: LibraryAccessWhereUniqueInput | LibraryAccessWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumLibraryTypeFieldUpdateOperationsInput = {
    set?: $Enums.LibraryType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MediaUpdateManyWithoutLibraryNestedInput = {
    create?: XOR<MediaCreateWithoutLibraryInput, MediaUncheckedCreateWithoutLibraryInput> | MediaCreateWithoutLibraryInput[] | MediaUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutLibraryInput | MediaCreateOrConnectWithoutLibraryInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutLibraryInput | MediaUpsertWithWhereUniqueWithoutLibraryInput[]
    createMany?: MediaCreateManyLibraryInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutLibraryInput | MediaUpdateWithWhereUniqueWithoutLibraryInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutLibraryInput | MediaUpdateManyWithWhereWithoutLibraryInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type ShowUpdateManyWithoutLibraryNestedInput = {
    create?: XOR<ShowCreateWithoutLibraryInput, ShowUncheckedCreateWithoutLibraryInput> | ShowCreateWithoutLibraryInput[] | ShowUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutLibraryInput | ShowCreateOrConnectWithoutLibraryInput[]
    upsert?: ShowUpsertWithWhereUniqueWithoutLibraryInput | ShowUpsertWithWhereUniqueWithoutLibraryInput[]
    createMany?: ShowCreateManyLibraryInputEnvelope
    set?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    disconnect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    delete?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    update?: ShowUpdateWithWhereUniqueWithoutLibraryInput | ShowUpdateWithWhereUniqueWithoutLibraryInput[]
    updateMany?: ShowUpdateManyWithWhereWithoutLibraryInput | ShowUpdateManyWithWhereWithoutLibraryInput[]
    deleteMany?: ShowScalarWhereInput | ShowScalarWhereInput[]
  }

  export type MovieUpdateManyWithoutLibraryNestedInput = {
    create?: XOR<MovieCreateWithoutLibraryInput, MovieUncheckedCreateWithoutLibraryInput> | MovieCreateWithoutLibraryInput[] | MovieUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutLibraryInput | MovieCreateOrConnectWithoutLibraryInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutLibraryInput | MovieUpsertWithWhereUniqueWithoutLibraryInput[]
    createMany?: MovieCreateManyLibraryInputEnvelope
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutLibraryInput | MovieUpdateWithWhereUniqueWithoutLibraryInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutLibraryInput | MovieUpdateManyWithWhereWithoutLibraryInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type LibraryAccessUpdateManyWithoutLibraryNestedInput = {
    create?: XOR<LibraryAccessCreateWithoutLibraryInput, LibraryAccessUncheckedCreateWithoutLibraryInput> | LibraryAccessCreateWithoutLibraryInput[] | LibraryAccessUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: LibraryAccessCreateOrConnectWithoutLibraryInput | LibraryAccessCreateOrConnectWithoutLibraryInput[]
    upsert?: LibraryAccessUpsertWithWhereUniqueWithoutLibraryInput | LibraryAccessUpsertWithWhereUniqueWithoutLibraryInput[]
    createMany?: LibraryAccessCreateManyLibraryInputEnvelope
    set?: LibraryAccessWhereUniqueInput | LibraryAccessWhereUniqueInput[]
    disconnect?: LibraryAccessWhereUniqueInput | LibraryAccessWhereUniqueInput[]
    delete?: LibraryAccessWhereUniqueInput | LibraryAccessWhereUniqueInput[]
    connect?: LibraryAccessWhereUniqueInput | LibraryAccessWhereUniqueInput[]
    update?: LibraryAccessUpdateWithWhereUniqueWithoutLibraryInput | LibraryAccessUpdateWithWhereUniqueWithoutLibraryInput[]
    updateMany?: LibraryAccessUpdateManyWithWhereWithoutLibraryInput | LibraryAccessUpdateManyWithWhereWithoutLibraryInput[]
    deleteMany?: LibraryAccessScalarWhereInput | LibraryAccessScalarWhereInput[]
  }

  export type MediaUncheckedUpdateManyWithoutLibraryNestedInput = {
    create?: XOR<MediaCreateWithoutLibraryInput, MediaUncheckedCreateWithoutLibraryInput> | MediaCreateWithoutLibraryInput[] | MediaUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutLibraryInput | MediaCreateOrConnectWithoutLibraryInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutLibraryInput | MediaUpsertWithWhereUniqueWithoutLibraryInput[]
    createMany?: MediaCreateManyLibraryInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutLibraryInput | MediaUpdateWithWhereUniqueWithoutLibraryInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutLibraryInput | MediaUpdateManyWithWhereWithoutLibraryInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type ShowUncheckedUpdateManyWithoutLibraryNestedInput = {
    create?: XOR<ShowCreateWithoutLibraryInput, ShowUncheckedCreateWithoutLibraryInput> | ShowCreateWithoutLibraryInput[] | ShowUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutLibraryInput | ShowCreateOrConnectWithoutLibraryInput[]
    upsert?: ShowUpsertWithWhereUniqueWithoutLibraryInput | ShowUpsertWithWhereUniqueWithoutLibraryInput[]
    createMany?: ShowCreateManyLibraryInputEnvelope
    set?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    disconnect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    delete?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    update?: ShowUpdateWithWhereUniqueWithoutLibraryInput | ShowUpdateWithWhereUniqueWithoutLibraryInput[]
    updateMany?: ShowUpdateManyWithWhereWithoutLibraryInput | ShowUpdateManyWithWhereWithoutLibraryInput[]
    deleteMany?: ShowScalarWhereInput | ShowScalarWhereInput[]
  }

  export type MovieUncheckedUpdateManyWithoutLibraryNestedInput = {
    create?: XOR<MovieCreateWithoutLibraryInput, MovieUncheckedCreateWithoutLibraryInput> | MovieCreateWithoutLibraryInput[] | MovieUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutLibraryInput | MovieCreateOrConnectWithoutLibraryInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutLibraryInput | MovieUpsertWithWhereUniqueWithoutLibraryInput[]
    createMany?: MovieCreateManyLibraryInputEnvelope
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutLibraryInput | MovieUpdateWithWhereUniqueWithoutLibraryInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutLibraryInput | MovieUpdateManyWithWhereWithoutLibraryInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type LibraryAccessUncheckedUpdateManyWithoutLibraryNestedInput = {
    create?: XOR<LibraryAccessCreateWithoutLibraryInput, LibraryAccessUncheckedCreateWithoutLibraryInput> | LibraryAccessCreateWithoutLibraryInput[] | LibraryAccessUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: LibraryAccessCreateOrConnectWithoutLibraryInput | LibraryAccessCreateOrConnectWithoutLibraryInput[]
    upsert?: LibraryAccessUpsertWithWhereUniqueWithoutLibraryInput | LibraryAccessUpsertWithWhereUniqueWithoutLibraryInput[]
    createMany?: LibraryAccessCreateManyLibraryInputEnvelope
    set?: LibraryAccessWhereUniqueInput | LibraryAccessWhereUniqueInput[]
    disconnect?: LibraryAccessWhereUniqueInput | LibraryAccessWhereUniqueInput[]
    delete?: LibraryAccessWhereUniqueInput | LibraryAccessWhereUniqueInput[]
    connect?: LibraryAccessWhereUniqueInput | LibraryAccessWhereUniqueInput[]
    update?: LibraryAccessUpdateWithWhereUniqueWithoutLibraryInput | LibraryAccessUpdateWithWhereUniqueWithoutLibraryInput[]
    updateMany?: LibraryAccessUpdateManyWithWhereWithoutLibraryInput | LibraryAccessUpdateManyWithWhereWithoutLibraryInput[]
    deleteMany?: LibraryAccessScalarWhereInput | LibraryAccessScalarWhereInput[]
  }

  export type MediaCreateNestedOneWithoutStreamsInput = {
    create?: XOR<MediaCreateWithoutStreamsInput, MediaUncheckedCreateWithoutStreamsInput>
    connectOrCreate?: MediaCreateOrConnectWithoutStreamsInput
    connect?: MediaWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStreamTypeFieldUpdateOperationsInput = {
    set?: $Enums.StreamType
  }

  export type MediaUpdateOneWithoutStreamsNestedInput = {
    create?: XOR<MediaCreateWithoutStreamsInput, MediaUncheckedCreateWithoutStreamsInput>
    connectOrCreate?: MediaCreateOrConnectWithoutStreamsInput
    upsert?: MediaUpsertWithoutStreamsInput
    disconnect?: MediaWhereInput | boolean
    delete?: MediaWhereInput | boolean
    connect?: MediaWhereUniqueInput
    update?: XOR<XOR<MediaUpdateToOneWithWhereWithoutStreamsInput, MediaUpdateWithoutStreamsInput>, MediaUncheckedUpdateWithoutStreamsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LibraryCreateNestedOneWithoutMediasInput = {
    create?: XOR<LibraryCreateWithoutMediasInput, LibraryUncheckedCreateWithoutMediasInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutMediasInput
    connect?: LibraryWhereUniqueInput
  }

  export type StreamCreateNestedManyWithoutMediaInput = {
    create?: XOR<StreamCreateWithoutMediaInput, StreamUncheckedCreateWithoutMediaInput> | StreamCreateWithoutMediaInput[] | StreamUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: StreamCreateOrConnectWithoutMediaInput | StreamCreateOrConnectWithoutMediaInput[]
    createMany?: StreamCreateManyMediaInputEnvelope
    connect?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
  }

  export type EpisodeCreateNestedOneWithoutMediaInput = {
    create?: XOR<EpisodeCreateWithoutMediaInput, EpisodeUncheckedCreateWithoutMediaInput>
    connectOrCreate?: EpisodeCreateOrConnectWithoutMediaInput
    connect?: EpisodeWhereUniqueInput
  }

  export type MovieCreateNestedOneWithoutMediaInput = {
    create?: XOR<MovieCreateWithoutMediaInput, MovieUncheckedCreateWithoutMediaInput>
    connectOrCreate?: MovieCreateOrConnectWithoutMediaInput
    connect?: MovieWhereUniqueInput
  }

  export type StreamUncheckedCreateNestedManyWithoutMediaInput = {
    create?: XOR<StreamCreateWithoutMediaInput, StreamUncheckedCreateWithoutMediaInput> | StreamCreateWithoutMediaInput[] | StreamUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: StreamCreateOrConnectWithoutMediaInput | StreamCreateOrConnectWithoutMediaInput[]
    createMany?: StreamCreateManyMediaInputEnvelope
    connect?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
  }

  export type EpisodeUncheckedCreateNestedOneWithoutMediaInput = {
    create?: XOR<EpisodeCreateWithoutMediaInput, EpisodeUncheckedCreateWithoutMediaInput>
    connectOrCreate?: EpisodeCreateOrConnectWithoutMediaInput
    connect?: EpisodeWhereUniqueInput
  }

  export type MovieUncheckedCreateNestedOneWithoutMediaInput = {
    create?: XOR<MovieCreateWithoutMediaInput, MovieUncheckedCreateWithoutMediaInput>
    connectOrCreate?: MovieCreateOrConnectWithoutMediaInput
    connect?: MovieWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LibraryUpdateOneRequiredWithoutMediasNestedInput = {
    create?: XOR<LibraryCreateWithoutMediasInput, LibraryUncheckedCreateWithoutMediasInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutMediasInput
    upsert?: LibraryUpsertWithoutMediasInput
    connect?: LibraryWhereUniqueInput
    update?: XOR<XOR<LibraryUpdateToOneWithWhereWithoutMediasInput, LibraryUpdateWithoutMediasInput>, LibraryUncheckedUpdateWithoutMediasInput>
  }

  export type StreamUpdateManyWithoutMediaNestedInput = {
    create?: XOR<StreamCreateWithoutMediaInput, StreamUncheckedCreateWithoutMediaInput> | StreamCreateWithoutMediaInput[] | StreamUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: StreamCreateOrConnectWithoutMediaInput | StreamCreateOrConnectWithoutMediaInput[]
    upsert?: StreamUpsertWithWhereUniqueWithoutMediaInput | StreamUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: StreamCreateManyMediaInputEnvelope
    set?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
    disconnect?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
    delete?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
    connect?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
    update?: StreamUpdateWithWhereUniqueWithoutMediaInput | StreamUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: StreamUpdateManyWithWhereWithoutMediaInput | StreamUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: StreamScalarWhereInput | StreamScalarWhereInput[]
  }

  export type EpisodeUpdateOneWithoutMediaNestedInput = {
    create?: XOR<EpisodeCreateWithoutMediaInput, EpisodeUncheckedCreateWithoutMediaInput>
    connectOrCreate?: EpisodeCreateOrConnectWithoutMediaInput
    upsert?: EpisodeUpsertWithoutMediaInput
    disconnect?: EpisodeWhereInput | boolean
    delete?: EpisodeWhereInput | boolean
    connect?: EpisodeWhereUniqueInput
    update?: XOR<XOR<EpisodeUpdateToOneWithWhereWithoutMediaInput, EpisodeUpdateWithoutMediaInput>, EpisodeUncheckedUpdateWithoutMediaInput>
  }

  export type MovieUpdateOneWithoutMediaNestedInput = {
    create?: XOR<MovieCreateWithoutMediaInput, MovieUncheckedCreateWithoutMediaInput>
    connectOrCreate?: MovieCreateOrConnectWithoutMediaInput
    upsert?: MovieUpsertWithoutMediaInput
    disconnect?: MovieWhereInput | boolean
    delete?: MovieWhereInput | boolean
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutMediaInput, MovieUpdateWithoutMediaInput>, MovieUncheckedUpdateWithoutMediaInput>
  }

  export type StreamUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: XOR<StreamCreateWithoutMediaInput, StreamUncheckedCreateWithoutMediaInput> | StreamCreateWithoutMediaInput[] | StreamUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: StreamCreateOrConnectWithoutMediaInput | StreamCreateOrConnectWithoutMediaInput[]
    upsert?: StreamUpsertWithWhereUniqueWithoutMediaInput | StreamUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: StreamCreateManyMediaInputEnvelope
    set?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
    disconnect?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
    delete?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
    connect?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
    update?: StreamUpdateWithWhereUniqueWithoutMediaInput | StreamUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: StreamUpdateManyWithWhereWithoutMediaInput | StreamUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: StreamScalarWhereInput | StreamScalarWhereInput[]
  }

  export type EpisodeUncheckedUpdateOneWithoutMediaNestedInput = {
    create?: XOR<EpisodeCreateWithoutMediaInput, EpisodeUncheckedCreateWithoutMediaInput>
    connectOrCreate?: EpisodeCreateOrConnectWithoutMediaInput
    upsert?: EpisodeUpsertWithoutMediaInput
    disconnect?: EpisodeWhereInput | boolean
    delete?: EpisodeWhereInput | boolean
    connect?: EpisodeWhereUniqueInput
    update?: XOR<XOR<EpisodeUpdateToOneWithWhereWithoutMediaInput, EpisodeUpdateWithoutMediaInput>, EpisodeUncheckedUpdateWithoutMediaInput>
  }

  export type MovieUncheckedUpdateOneWithoutMediaNestedInput = {
    create?: XOR<MovieCreateWithoutMediaInput, MovieUncheckedCreateWithoutMediaInput>
    connectOrCreate?: MovieCreateOrConnectWithoutMediaInput
    upsert?: MovieUpsertWithoutMediaInput
    disconnect?: MovieWhereInput | boolean
    delete?: MovieWhereInput | boolean
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutMediaInput, MovieUpdateWithoutMediaInput>, MovieUncheckedUpdateWithoutMediaInput>
  }

  export type EpisodeCreateimagesInput = {
    set: string[]
  }

  export type MediaCreateNestedOneWithoutEpisodeInput = {
    create?: XOR<MediaCreateWithoutEpisodeInput, MediaUncheckedCreateWithoutEpisodeInput>
    connectOrCreate?: MediaCreateOrConnectWithoutEpisodeInput
    connect?: MediaWhereUniqueInput
  }

  export type SeasonCreateNestedOneWithoutEpisodesInput = {
    create?: XOR<SeasonCreateWithoutEpisodesInput, SeasonUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutEpisodesInput
    connect?: SeasonWhereUniqueInput
  }

  export type EpisodeUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MediaUpdateOneRequiredWithoutEpisodeNestedInput = {
    create?: XOR<MediaCreateWithoutEpisodeInput, MediaUncheckedCreateWithoutEpisodeInput>
    connectOrCreate?: MediaCreateOrConnectWithoutEpisodeInput
    upsert?: MediaUpsertWithoutEpisodeInput
    connect?: MediaWhereUniqueInput
    update?: XOR<XOR<MediaUpdateToOneWithWhereWithoutEpisodeInput, MediaUpdateWithoutEpisodeInput>, MediaUncheckedUpdateWithoutEpisodeInput>
  }

  export type SeasonUpdateOneWithoutEpisodesNestedInput = {
    create?: XOR<SeasonCreateWithoutEpisodesInput, SeasonUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutEpisodesInput
    upsert?: SeasonUpsertWithoutEpisodesInput
    disconnect?: SeasonWhereInput | boolean
    delete?: SeasonWhereInput | boolean
    connect?: SeasonWhereUniqueInput
    update?: XOR<XOR<SeasonUpdateToOneWithWhereWithoutEpisodesInput, SeasonUpdateWithoutEpisodesInput>, SeasonUncheckedUpdateWithoutEpisodesInput>
  }

  export type SeasonCreateimagesInput = {
    set: string[]
  }

  export type EpisodeCreateNestedManyWithoutSeasonInput = {
    create?: XOR<EpisodeCreateWithoutSeasonInput, EpisodeUncheckedCreateWithoutSeasonInput> | EpisodeCreateWithoutSeasonInput[] | EpisodeUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeasonInput | EpisodeCreateOrConnectWithoutSeasonInput[]
    createMany?: EpisodeCreateManySeasonInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type ShowCreateNestedOneWithoutSeasonsInput = {
    create?: XOR<ShowCreateWithoutSeasonsInput, ShowUncheckedCreateWithoutSeasonsInput>
    connectOrCreate?: ShowCreateOrConnectWithoutSeasonsInput
    connect?: ShowWhereUniqueInput
  }

  export type EpisodeUncheckedCreateNestedManyWithoutSeasonInput = {
    create?: XOR<EpisodeCreateWithoutSeasonInput, EpisodeUncheckedCreateWithoutSeasonInput> | EpisodeCreateWithoutSeasonInput[] | EpisodeUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeasonInput | EpisodeCreateOrConnectWithoutSeasonInput[]
    createMany?: EpisodeCreateManySeasonInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type SeasonUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EpisodeUpdateManyWithoutSeasonNestedInput = {
    create?: XOR<EpisodeCreateWithoutSeasonInput, EpisodeUncheckedCreateWithoutSeasonInput> | EpisodeCreateWithoutSeasonInput[] | EpisodeUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeasonInput | EpisodeCreateOrConnectWithoutSeasonInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutSeasonInput | EpisodeUpsertWithWhereUniqueWithoutSeasonInput[]
    createMany?: EpisodeCreateManySeasonInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutSeasonInput | EpisodeUpdateWithWhereUniqueWithoutSeasonInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutSeasonInput | EpisodeUpdateManyWithWhereWithoutSeasonInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type ShowUpdateOneRequiredWithoutSeasonsNestedInput = {
    create?: XOR<ShowCreateWithoutSeasonsInput, ShowUncheckedCreateWithoutSeasonsInput>
    connectOrCreate?: ShowCreateOrConnectWithoutSeasonsInput
    upsert?: ShowUpsertWithoutSeasonsInput
    connect?: ShowWhereUniqueInput
    update?: XOR<XOR<ShowUpdateToOneWithWhereWithoutSeasonsInput, ShowUpdateWithoutSeasonsInput>, ShowUncheckedUpdateWithoutSeasonsInput>
  }

  export type EpisodeUncheckedUpdateManyWithoutSeasonNestedInput = {
    create?: XOR<EpisodeCreateWithoutSeasonInput, EpisodeUncheckedCreateWithoutSeasonInput> | EpisodeCreateWithoutSeasonInput[] | EpisodeUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeasonInput | EpisodeCreateOrConnectWithoutSeasonInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutSeasonInput | EpisodeUpsertWithWhereUniqueWithoutSeasonInput[]
    createMany?: EpisodeCreateManySeasonInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutSeasonInput | EpisodeUpdateWithWhereUniqueWithoutSeasonInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutSeasonInput | EpisodeUpdateManyWithWhereWithoutSeasonInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type ShowCreateimagesInput = {
    set: string[]
  }

  export type SeasonCreateNestedManyWithoutShowInput = {
    create?: XOR<SeasonCreateWithoutShowInput, SeasonUncheckedCreateWithoutShowInput> | SeasonCreateWithoutShowInput[] | SeasonUncheckedCreateWithoutShowInput[]
    connectOrCreate?: SeasonCreateOrConnectWithoutShowInput | SeasonCreateOrConnectWithoutShowInput[]
    createMany?: SeasonCreateManyShowInputEnvelope
    connect?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
  }

  export type LibraryCreateNestedOneWithoutShowsInput = {
    create?: XOR<LibraryCreateWithoutShowsInput, LibraryUncheckedCreateWithoutShowsInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutShowsInput
    connect?: LibraryWhereUniqueInput
  }

  export type SeasonUncheckedCreateNestedManyWithoutShowInput = {
    create?: XOR<SeasonCreateWithoutShowInput, SeasonUncheckedCreateWithoutShowInput> | SeasonCreateWithoutShowInput[] | SeasonUncheckedCreateWithoutShowInput[]
    connectOrCreate?: SeasonCreateOrConnectWithoutShowInput | SeasonCreateOrConnectWithoutShowInput[]
    createMany?: SeasonCreateManyShowInputEnvelope
    connect?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
  }

  export type ShowUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SeasonUpdateManyWithoutShowNestedInput = {
    create?: XOR<SeasonCreateWithoutShowInput, SeasonUncheckedCreateWithoutShowInput> | SeasonCreateWithoutShowInput[] | SeasonUncheckedCreateWithoutShowInput[]
    connectOrCreate?: SeasonCreateOrConnectWithoutShowInput | SeasonCreateOrConnectWithoutShowInput[]
    upsert?: SeasonUpsertWithWhereUniqueWithoutShowInput | SeasonUpsertWithWhereUniqueWithoutShowInput[]
    createMany?: SeasonCreateManyShowInputEnvelope
    set?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
    disconnect?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
    delete?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
    connect?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
    update?: SeasonUpdateWithWhereUniqueWithoutShowInput | SeasonUpdateWithWhereUniqueWithoutShowInput[]
    updateMany?: SeasonUpdateManyWithWhereWithoutShowInput | SeasonUpdateManyWithWhereWithoutShowInput[]
    deleteMany?: SeasonScalarWhereInput | SeasonScalarWhereInput[]
  }

  export type LibraryUpdateOneRequiredWithoutShowsNestedInput = {
    create?: XOR<LibraryCreateWithoutShowsInput, LibraryUncheckedCreateWithoutShowsInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutShowsInput
    upsert?: LibraryUpsertWithoutShowsInput
    connect?: LibraryWhereUniqueInput
    update?: XOR<XOR<LibraryUpdateToOneWithWhereWithoutShowsInput, LibraryUpdateWithoutShowsInput>, LibraryUncheckedUpdateWithoutShowsInput>
  }

  export type SeasonUncheckedUpdateManyWithoutShowNestedInput = {
    create?: XOR<SeasonCreateWithoutShowInput, SeasonUncheckedCreateWithoutShowInput> | SeasonCreateWithoutShowInput[] | SeasonUncheckedCreateWithoutShowInput[]
    connectOrCreate?: SeasonCreateOrConnectWithoutShowInput | SeasonCreateOrConnectWithoutShowInput[]
    upsert?: SeasonUpsertWithWhereUniqueWithoutShowInput | SeasonUpsertWithWhereUniqueWithoutShowInput[]
    createMany?: SeasonCreateManyShowInputEnvelope
    set?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
    disconnect?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
    delete?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
    connect?: SeasonWhereUniqueInput | SeasonWhereUniqueInput[]
    update?: SeasonUpdateWithWhereUniqueWithoutShowInput | SeasonUpdateWithWhereUniqueWithoutShowInput[]
    updateMany?: SeasonUpdateManyWithWhereWithoutShowInput | SeasonUpdateManyWithWhereWithoutShowInput[]
    deleteMany?: SeasonScalarWhereInput | SeasonScalarWhereInput[]
  }

  export type MovieCreateimagesInput = {
    set: string[]
  }

  export type MediaCreateNestedOneWithoutMovieInput = {
    create?: XOR<MediaCreateWithoutMovieInput, MediaUncheckedCreateWithoutMovieInput>
    connectOrCreate?: MediaCreateOrConnectWithoutMovieInput
    connect?: MediaWhereUniqueInput
  }

  export type LibraryCreateNestedOneWithoutMoviesInput = {
    create?: XOR<LibraryCreateWithoutMoviesInput, LibraryUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutMoviesInput
    connect?: LibraryWhereUniqueInput
  }

  export type MovieUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MediaUpdateOneRequiredWithoutMovieNestedInput = {
    create?: XOR<MediaCreateWithoutMovieInput, MediaUncheckedCreateWithoutMovieInput>
    connectOrCreate?: MediaCreateOrConnectWithoutMovieInput
    upsert?: MediaUpsertWithoutMovieInput
    connect?: MediaWhereUniqueInput
    update?: XOR<XOR<MediaUpdateToOneWithWhereWithoutMovieInput, MediaUpdateWithoutMovieInput>, MediaUncheckedUpdateWithoutMovieInput>
  }

  export type LibraryUpdateOneRequiredWithoutMoviesNestedInput = {
    create?: XOR<LibraryCreateWithoutMoviesInput, LibraryUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutMoviesInput
    upsert?: LibraryUpsertWithoutMoviesInput
    connect?: LibraryWhereUniqueInput
    update?: XOR<XOR<LibraryUpdateToOneWithWhereWithoutMoviesInput, LibraryUpdateWithoutMoviesInput>, LibraryUncheckedUpdateWithoutMoviesInput>
  }

  export type LibraryAccessCreateNestedManyWithoutUserInput = {
    create?: XOR<LibraryAccessCreateWithoutUserInput, LibraryAccessUncheckedCreateWithoutUserInput> | LibraryAccessCreateWithoutUserInput[] | LibraryAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LibraryAccessCreateOrConnectWithoutUserInput | LibraryAccessCreateOrConnectWithoutUserInput[]
    createMany?: LibraryAccessCreateManyUserInputEnvelope
    connect?: LibraryAccessWhereUniqueInput | LibraryAccessWhereUniqueInput[]
  }

  export type LibraryAccessUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LibraryAccessCreateWithoutUserInput, LibraryAccessUncheckedCreateWithoutUserInput> | LibraryAccessCreateWithoutUserInput[] | LibraryAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LibraryAccessCreateOrConnectWithoutUserInput | LibraryAccessCreateOrConnectWithoutUserInput[]
    createMany?: LibraryAccessCreateManyUserInputEnvelope
    connect?: LibraryAccessWhereUniqueInput | LibraryAccessWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type LibraryAccessUpdateManyWithoutUserNestedInput = {
    create?: XOR<LibraryAccessCreateWithoutUserInput, LibraryAccessUncheckedCreateWithoutUserInput> | LibraryAccessCreateWithoutUserInput[] | LibraryAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LibraryAccessCreateOrConnectWithoutUserInput | LibraryAccessCreateOrConnectWithoutUserInput[]
    upsert?: LibraryAccessUpsertWithWhereUniqueWithoutUserInput | LibraryAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LibraryAccessCreateManyUserInputEnvelope
    set?: LibraryAccessWhereUniqueInput | LibraryAccessWhereUniqueInput[]
    disconnect?: LibraryAccessWhereUniqueInput | LibraryAccessWhereUniqueInput[]
    delete?: LibraryAccessWhereUniqueInput | LibraryAccessWhereUniqueInput[]
    connect?: LibraryAccessWhereUniqueInput | LibraryAccessWhereUniqueInput[]
    update?: LibraryAccessUpdateWithWhereUniqueWithoutUserInput | LibraryAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LibraryAccessUpdateManyWithWhereWithoutUserInput | LibraryAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LibraryAccessScalarWhereInput | LibraryAccessScalarWhereInput[]
  }

  export type LibraryAccessUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LibraryAccessCreateWithoutUserInput, LibraryAccessUncheckedCreateWithoutUserInput> | LibraryAccessCreateWithoutUserInput[] | LibraryAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LibraryAccessCreateOrConnectWithoutUserInput | LibraryAccessCreateOrConnectWithoutUserInput[]
    upsert?: LibraryAccessUpsertWithWhereUniqueWithoutUserInput | LibraryAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LibraryAccessCreateManyUserInputEnvelope
    set?: LibraryAccessWhereUniqueInput | LibraryAccessWhereUniqueInput[]
    disconnect?: LibraryAccessWhereUniqueInput | LibraryAccessWhereUniqueInput[]
    delete?: LibraryAccessWhereUniqueInput | LibraryAccessWhereUniqueInput[]
    connect?: LibraryAccessWhereUniqueInput | LibraryAccessWhereUniqueInput[]
    update?: LibraryAccessUpdateWithWhereUniqueWithoutUserInput | LibraryAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LibraryAccessUpdateManyWithWhereWithoutUserInput | LibraryAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LibraryAccessScalarWhereInput | LibraryAccessScalarWhereInput[]
  }

  export type LibraryCreateNestedOneWithoutLibraryAccessInput = {
    create?: XOR<LibraryCreateWithoutLibraryAccessInput, LibraryUncheckedCreateWithoutLibraryAccessInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutLibraryAccessInput
    connect?: LibraryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserInput = {
    create?: XOR<UserCreateWithoutUserInput, UserUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserInput
    connect?: UserWhereUniqueInput
  }

  export type EnumLibraryAccessTypeFieldUpdateOperationsInput = {
    set?: $Enums.LibraryAccessType
  }

  export type LibraryUpdateOneRequiredWithoutLibraryAccessNestedInput = {
    create?: XOR<LibraryCreateWithoutLibraryAccessInput, LibraryUncheckedCreateWithoutLibraryAccessInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutLibraryAccessInput
    upsert?: LibraryUpsertWithoutLibraryAccessInput
    connect?: LibraryWhereUniqueInput
    update?: XOR<XOR<LibraryUpdateToOneWithWhereWithoutLibraryAccessInput, LibraryUpdateWithoutLibraryAccessInput>, LibraryUncheckedUpdateWithoutLibraryAccessInput>
  }

  export type UserUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<UserCreateWithoutUserInput, UserUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserInput
    upsert?: UserUpsertWithoutUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserInput, UserUpdateWithoutUserInput>, UserUncheckedUpdateWithoutUserInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumLibraryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LibraryType | EnumLibraryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LibraryType[] | ListEnumLibraryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LibraryType[] | ListEnumLibraryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLibraryTypeFilter<$PrismaModel> | $Enums.LibraryType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumLibraryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LibraryType | EnumLibraryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LibraryType[] | ListEnumLibraryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LibraryType[] | ListEnumLibraryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLibraryTypeWithAggregatesFilter<$PrismaModel> | $Enums.LibraryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLibraryTypeFilter<$PrismaModel>
    _max?: NestedEnumLibraryTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStreamTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StreamType | EnumStreamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StreamType[] | ListEnumStreamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StreamType[] | ListEnumStreamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStreamTypeFilter<$PrismaModel> | $Enums.StreamType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumStreamTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StreamType | EnumStreamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StreamType[] | ListEnumStreamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StreamType[] | ListEnumStreamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStreamTypeWithAggregatesFilter<$PrismaModel> | $Enums.StreamType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStreamTypeFilter<$PrismaModel>
    _max?: NestedEnumStreamTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumLibraryAccessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LibraryAccessType | EnumLibraryAccessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LibraryAccessType[] | ListEnumLibraryAccessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LibraryAccessType[] | ListEnumLibraryAccessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLibraryAccessTypeFilter<$PrismaModel> | $Enums.LibraryAccessType
  }

  export type NestedEnumLibraryAccessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LibraryAccessType | EnumLibraryAccessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LibraryAccessType[] | ListEnumLibraryAccessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LibraryAccessType[] | ListEnumLibraryAccessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLibraryAccessTypeWithAggregatesFilter<$PrismaModel> | $Enums.LibraryAccessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLibraryAccessTypeFilter<$PrismaModel>
    _max?: NestedEnumLibraryAccessTypeFilter<$PrismaModel>
  }

  export type MediaCreateWithoutLibraryInput = {
    id?: string
    path: string
    createdAt?: Date | string
    width: number
    height: number
    bitrate: number
    duration: number
    streams?: StreamCreateNestedManyWithoutMediaInput
    episode?: EpisodeCreateNestedOneWithoutMediaInput
    movie?: MovieCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutLibraryInput = {
    id?: string
    path: string
    createdAt?: Date | string
    width: number
    height: number
    bitrate: number
    duration: number
    streams?: StreamUncheckedCreateNestedManyWithoutMediaInput
    episode?: EpisodeUncheckedCreateNestedOneWithoutMediaInput
    movie?: MovieUncheckedCreateNestedOneWithoutMediaInput
  }

  export type MediaCreateOrConnectWithoutLibraryInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutLibraryInput, MediaUncheckedCreateWithoutLibraryInput>
  }

  export type MediaCreateManyLibraryInputEnvelope = {
    data: MediaCreateManyLibraryInput | MediaCreateManyLibraryInput[]
    skipDuplicates?: boolean
  }

  export type ShowCreateWithoutLibraryInput = {
    id?: string
    tvmazeId: number
    name: string
    path: string
    overview?: string | null
    images?: ShowCreateimagesInput | string[]
    seasons?: SeasonCreateNestedManyWithoutShowInput
  }

  export type ShowUncheckedCreateWithoutLibraryInput = {
    id?: string
    tvmazeId: number
    name: string
    path: string
    overview?: string | null
    images?: ShowCreateimagesInput | string[]
    seasons?: SeasonUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowCreateOrConnectWithoutLibraryInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutLibraryInput, ShowUncheckedCreateWithoutLibraryInput>
  }

  export type ShowCreateManyLibraryInputEnvelope = {
    data: ShowCreateManyLibraryInput | ShowCreateManyLibraryInput[]
    skipDuplicates?: boolean
  }

  export type MovieCreateWithoutLibraryInput = {
    id?: string
    name: string
    overview?: string | null
    images?: MovieCreateimagesInput | string[]
    tmdbId: number
    media: MediaCreateNestedOneWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutLibraryInput = {
    id?: string
    name: string
    overview?: string | null
    images?: MovieCreateimagesInput | string[]
    tmdbId: number
    mediaId: string
  }

  export type MovieCreateOrConnectWithoutLibraryInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutLibraryInput, MovieUncheckedCreateWithoutLibraryInput>
  }

  export type MovieCreateManyLibraryInputEnvelope = {
    data: MovieCreateManyLibraryInput | MovieCreateManyLibraryInput[]
    skipDuplicates?: boolean
  }

  export type LibraryAccessCreateWithoutLibraryInput = {
    id?: string
    access: $Enums.LibraryAccessType
    user: UserCreateNestedOneWithoutUserInput
  }

  export type LibraryAccessUncheckedCreateWithoutLibraryInput = {
    id?: string
    userId: string
    access: $Enums.LibraryAccessType
  }

  export type LibraryAccessCreateOrConnectWithoutLibraryInput = {
    where: LibraryAccessWhereUniqueInput
    create: XOR<LibraryAccessCreateWithoutLibraryInput, LibraryAccessUncheckedCreateWithoutLibraryInput>
  }

  export type LibraryAccessCreateManyLibraryInputEnvelope = {
    data: LibraryAccessCreateManyLibraryInput | LibraryAccessCreateManyLibraryInput[]
    skipDuplicates?: boolean
  }

  export type MediaUpsertWithWhereUniqueWithoutLibraryInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutLibraryInput, MediaUncheckedUpdateWithoutLibraryInput>
    create: XOR<MediaCreateWithoutLibraryInput, MediaUncheckedCreateWithoutLibraryInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutLibraryInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutLibraryInput, MediaUncheckedUpdateWithoutLibraryInput>
  }

  export type MediaUpdateManyWithWhereWithoutLibraryInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutLibraryInput>
  }

  export type MediaScalarWhereInput = {
    AND?: MediaScalarWhereInput | MediaScalarWhereInput[]
    OR?: MediaScalarWhereInput[]
    NOT?: MediaScalarWhereInput | MediaScalarWhereInput[]
    id?: StringFilter<"Media"> | string
    path?: StringFilter<"Media"> | string
    libraryId?: StringFilter<"Media"> | string
    createdAt?: DateTimeFilter<"Media"> | Date | string
    width?: IntFilter<"Media"> | number
    height?: IntFilter<"Media"> | number
    bitrate?: IntFilter<"Media"> | number
    duration?: FloatFilter<"Media"> | number
  }

  export type ShowUpsertWithWhereUniqueWithoutLibraryInput = {
    where: ShowWhereUniqueInput
    update: XOR<ShowUpdateWithoutLibraryInput, ShowUncheckedUpdateWithoutLibraryInput>
    create: XOR<ShowCreateWithoutLibraryInput, ShowUncheckedCreateWithoutLibraryInput>
  }

  export type ShowUpdateWithWhereUniqueWithoutLibraryInput = {
    where: ShowWhereUniqueInput
    data: XOR<ShowUpdateWithoutLibraryInput, ShowUncheckedUpdateWithoutLibraryInput>
  }

  export type ShowUpdateManyWithWhereWithoutLibraryInput = {
    where: ShowScalarWhereInput
    data: XOR<ShowUpdateManyMutationInput, ShowUncheckedUpdateManyWithoutLibraryInput>
  }

  export type ShowScalarWhereInput = {
    AND?: ShowScalarWhereInput | ShowScalarWhereInput[]
    OR?: ShowScalarWhereInput[]
    NOT?: ShowScalarWhereInput | ShowScalarWhereInput[]
    id?: StringFilter<"Show"> | string
    tvmazeId?: IntFilter<"Show"> | number
    name?: StringFilter<"Show"> | string
    path?: StringFilter<"Show"> | string
    overview?: StringNullableFilter<"Show"> | string | null
    images?: StringNullableListFilter<"Show">
    libraryId?: StringFilter<"Show"> | string
  }

  export type MovieUpsertWithWhereUniqueWithoutLibraryInput = {
    where: MovieWhereUniqueInput
    update: XOR<MovieUpdateWithoutLibraryInput, MovieUncheckedUpdateWithoutLibraryInput>
    create: XOR<MovieCreateWithoutLibraryInput, MovieUncheckedCreateWithoutLibraryInput>
  }

  export type MovieUpdateWithWhereUniqueWithoutLibraryInput = {
    where: MovieWhereUniqueInput
    data: XOR<MovieUpdateWithoutLibraryInput, MovieUncheckedUpdateWithoutLibraryInput>
  }

  export type MovieUpdateManyWithWhereWithoutLibraryInput = {
    where: MovieScalarWhereInput
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyWithoutLibraryInput>
  }

  export type MovieScalarWhereInput = {
    AND?: MovieScalarWhereInput | MovieScalarWhereInput[]
    OR?: MovieScalarWhereInput[]
    NOT?: MovieScalarWhereInput | MovieScalarWhereInput[]
    id?: StringFilter<"Movie"> | string
    name?: StringFilter<"Movie"> | string
    overview?: StringNullableFilter<"Movie"> | string | null
    images?: StringNullableListFilter<"Movie">
    tmdbId?: IntFilter<"Movie"> | number
    mediaId?: StringFilter<"Movie"> | string
    libraryId?: StringFilter<"Movie"> | string
  }

  export type LibraryAccessUpsertWithWhereUniqueWithoutLibraryInput = {
    where: LibraryAccessWhereUniqueInput
    update: XOR<LibraryAccessUpdateWithoutLibraryInput, LibraryAccessUncheckedUpdateWithoutLibraryInput>
    create: XOR<LibraryAccessCreateWithoutLibraryInput, LibraryAccessUncheckedCreateWithoutLibraryInput>
  }

  export type LibraryAccessUpdateWithWhereUniqueWithoutLibraryInput = {
    where: LibraryAccessWhereUniqueInput
    data: XOR<LibraryAccessUpdateWithoutLibraryInput, LibraryAccessUncheckedUpdateWithoutLibraryInput>
  }

  export type LibraryAccessUpdateManyWithWhereWithoutLibraryInput = {
    where: LibraryAccessScalarWhereInput
    data: XOR<LibraryAccessUpdateManyMutationInput, LibraryAccessUncheckedUpdateManyWithoutLibraryInput>
  }

  export type LibraryAccessScalarWhereInput = {
    AND?: LibraryAccessScalarWhereInput | LibraryAccessScalarWhereInput[]
    OR?: LibraryAccessScalarWhereInput[]
    NOT?: LibraryAccessScalarWhereInput | LibraryAccessScalarWhereInput[]
    id?: StringFilter<"LibraryAccess"> | string
    libraryId?: StringFilter<"LibraryAccess"> | string
    userId?: StringFilter<"LibraryAccess"> | string
    access?: EnumLibraryAccessTypeFilter<"LibraryAccess"> | $Enums.LibraryAccessType
  }

  export type MediaCreateWithoutStreamsInput = {
    id?: string
    path: string
    createdAt?: Date | string
    width: number
    height: number
    bitrate: number
    duration: number
    library: LibraryCreateNestedOneWithoutMediasInput
    episode?: EpisodeCreateNestedOneWithoutMediaInput
    movie?: MovieCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutStreamsInput = {
    id?: string
    path: string
    libraryId: string
    createdAt?: Date | string
    width: number
    height: number
    bitrate: number
    duration: number
    episode?: EpisodeUncheckedCreateNestedOneWithoutMediaInput
    movie?: MovieUncheckedCreateNestedOneWithoutMediaInput
  }

  export type MediaCreateOrConnectWithoutStreamsInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutStreamsInput, MediaUncheckedCreateWithoutStreamsInput>
  }

  export type MediaUpsertWithoutStreamsInput = {
    update: XOR<MediaUpdateWithoutStreamsInput, MediaUncheckedUpdateWithoutStreamsInput>
    create: XOR<MediaCreateWithoutStreamsInput, MediaUncheckedCreateWithoutStreamsInput>
    where?: MediaWhereInput
  }

  export type MediaUpdateToOneWithWhereWithoutStreamsInput = {
    where?: MediaWhereInput
    data: XOR<MediaUpdateWithoutStreamsInput, MediaUncheckedUpdateWithoutStreamsInput>
  }

  export type MediaUpdateWithoutStreamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    bitrate?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    library?: LibraryUpdateOneRequiredWithoutMediasNestedInput
    episode?: EpisodeUpdateOneWithoutMediaNestedInput
    movie?: MovieUpdateOneWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutStreamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    libraryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    bitrate?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    episode?: EpisodeUncheckedUpdateOneWithoutMediaNestedInput
    movie?: MovieUncheckedUpdateOneWithoutMediaNestedInput
  }

  export type LibraryCreateWithoutMediasInput = {
    id?: string
    type: $Enums.LibraryType
    name: string
    path: string
    createdAt?: Date | string
    shows?: ShowCreateNestedManyWithoutLibraryInput
    movies?: MovieCreateNestedManyWithoutLibraryInput
    libraryAccess?: LibraryAccessCreateNestedManyWithoutLibraryInput
  }

  export type LibraryUncheckedCreateWithoutMediasInput = {
    id?: string
    type: $Enums.LibraryType
    name: string
    path: string
    createdAt?: Date | string
    shows?: ShowUncheckedCreateNestedManyWithoutLibraryInput
    movies?: MovieUncheckedCreateNestedManyWithoutLibraryInput
    libraryAccess?: LibraryAccessUncheckedCreateNestedManyWithoutLibraryInput
  }

  export type LibraryCreateOrConnectWithoutMediasInput = {
    where: LibraryWhereUniqueInput
    create: XOR<LibraryCreateWithoutMediasInput, LibraryUncheckedCreateWithoutMediasInput>
  }

  export type StreamCreateWithoutMediaInput = {
    id?: string
    name: string
    streamIndex: number
    type: $Enums.StreamType
  }

  export type StreamUncheckedCreateWithoutMediaInput = {
    id?: string
    name: string
    streamIndex: number
    type: $Enums.StreamType
  }

  export type StreamCreateOrConnectWithoutMediaInput = {
    where: StreamWhereUniqueInput
    create: XOR<StreamCreateWithoutMediaInput, StreamUncheckedCreateWithoutMediaInput>
  }

  export type StreamCreateManyMediaInputEnvelope = {
    data: StreamCreateManyMediaInput | StreamCreateManyMediaInput[]
    skipDuplicates?: boolean
  }

  export type EpisodeCreateWithoutMediaInput = {
    id?: string
    overview?: string | null
    name: string
    episode_number: number
    images?: EpisodeCreateimagesInput | string[]
    season?: SeasonCreateNestedOneWithoutEpisodesInput
  }

  export type EpisodeUncheckedCreateWithoutMediaInput = {
    id?: string
    seasonId?: string | null
    overview?: string | null
    name: string
    episode_number: number
    images?: EpisodeCreateimagesInput | string[]
  }

  export type EpisodeCreateOrConnectWithoutMediaInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutMediaInput, EpisodeUncheckedCreateWithoutMediaInput>
  }

  export type MovieCreateWithoutMediaInput = {
    id?: string
    name: string
    overview?: string | null
    images?: MovieCreateimagesInput | string[]
    tmdbId: number
    library: LibraryCreateNestedOneWithoutMoviesInput
  }

  export type MovieUncheckedCreateWithoutMediaInput = {
    id?: string
    name: string
    overview?: string | null
    images?: MovieCreateimagesInput | string[]
    tmdbId: number
    libraryId: string
  }

  export type MovieCreateOrConnectWithoutMediaInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutMediaInput, MovieUncheckedCreateWithoutMediaInput>
  }

  export type LibraryUpsertWithoutMediasInput = {
    update: XOR<LibraryUpdateWithoutMediasInput, LibraryUncheckedUpdateWithoutMediasInput>
    create: XOR<LibraryCreateWithoutMediasInput, LibraryUncheckedCreateWithoutMediasInput>
    where?: LibraryWhereInput
  }

  export type LibraryUpdateToOneWithWhereWithoutMediasInput = {
    where?: LibraryWhereInput
    data: XOR<LibraryUpdateWithoutMediasInput, LibraryUncheckedUpdateWithoutMediasInput>
  }

  export type LibraryUpdateWithoutMediasInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shows?: ShowUpdateManyWithoutLibraryNestedInput
    movies?: MovieUpdateManyWithoutLibraryNestedInput
    libraryAccess?: LibraryAccessUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryUncheckedUpdateWithoutMediasInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shows?: ShowUncheckedUpdateManyWithoutLibraryNestedInput
    movies?: MovieUncheckedUpdateManyWithoutLibraryNestedInput
    libraryAccess?: LibraryAccessUncheckedUpdateManyWithoutLibraryNestedInput
  }

  export type StreamUpsertWithWhereUniqueWithoutMediaInput = {
    where: StreamWhereUniqueInput
    update: XOR<StreamUpdateWithoutMediaInput, StreamUncheckedUpdateWithoutMediaInput>
    create: XOR<StreamCreateWithoutMediaInput, StreamUncheckedCreateWithoutMediaInput>
  }

  export type StreamUpdateWithWhereUniqueWithoutMediaInput = {
    where: StreamWhereUniqueInput
    data: XOR<StreamUpdateWithoutMediaInput, StreamUncheckedUpdateWithoutMediaInput>
  }

  export type StreamUpdateManyWithWhereWithoutMediaInput = {
    where: StreamScalarWhereInput
    data: XOR<StreamUpdateManyMutationInput, StreamUncheckedUpdateManyWithoutMediaInput>
  }

  export type StreamScalarWhereInput = {
    AND?: StreamScalarWhereInput | StreamScalarWhereInput[]
    OR?: StreamScalarWhereInput[]
    NOT?: StreamScalarWhereInput | StreamScalarWhereInput[]
    id?: StringFilter<"Stream"> | string
    name?: StringFilter<"Stream"> | string
    streamIndex?: IntFilter<"Stream"> | number
    type?: EnumStreamTypeFilter<"Stream"> | $Enums.StreamType
    mediaId?: StringNullableFilter<"Stream"> | string | null
  }

  export type EpisodeUpsertWithoutMediaInput = {
    update: XOR<EpisodeUpdateWithoutMediaInput, EpisodeUncheckedUpdateWithoutMediaInput>
    create: XOR<EpisodeCreateWithoutMediaInput, EpisodeUncheckedCreateWithoutMediaInput>
    where?: EpisodeWhereInput
  }

  export type EpisodeUpdateToOneWithWhereWithoutMediaInput = {
    where?: EpisodeWhereInput
    data: XOR<EpisodeUpdateWithoutMediaInput, EpisodeUncheckedUpdateWithoutMediaInput>
  }

  export type EpisodeUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    episode_number?: IntFieldUpdateOperationsInput | number
    images?: EpisodeUpdateimagesInput | string[]
    season?: SeasonUpdateOneWithoutEpisodesNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    seasonId?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    episode_number?: IntFieldUpdateOperationsInput | number
    images?: EpisodeUpdateimagesInput | string[]
  }

  export type MovieUpsertWithoutMediaInput = {
    update: XOR<MovieUpdateWithoutMediaInput, MovieUncheckedUpdateWithoutMediaInput>
    create: XOR<MovieCreateWithoutMediaInput, MovieUncheckedCreateWithoutMediaInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutMediaInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutMediaInput, MovieUncheckedUpdateWithoutMediaInput>
  }

  export type MovieUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    images?: MovieUpdateimagesInput | string[]
    tmdbId?: IntFieldUpdateOperationsInput | number
    library?: LibraryUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    images?: MovieUpdateimagesInput | string[]
    tmdbId?: IntFieldUpdateOperationsInput | number
    libraryId?: StringFieldUpdateOperationsInput | string
  }

  export type MediaCreateWithoutEpisodeInput = {
    id?: string
    path: string
    createdAt?: Date | string
    width: number
    height: number
    bitrate: number
    duration: number
    library: LibraryCreateNestedOneWithoutMediasInput
    streams?: StreamCreateNestedManyWithoutMediaInput
    movie?: MovieCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutEpisodeInput = {
    id?: string
    path: string
    libraryId: string
    createdAt?: Date | string
    width: number
    height: number
    bitrate: number
    duration: number
    streams?: StreamUncheckedCreateNestedManyWithoutMediaInput
    movie?: MovieUncheckedCreateNestedOneWithoutMediaInput
  }

  export type MediaCreateOrConnectWithoutEpisodeInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutEpisodeInput, MediaUncheckedCreateWithoutEpisodeInput>
  }

  export type SeasonCreateWithoutEpisodesInput = {
    id?: string
    name: string
    season_number: number
    overview?: string | null
    images?: SeasonCreateimagesInput | string[]
    show: ShowCreateNestedOneWithoutSeasonsInput
  }

  export type SeasonUncheckedCreateWithoutEpisodesInput = {
    id?: string
    name: string
    season_number: number
    overview?: string | null
    showId: string
    images?: SeasonCreateimagesInput | string[]
  }

  export type SeasonCreateOrConnectWithoutEpisodesInput = {
    where: SeasonWhereUniqueInput
    create: XOR<SeasonCreateWithoutEpisodesInput, SeasonUncheckedCreateWithoutEpisodesInput>
  }

  export type MediaUpsertWithoutEpisodeInput = {
    update: XOR<MediaUpdateWithoutEpisodeInput, MediaUncheckedUpdateWithoutEpisodeInput>
    create: XOR<MediaCreateWithoutEpisodeInput, MediaUncheckedCreateWithoutEpisodeInput>
    where?: MediaWhereInput
  }

  export type MediaUpdateToOneWithWhereWithoutEpisodeInput = {
    where?: MediaWhereInput
    data: XOR<MediaUpdateWithoutEpisodeInput, MediaUncheckedUpdateWithoutEpisodeInput>
  }

  export type MediaUpdateWithoutEpisodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    bitrate?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    library?: LibraryUpdateOneRequiredWithoutMediasNestedInput
    streams?: StreamUpdateManyWithoutMediaNestedInput
    movie?: MovieUpdateOneWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutEpisodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    libraryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    bitrate?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    streams?: StreamUncheckedUpdateManyWithoutMediaNestedInput
    movie?: MovieUncheckedUpdateOneWithoutMediaNestedInput
  }

  export type SeasonUpsertWithoutEpisodesInput = {
    update: XOR<SeasonUpdateWithoutEpisodesInput, SeasonUncheckedUpdateWithoutEpisodesInput>
    create: XOR<SeasonCreateWithoutEpisodesInput, SeasonUncheckedCreateWithoutEpisodesInput>
    where?: SeasonWhereInput
  }

  export type SeasonUpdateToOneWithWhereWithoutEpisodesInput = {
    where?: SeasonWhereInput
    data: XOR<SeasonUpdateWithoutEpisodesInput, SeasonUncheckedUpdateWithoutEpisodesInput>
  }

  export type SeasonUpdateWithoutEpisodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    season_number?: IntFieldUpdateOperationsInput | number
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    images?: SeasonUpdateimagesInput | string[]
    show?: ShowUpdateOneRequiredWithoutSeasonsNestedInput
  }

  export type SeasonUncheckedUpdateWithoutEpisodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    season_number?: IntFieldUpdateOperationsInput | number
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    showId?: StringFieldUpdateOperationsInput | string
    images?: SeasonUpdateimagesInput | string[]
  }

  export type EpisodeCreateWithoutSeasonInput = {
    id?: string
    overview?: string | null
    name: string
    episode_number: number
    images?: EpisodeCreateimagesInput | string[]
    media: MediaCreateNestedOneWithoutEpisodeInput
  }

  export type EpisodeUncheckedCreateWithoutSeasonInput = {
    id?: string
    mediaId: string
    overview?: string | null
    name: string
    episode_number: number
    images?: EpisodeCreateimagesInput | string[]
  }

  export type EpisodeCreateOrConnectWithoutSeasonInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutSeasonInput, EpisodeUncheckedCreateWithoutSeasonInput>
  }

  export type EpisodeCreateManySeasonInputEnvelope = {
    data: EpisodeCreateManySeasonInput | EpisodeCreateManySeasonInput[]
    skipDuplicates?: boolean
  }

  export type ShowCreateWithoutSeasonsInput = {
    id?: string
    tvmazeId: number
    name: string
    path: string
    overview?: string | null
    images?: ShowCreateimagesInput | string[]
    library: LibraryCreateNestedOneWithoutShowsInput
  }

  export type ShowUncheckedCreateWithoutSeasonsInput = {
    id?: string
    tvmazeId: number
    name: string
    path: string
    overview?: string | null
    images?: ShowCreateimagesInput | string[]
    libraryId: string
  }

  export type ShowCreateOrConnectWithoutSeasonsInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutSeasonsInput, ShowUncheckedCreateWithoutSeasonsInput>
  }

  export type EpisodeUpsertWithWhereUniqueWithoutSeasonInput = {
    where: EpisodeWhereUniqueInput
    update: XOR<EpisodeUpdateWithoutSeasonInput, EpisodeUncheckedUpdateWithoutSeasonInput>
    create: XOR<EpisodeCreateWithoutSeasonInput, EpisodeUncheckedCreateWithoutSeasonInput>
  }

  export type EpisodeUpdateWithWhereUniqueWithoutSeasonInput = {
    where: EpisodeWhereUniqueInput
    data: XOR<EpisodeUpdateWithoutSeasonInput, EpisodeUncheckedUpdateWithoutSeasonInput>
  }

  export type EpisodeUpdateManyWithWhereWithoutSeasonInput = {
    where: EpisodeScalarWhereInput
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyWithoutSeasonInput>
  }

  export type EpisodeScalarWhereInput = {
    AND?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    OR?: EpisodeScalarWhereInput[]
    NOT?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    id?: StringFilter<"Episode"> | string
    mediaId?: StringFilter<"Episode"> | string
    seasonId?: StringNullableFilter<"Episode"> | string | null
    overview?: StringNullableFilter<"Episode"> | string | null
    name?: StringFilter<"Episode"> | string
    episode_number?: IntFilter<"Episode"> | number
    images?: StringNullableListFilter<"Episode">
  }

  export type ShowUpsertWithoutSeasonsInput = {
    update: XOR<ShowUpdateWithoutSeasonsInput, ShowUncheckedUpdateWithoutSeasonsInput>
    create: XOR<ShowCreateWithoutSeasonsInput, ShowUncheckedCreateWithoutSeasonsInput>
    where?: ShowWhereInput
  }

  export type ShowUpdateToOneWithWhereWithoutSeasonsInput = {
    where?: ShowWhereInput
    data: XOR<ShowUpdateWithoutSeasonsInput, ShowUncheckedUpdateWithoutSeasonsInput>
  }

  export type ShowUpdateWithoutSeasonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvmazeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ShowUpdateimagesInput | string[]
    library?: LibraryUpdateOneRequiredWithoutShowsNestedInput
  }

  export type ShowUncheckedUpdateWithoutSeasonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvmazeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ShowUpdateimagesInput | string[]
    libraryId?: StringFieldUpdateOperationsInput | string
  }

  export type SeasonCreateWithoutShowInput = {
    id?: string
    name: string
    season_number: number
    overview?: string | null
    images?: SeasonCreateimagesInput | string[]
    episodes?: EpisodeCreateNestedManyWithoutSeasonInput
  }

  export type SeasonUncheckedCreateWithoutShowInput = {
    id?: string
    name: string
    season_number: number
    overview?: string | null
    images?: SeasonCreateimagesInput | string[]
    episodes?: EpisodeUncheckedCreateNestedManyWithoutSeasonInput
  }

  export type SeasonCreateOrConnectWithoutShowInput = {
    where: SeasonWhereUniqueInput
    create: XOR<SeasonCreateWithoutShowInput, SeasonUncheckedCreateWithoutShowInput>
  }

  export type SeasonCreateManyShowInputEnvelope = {
    data: SeasonCreateManyShowInput | SeasonCreateManyShowInput[]
    skipDuplicates?: boolean
  }

  export type LibraryCreateWithoutShowsInput = {
    id?: string
    type: $Enums.LibraryType
    name: string
    path: string
    createdAt?: Date | string
    medias?: MediaCreateNestedManyWithoutLibraryInput
    movies?: MovieCreateNestedManyWithoutLibraryInput
    libraryAccess?: LibraryAccessCreateNestedManyWithoutLibraryInput
  }

  export type LibraryUncheckedCreateWithoutShowsInput = {
    id?: string
    type: $Enums.LibraryType
    name: string
    path: string
    createdAt?: Date | string
    medias?: MediaUncheckedCreateNestedManyWithoutLibraryInput
    movies?: MovieUncheckedCreateNestedManyWithoutLibraryInput
    libraryAccess?: LibraryAccessUncheckedCreateNestedManyWithoutLibraryInput
  }

  export type LibraryCreateOrConnectWithoutShowsInput = {
    where: LibraryWhereUniqueInput
    create: XOR<LibraryCreateWithoutShowsInput, LibraryUncheckedCreateWithoutShowsInput>
  }

  export type SeasonUpsertWithWhereUniqueWithoutShowInput = {
    where: SeasonWhereUniqueInput
    update: XOR<SeasonUpdateWithoutShowInput, SeasonUncheckedUpdateWithoutShowInput>
    create: XOR<SeasonCreateWithoutShowInput, SeasonUncheckedCreateWithoutShowInput>
  }

  export type SeasonUpdateWithWhereUniqueWithoutShowInput = {
    where: SeasonWhereUniqueInput
    data: XOR<SeasonUpdateWithoutShowInput, SeasonUncheckedUpdateWithoutShowInput>
  }

  export type SeasonUpdateManyWithWhereWithoutShowInput = {
    where: SeasonScalarWhereInput
    data: XOR<SeasonUpdateManyMutationInput, SeasonUncheckedUpdateManyWithoutShowInput>
  }

  export type SeasonScalarWhereInput = {
    AND?: SeasonScalarWhereInput | SeasonScalarWhereInput[]
    OR?: SeasonScalarWhereInput[]
    NOT?: SeasonScalarWhereInput | SeasonScalarWhereInput[]
    id?: StringFilter<"Season"> | string
    name?: StringFilter<"Season"> | string
    season_number?: IntFilter<"Season"> | number
    overview?: StringNullableFilter<"Season"> | string | null
    showId?: StringFilter<"Season"> | string
    images?: StringNullableListFilter<"Season">
  }

  export type LibraryUpsertWithoutShowsInput = {
    update: XOR<LibraryUpdateWithoutShowsInput, LibraryUncheckedUpdateWithoutShowsInput>
    create: XOR<LibraryCreateWithoutShowsInput, LibraryUncheckedCreateWithoutShowsInput>
    where?: LibraryWhereInput
  }

  export type LibraryUpdateToOneWithWhereWithoutShowsInput = {
    where?: LibraryWhereInput
    data: XOR<LibraryUpdateWithoutShowsInput, LibraryUncheckedUpdateWithoutShowsInput>
  }

  export type LibraryUpdateWithoutShowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medias?: MediaUpdateManyWithoutLibraryNestedInput
    movies?: MovieUpdateManyWithoutLibraryNestedInput
    libraryAccess?: LibraryAccessUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryUncheckedUpdateWithoutShowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medias?: MediaUncheckedUpdateManyWithoutLibraryNestedInput
    movies?: MovieUncheckedUpdateManyWithoutLibraryNestedInput
    libraryAccess?: LibraryAccessUncheckedUpdateManyWithoutLibraryNestedInput
  }

  export type MediaCreateWithoutMovieInput = {
    id?: string
    path: string
    createdAt?: Date | string
    width: number
    height: number
    bitrate: number
    duration: number
    library: LibraryCreateNestedOneWithoutMediasInput
    streams?: StreamCreateNestedManyWithoutMediaInput
    episode?: EpisodeCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutMovieInput = {
    id?: string
    path: string
    libraryId: string
    createdAt?: Date | string
    width: number
    height: number
    bitrate: number
    duration: number
    streams?: StreamUncheckedCreateNestedManyWithoutMediaInput
    episode?: EpisodeUncheckedCreateNestedOneWithoutMediaInput
  }

  export type MediaCreateOrConnectWithoutMovieInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutMovieInput, MediaUncheckedCreateWithoutMovieInput>
  }

  export type LibraryCreateWithoutMoviesInput = {
    id?: string
    type: $Enums.LibraryType
    name: string
    path: string
    createdAt?: Date | string
    medias?: MediaCreateNestedManyWithoutLibraryInput
    shows?: ShowCreateNestedManyWithoutLibraryInput
    libraryAccess?: LibraryAccessCreateNestedManyWithoutLibraryInput
  }

  export type LibraryUncheckedCreateWithoutMoviesInput = {
    id?: string
    type: $Enums.LibraryType
    name: string
    path: string
    createdAt?: Date | string
    medias?: MediaUncheckedCreateNestedManyWithoutLibraryInput
    shows?: ShowUncheckedCreateNestedManyWithoutLibraryInput
    libraryAccess?: LibraryAccessUncheckedCreateNestedManyWithoutLibraryInput
  }

  export type LibraryCreateOrConnectWithoutMoviesInput = {
    where: LibraryWhereUniqueInput
    create: XOR<LibraryCreateWithoutMoviesInput, LibraryUncheckedCreateWithoutMoviesInput>
  }

  export type MediaUpsertWithoutMovieInput = {
    update: XOR<MediaUpdateWithoutMovieInput, MediaUncheckedUpdateWithoutMovieInput>
    create: XOR<MediaCreateWithoutMovieInput, MediaUncheckedCreateWithoutMovieInput>
    where?: MediaWhereInput
  }

  export type MediaUpdateToOneWithWhereWithoutMovieInput = {
    where?: MediaWhereInput
    data: XOR<MediaUpdateWithoutMovieInput, MediaUncheckedUpdateWithoutMovieInput>
  }

  export type MediaUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    bitrate?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    library?: LibraryUpdateOneRequiredWithoutMediasNestedInput
    streams?: StreamUpdateManyWithoutMediaNestedInput
    episode?: EpisodeUpdateOneWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    libraryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    bitrate?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    streams?: StreamUncheckedUpdateManyWithoutMediaNestedInput
    episode?: EpisodeUncheckedUpdateOneWithoutMediaNestedInput
  }

  export type LibraryUpsertWithoutMoviesInput = {
    update: XOR<LibraryUpdateWithoutMoviesInput, LibraryUncheckedUpdateWithoutMoviesInput>
    create: XOR<LibraryCreateWithoutMoviesInput, LibraryUncheckedCreateWithoutMoviesInput>
    where?: LibraryWhereInput
  }

  export type LibraryUpdateToOneWithWhereWithoutMoviesInput = {
    where?: LibraryWhereInput
    data: XOR<LibraryUpdateWithoutMoviesInput, LibraryUncheckedUpdateWithoutMoviesInput>
  }

  export type LibraryUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medias?: MediaUpdateManyWithoutLibraryNestedInput
    shows?: ShowUpdateManyWithoutLibraryNestedInput
    libraryAccess?: LibraryAccessUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryUncheckedUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medias?: MediaUncheckedUpdateManyWithoutLibraryNestedInput
    shows?: ShowUncheckedUpdateManyWithoutLibraryNestedInput
    libraryAccess?: LibraryAccessUncheckedUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryAccessCreateWithoutUserInput = {
    id?: string
    access: $Enums.LibraryAccessType
    library: LibraryCreateNestedOneWithoutLibraryAccessInput
  }

  export type LibraryAccessUncheckedCreateWithoutUserInput = {
    id?: string
    libraryId: string
    access: $Enums.LibraryAccessType
  }

  export type LibraryAccessCreateOrConnectWithoutUserInput = {
    where: LibraryAccessWhereUniqueInput
    create: XOR<LibraryAccessCreateWithoutUserInput, LibraryAccessUncheckedCreateWithoutUserInput>
  }

  export type LibraryAccessCreateManyUserInputEnvelope = {
    data: LibraryAccessCreateManyUserInput | LibraryAccessCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LibraryAccessUpsertWithWhereUniqueWithoutUserInput = {
    where: LibraryAccessWhereUniqueInput
    update: XOR<LibraryAccessUpdateWithoutUserInput, LibraryAccessUncheckedUpdateWithoutUserInput>
    create: XOR<LibraryAccessCreateWithoutUserInput, LibraryAccessUncheckedCreateWithoutUserInput>
  }

  export type LibraryAccessUpdateWithWhereUniqueWithoutUserInput = {
    where: LibraryAccessWhereUniqueInput
    data: XOR<LibraryAccessUpdateWithoutUserInput, LibraryAccessUncheckedUpdateWithoutUserInput>
  }

  export type LibraryAccessUpdateManyWithWhereWithoutUserInput = {
    where: LibraryAccessScalarWhereInput
    data: XOR<LibraryAccessUpdateManyMutationInput, LibraryAccessUncheckedUpdateManyWithoutUserInput>
  }

  export type LibraryCreateWithoutLibraryAccessInput = {
    id?: string
    type: $Enums.LibraryType
    name: string
    path: string
    createdAt?: Date | string
    medias?: MediaCreateNestedManyWithoutLibraryInput
    shows?: ShowCreateNestedManyWithoutLibraryInput
    movies?: MovieCreateNestedManyWithoutLibraryInput
  }

  export type LibraryUncheckedCreateWithoutLibraryAccessInput = {
    id?: string
    type: $Enums.LibraryType
    name: string
    path: string
    createdAt?: Date | string
    medias?: MediaUncheckedCreateNestedManyWithoutLibraryInput
    shows?: ShowUncheckedCreateNestedManyWithoutLibraryInput
    movies?: MovieUncheckedCreateNestedManyWithoutLibraryInput
  }

  export type LibraryCreateOrConnectWithoutLibraryAccessInput = {
    where: LibraryWhereUniqueInput
    create: XOR<LibraryCreateWithoutLibraryAccessInput, LibraryUncheckedCreateWithoutLibraryAccessInput>
  }

  export type UserCreateWithoutUserInput = {
    id?: string
    username: string
    password: string
    isOwner: boolean
  }

  export type UserUncheckedCreateWithoutUserInput = {
    id?: string
    username: string
    password: string
    isOwner: boolean
  }

  export type UserCreateOrConnectWithoutUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserInput, UserUncheckedCreateWithoutUserInput>
  }

  export type LibraryUpsertWithoutLibraryAccessInput = {
    update: XOR<LibraryUpdateWithoutLibraryAccessInput, LibraryUncheckedUpdateWithoutLibraryAccessInput>
    create: XOR<LibraryCreateWithoutLibraryAccessInput, LibraryUncheckedCreateWithoutLibraryAccessInput>
    where?: LibraryWhereInput
  }

  export type LibraryUpdateToOneWithWhereWithoutLibraryAccessInput = {
    where?: LibraryWhereInput
    data: XOR<LibraryUpdateWithoutLibraryAccessInput, LibraryUncheckedUpdateWithoutLibraryAccessInput>
  }

  export type LibraryUpdateWithoutLibraryAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medias?: MediaUpdateManyWithoutLibraryNestedInput
    shows?: ShowUpdateManyWithoutLibraryNestedInput
    movies?: MovieUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryUncheckedUpdateWithoutLibraryAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medias?: MediaUncheckedUpdateManyWithoutLibraryNestedInput
    shows?: ShowUncheckedUpdateManyWithoutLibraryNestedInput
    movies?: MovieUncheckedUpdateManyWithoutLibraryNestedInput
  }

  export type UserUpsertWithoutUserInput = {
    update: XOR<UserUpdateWithoutUserInput, UserUncheckedUpdateWithoutUserInput>
    create: XOR<UserCreateWithoutUserInput, UserUncheckedCreateWithoutUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserInput, UserUncheckedUpdateWithoutUserInput>
  }

  export type UserUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MediaCreateManyLibraryInput = {
    id?: string
    path: string
    createdAt?: Date | string
    width: number
    height: number
    bitrate: number
    duration: number
  }

  export type ShowCreateManyLibraryInput = {
    id?: string
    tvmazeId: number
    name: string
    path: string
    overview?: string | null
    images?: ShowCreateimagesInput | string[]
  }

  export type MovieCreateManyLibraryInput = {
    id?: string
    name: string
    overview?: string | null
    images?: MovieCreateimagesInput | string[]
    tmdbId: number
    mediaId: string
  }

  export type LibraryAccessCreateManyLibraryInput = {
    id?: string
    userId: string
    access: $Enums.LibraryAccessType
  }

  export type MediaUpdateWithoutLibraryInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    bitrate?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    streams?: StreamUpdateManyWithoutMediaNestedInput
    episode?: EpisodeUpdateOneWithoutMediaNestedInput
    movie?: MovieUpdateOneWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutLibraryInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    bitrate?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    streams?: StreamUncheckedUpdateManyWithoutMediaNestedInput
    episode?: EpisodeUncheckedUpdateOneWithoutMediaNestedInput
    movie?: MovieUncheckedUpdateOneWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateManyWithoutLibraryInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    bitrate?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
  }

  export type ShowUpdateWithoutLibraryInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvmazeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ShowUpdateimagesInput | string[]
    seasons?: SeasonUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateWithoutLibraryInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvmazeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ShowUpdateimagesInput | string[]
    seasons?: SeasonUncheckedUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateManyWithoutLibraryInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvmazeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ShowUpdateimagesInput | string[]
  }

  export type MovieUpdateWithoutLibraryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    images?: MovieUpdateimagesInput | string[]
    tmdbId?: IntFieldUpdateOperationsInput | number
    media?: MediaUpdateOneRequiredWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutLibraryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    images?: MovieUpdateimagesInput | string[]
    tmdbId?: IntFieldUpdateOperationsInput | number
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type MovieUncheckedUpdateManyWithoutLibraryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    images?: MovieUpdateimagesInput | string[]
    tmdbId?: IntFieldUpdateOperationsInput | number
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type LibraryAccessUpdateWithoutLibraryInput = {
    id?: StringFieldUpdateOperationsInput | string
    access?: EnumLibraryAccessTypeFieldUpdateOperationsInput | $Enums.LibraryAccessType
    user?: UserUpdateOneRequiredWithoutUserNestedInput
  }

  export type LibraryAccessUncheckedUpdateWithoutLibraryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    access?: EnumLibraryAccessTypeFieldUpdateOperationsInput | $Enums.LibraryAccessType
  }

  export type LibraryAccessUncheckedUpdateManyWithoutLibraryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    access?: EnumLibraryAccessTypeFieldUpdateOperationsInput | $Enums.LibraryAccessType
  }

  export type StreamCreateManyMediaInput = {
    id?: string
    name: string
    streamIndex: number
    type: $Enums.StreamType
  }

  export type StreamUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    streamIndex?: IntFieldUpdateOperationsInput | number
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
  }

  export type StreamUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    streamIndex?: IntFieldUpdateOperationsInput | number
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
  }

  export type StreamUncheckedUpdateManyWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    streamIndex?: IntFieldUpdateOperationsInput | number
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
  }

  export type EpisodeCreateManySeasonInput = {
    id?: string
    mediaId: string
    overview?: string | null
    name: string
    episode_number: number
    images?: EpisodeCreateimagesInput | string[]
  }

  export type EpisodeUpdateWithoutSeasonInput = {
    id?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    episode_number?: IntFieldUpdateOperationsInput | number
    images?: EpisodeUpdateimagesInput | string[]
    media?: MediaUpdateOneRequiredWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutSeasonInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    episode_number?: IntFieldUpdateOperationsInput | number
    images?: EpisodeUpdateimagesInput | string[]
  }

  export type EpisodeUncheckedUpdateManyWithoutSeasonInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    episode_number?: IntFieldUpdateOperationsInput | number
    images?: EpisodeUpdateimagesInput | string[]
  }

  export type SeasonCreateManyShowInput = {
    id?: string
    name: string
    season_number: number
    overview?: string | null
    images?: SeasonCreateimagesInput | string[]
  }

  export type SeasonUpdateWithoutShowInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    season_number?: IntFieldUpdateOperationsInput | number
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    images?: SeasonUpdateimagesInput | string[]
    episodes?: EpisodeUpdateManyWithoutSeasonNestedInput
  }

  export type SeasonUncheckedUpdateWithoutShowInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    season_number?: IntFieldUpdateOperationsInput | number
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    images?: SeasonUpdateimagesInput | string[]
    episodes?: EpisodeUncheckedUpdateManyWithoutSeasonNestedInput
  }

  export type SeasonUncheckedUpdateManyWithoutShowInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    season_number?: IntFieldUpdateOperationsInput | number
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    images?: SeasonUpdateimagesInput | string[]
  }

  export type LibraryAccessCreateManyUserInput = {
    id?: string
    libraryId: string
    access: $Enums.LibraryAccessType
  }

  export type LibraryAccessUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    access?: EnumLibraryAccessTypeFieldUpdateOperationsInput | $Enums.LibraryAccessType
    library?: LibraryUpdateOneRequiredWithoutLibraryAccessNestedInput
  }

  export type LibraryAccessUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    libraryId?: StringFieldUpdateOperationsInput | string
    access?: EnumLibraryAccessTypeFieldUpdateOperationsInput | $Enums.LibraryAccessType
  }

  export type LibraryAccessUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    libraryId?: StringFieldUpdateOperationsInput | string
    access?: EnumLibraryAccessTypeFieldUpdateOperationsInput | $Enums.LibraryAccessType
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use LibraryCountOutputTypeDefaultArgs instead
     */
    export type LibraryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LibraryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MediaCountOutputTypeDefaultArgs instead
     */
    export type MediaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MediaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SeasonCountOutputTypeDefaultArgs instead
     */
    export type SeasonCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SeasonCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShowCountOutputTypeDefaultArgs instead
     */
    export type ShowCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShowCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LibraryDefaultArgs instead
     */
    export type LibraryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LibraryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StreamDefaultArgs instead
     */
    export type StreamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StreamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MediaDefaultArgs instead
     */
    export type MediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MediaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EpisodeDefaultArgs instead
     */
    export type EpisodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EpisodeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SeasonDefaultArgs instead
     */
    export type SeasonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SeasonDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShowDefaultArgs instead
     */
    export type ShowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShowDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MovieDefaultArgs instead
     */
    export type MovieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MovieDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServerDefaultArgs instead
     */
    export type ServerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LibraryAccessDefaultArgs instead
     */
    export type LibraryAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LibraryAccessDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}