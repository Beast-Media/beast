
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.LibraryScalarFieldEnum = {
  id: 'id',
  type: 'type',
  name: 'name',
  path: 'path',
  createdAt: 'createdAt'
};

exports.Prisma.StreamScalarFieldEnum = {
  id: 'id',
  name: 'name',
  streamIndex: 'streamIndex',
  type: 'type',
  mediaId: 'mediaId'
};

exports.Prisma.MediaScalarFieldEnum = {
  id: 'id',
  path: 'path',
  libraryId: 'libraryId',
  createdAt: 'createdAt',
  width: 'width',
  height: 'height',
  bitrate: 'bitrate',
  duration: 'duration'
};

exports.Prisma.EpisodeScalarFieldEnum = {
  id: 'id',
  mediaId: 'mediaId',
  seasonId: 'seasonId',
  overview: 'overview',
  name: 'name',
  episode_number: 'episode_number',
  images: 'images'
};

exports.Prisma.SeasonScalarFieldEnum = {
  id: 'id',
  name: 'name',
  season_number: 'season_number',
  overview: 'overview',
  showId: 'showId',
  images: 'images'
};

exports.Prisma.ShowScalarFieldEnum = {
  id: 'id',
  tvmazeId: 'tvmazeId',
  name: 'name',
  path: 'path',
  overview: 'overview',
  images: 'images',
  libraryId: 'libraryId'
};

exports.Prisma.MovieScalarFieldEnum = {
  id: 'id',
  name: 'name',
  overview: 'overview',
  images: 'images',
  tmdbId: 'tmdbId',
  mediaId: 'mediaId',
  libraryId: 'libraryId'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password',
  isOwner: 'isOwner'
};

exports.Prisma.ServerScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.LibraryAccessScalarFieldEnum = {
  id: 'id',
  libraryId: 'libraryId',
  userId: 'userId',
  access: 'access'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.LibraryType = exports.$Enums.LibraryType = {
  MOVIES: 'MOVIES',
  TV_SHOWS: 'TV_SHOWS'
};

exports.StreamType = exports.$Enums.StreamType = {
  video: 'video',
  audio: 'audio',
  subtitle: 'subtitle',
  attachment: 'attachment'
};

exports.LibraryAccessType = exports.$Enums.LibraryAccessType = {
  READ: 'READ',
  WRITE: 'WRITE'
};

exports.Prisma.ModelName = {
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
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/llelievr/streamer-test/beast-turbo/packages/server-db-schemas/src/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-1.1.x"
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.9.1",
  "engineVersion": "23fdc5965b1e05fc54e5f26ed3de66776b93de64",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuLi9zcmMvY2xpZW50IgogIGJpbmFyeVRhcmdldHMgPSBbIm5hdGl2ZSIsICJkZWJpYW4tb3BlbnNzbC0xLjEueCJdCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCmVudW0gTGlicmFyeVR5cGUgewogIE1PVklFUwogIFRWX1NIT1dTCn0KCmVudW0gU3RyZWFtVHlwZSB7CiAgdmlkZW8KICBhdWRpbwogIHN1YnRpdGxlCiAgYXR0YWNobWVudAp9Cgptb2RlbCBMaWJyYXJ5IHsKICBpZCAgICAgICAgICAgIFN0cmluZyAgICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KHV1aWQoKSkKICB0eXBlICAgICAgICAgIExpYnJhcnlUeXBlCiAgbmFtZSAgICAgICAgICBTdHJpbmcgICAgICBAdW5pcXVlCiAgcGF0aCAgICAgICAgICBTdHJpbmcgICAgICBAdW5pcXVlCiAgbWVkaWFzICAgICAgICBNZWRpYVtdCiAgY3JlYXRlZEF0ICAgICBEYXRlVGltZSAgICBAZGVmYXVsdChub3coKSkKCiAgc2hvd3MgICAgICAgICBTaG93W10KICBtb3ZpZXMgICAgICAgIE1vdmllW10KICBsaWJyYXJ5QWNjZXNzIExpYnJhcnlBY2Nlc3NbXQp9Cgptb2RlbCBTdHJlYW0gewogIGlkICAgICAgICAgIFN0cmluZyAgICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQodXVpZCgpKQogIG5hbWUgICAgICAgIFN0cmluZwogIHN0cmVhbUluZGV4IEludAogIHR5cGUgICAgICAgIFN0cmVhbVR5cGUKCiAgbWVkaWEgICAgICAgTWVkaWE/ICBAcmVsYXRpb24oZmllbGRzOiBbbWVkaWFJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgbWVkaWFJZCAgICAgU3RyaW5nPwoKICBAQHVuaXF1ZShbbWVkaWFJZCwgc3RyZWFtSW5kZXhdKQp9Cgptb2RlbCBNZWRpYSB7CiAgaWQgICAgICAgIFN0cmluZyAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KHV1aWQoKSkKICBwYXRoICAgICAgU3RyaW5nICAgQHVuaXF1ZQogIGxpYnJhcnkgICBMaWJyYXJ5ICBAcmVsYXRpb24oZmllbGRzOiBbbGlicmFyeUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBsaWJyYXJ5SWQgU3RyaW5nCiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQogIHN0cmVhbXMgICBTdHJlYW1bXQogIHdpZHRoICAgICBJbnQKICBoZWlnaHQgICAgSW50CiAgYml0cmF0ZSAgIEludAogIGR1cmF0aW9uICBGbG9hdAoKICBlcGlzb2RlICAgRXBpc29kZT8KICBtb3ZpZSAgICAgTW92aWU/Cn0KCm1vZGVsIEVwaXNvZGUgewogIGlkICAgICAgICAgICAgICBTdHJpbmcgQGlkIEB1bmlxdWUgQGRlZmF1bHQodXVpZCgpKQoKICBtZWRpYSAgICAgICAgICAgTWVkaWEgIEByZWxhdGlvbihmaWVsZHM6IFttZWRpYUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBtZWRpYUlkICAgICAgICAgU3RyaW5nIEB1bmlxdWUKCiAgc2Vhc29uICAgICAgICAgIFNlYXNvbj8gQHJlbGF0aW9uKGZpZWxkczogW3NlYXNvbklkXSwgcmVmZXJlbmNlczogW2lkXSkKICBzZWFzb25JZCAgICAgICAgU3RyaW5nPwoKICBvdmVydmlldyAgICAgICAgU3RyaW5nPwogIG5hbWUgICAgICAgICAgICBTdHJpbmcKICBlcGlzb2RlX251bWJlciAgSW50CiAgaW1hZ2VzICAgICAgICAgIFN0cmluZ1tdCgogIEBAdW5pcXVlKFtzZWFzb25JZCwgZXBpc29kZV9udW1iZXJdKQp9Cgptb2RlbCBTZWFzb24gewogIGlkICAgICAgICAgICAgU3RyaW5nIEBpZCBAdW5pcXVlIEBkZWZhdWx0KHV1aWQoKSkKICBuYW1lICAgICAgICAgIFN0cmluZwogIHNlYXNvbl9udW1iZXIgSW50CgogIG92ZXJ2aWV3ICAgICAgU3RyaW5nPwogIGVwaXNvZGVzICAgICAgRXBpc29kZVtdCiAgc2hvdyAgICAgICAgICBTaG93ICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3Nob3dJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgc2hvd0lkICAgICAgICBTdHJpbmcKICBpbWFnZXMgICAgICAgIFN0cmluZ1tdCgogIEBAdW5pcXVlKFtzaG93SWQsIHNlYXNvbl9udW1iZXJdKQp9Cgptb2RlbCBTaG93IHsKICBpZCAgICAgICAgICAgIFN0cmluZyAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KHV1aWQoKSkKICB0dm1hemVJZCAgICAgIEludCAgICAgIEB1bmlxdWUKICBuYW1lICAgICAgICAgIFN0cmluZwogIHBhdGggICAgICAgICAgU3RyaW5nCiAgb3ZlcnZpZXcgICAgICBTdHJpbmc/CiAgc2Vhc29ucyAgICAgICBTZWFzb25bXQogIGltYWdlcyAgICAgICAgU3RyaW5nW10KCiAgbGlicmFyeSAgICAgICBMaWJyYXJ5IEByZWxhdGlvbihmaWVsZHM6IFtsaWJyYXJ5SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGxpYnJhcnlJZCAgICAgU3RyaW5nCn0KCm1vZGVsIE1vdmllIHsKICBpZCAgICAgICAgICAgIFN0cmluZyAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KHV1aWQoKSkKICBuYW1lICAgICAgICAgIFN0cmluZwogIG92ZXJ2aWV3ICAgICAgU3RyaW5nPwogIGltYWdlcyAgICAgICAgU3RyaW5nW10KICB0bWRiSWQgICAgICAgIEludCAgICAgIEB1bmlxdWUKCiAgbWVkaWEgICAgICAgICBNZWRpYSAgQHJlbGF0aW9uKGZpZWxkczogW21lZGlhSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIG1lZGlhSWQgICAgICAgU3RyaW5nIEB1bmlxdWUKCiAgbGlicmFyeSAgICAgICBMaWJyYXJ5IEByZWxhdGlvbihmaWVsZHM6IFtsaWJyYXJ5SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGxpYnJhcnlJZCAgICAgU3RyaW5nCn0KCm1vZGVsIFVzZXIgewogIGlkICAgICAgICAgICAgU3RyaW5nIEBpZCBAdW5pcXVlIEBkZWZhdWx0KHV1aWQoKSkKCiAgdXNlcm5hbWUgICAgICBTdHJpbmcgQHVuaXF1ZQogIHBhc3N3b3JkICAgICAgU3RyaW5nCiAgaXNPd25lciAgICAgICBCb29sZWFuCgogIHVzZXIgICAgICAgICAgTGlicmFyeUFjY2Vzc1tdCn0KCm1vZGVsIFNlcnZlciB7CiAgaWQgICAgICAgICAgICBTdHJpbmcgQGlkIEB1bmlxdWUgQGRlZmF1bHQodXVpZCgpKQogIG5hbWUgICAgICAgICAgU3RyaW5nCn0KCmVudW0gTGlicmFyeUFjY2Vzc1R5cGUgewogIFJFQUQKICBXUklURQp9Cgptb2RlbCBMaWJyYXJ5QWNjZXNzIHsKICBpZCAgICAgICAgICBTdHJpbmcgQGlkIEB1bmlxdWUgQGRlZmF1bHQodXVpZCgpKQoKICBsaWJyYXJ5ICAgICBMaWJyYXJ5IEByZWxhdGlvbihmaWVsZHM6IFtsaWJyYXJ5SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGxpYnJhcnlJZCAgIFN0cmluZwoKICB1c2VyICAgICAgICBVc2VyIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHVzZXJJZCAgICAgIFN0cmluZwogIGFjY2VzcyAgICAgIExpYnJhcnlBY2Nlc3NUeXBlCgogIEBAdW5pcXVlKFtsaWJyYXJ5SWQsIHVzZXJJZCwgYWNjZXNzXSkKfQo=",
  "inlineSchemaHash": "a3f0673142ab4fed8aa4c27e3bb0c8fb21c33fd02cffae612bbcffcc88c99ce5",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/client",
    "client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Library\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LibraryType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"medias\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Media\",\"relationName\":\"LibraryToMedia\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shows\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Show\",\"relationName\":\"LibraryToShow\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"movies\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Movie\",\"relationName\":\"LibraryToMovie\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"libraryAccess\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LibraryAccess\",\"relationName\":\"LibraryToLibraryAccess\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Stream\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"streamIndex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StreamType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"media\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Media\",\"relationName\":\"MediaToStream\",\"relationFromFields\":[\"mediaId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mediaId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"mediaId\",\"streamIndex\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"mediaId\",\"streamIndex\"]}],\"isGenerated\":false},\"Media\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"library\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Library\",\"relationName\":\"LibraryToMedia\",\"relationFromFields\":[\"libraryId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"libraryId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"streams\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stream\",\"relationName\":\"MediaToStream\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"width\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"height\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bitrate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"episode\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Episode\",\"relationName\":\"EpisodeToMedia\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"movie\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Movie\",\"relationName\":\"MediaToMovie\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Episode\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"media\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Media\",\"relationName\":\"EpisodeToMedia\",\"relationFromFields\":[\"mediaId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mediaId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"season\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Season\",\"relationName\":\"EpisodeToSeason\",\"relationFromFields\":[\"seasonId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seasonId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"overview\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"episode_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"images\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"seasonId\",\"episode_number\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"seasonId\",\"episode_number\"]}],\"isGenerated\":false},\"Season\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"season_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"overview\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"episodes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Episode\",\"relationName\":\"EpisodeToSeason\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"show\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Show\",\"relationName\":\"SeasonToShow\",\"relationFromFields\":[\"showId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"showId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"images\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"showId\",\"season_number\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"showId\",\"season_number\"]}],\"isGenerated\":false},\"Show\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tvmazeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"overview\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seasons\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Season\",\"relationName\":\"SeasonToShow\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"images\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"library\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Library\",\"relationName\":\"LibraryToShow\",\"relationFromFields\":[\"libraryId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"libraryId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Movie\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"overview\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"images\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tmdbId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"media\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Media\",\"relationName\":\"MediaToMovie\",\"relationFromFields\":[\"mediaId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mediaId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"library\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Library\",\"relationName\":\"LibraryToMovie\",\"relationFromFields\":[\"libraryId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"libraryId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isOwner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LibraryAccess\",\"relationName\":\"LibraryAccessToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Server\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LibraryAccess\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"library\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Library\",\"relationName\":\"LibraryToLibraryAccess\",\"relationFromFields\":[\"libraryId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"libraryId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"LibraryAccessToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"access\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LibraryAccessType\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"libraryId\",\"userId\",\"access\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"libraryId\",\"userId\",\"access\"]}],\"isGenerated\":false}},\"enums\":{\"LibraryType\":{\"values\":[{\"name\":\"MOVIES\",\"dbName\":null},{\"name\":\"TV_SHOWS\",\"dbName\":null}],\"dbName\":null},\"StreamType\":{\"values\":[{\"name\":\"video\",\"dbName\":null},{\"name\":\"audio\",\"dbName\":null},{\"name\":\"subtitle\",\"dbName\":null},{\"name\":\"attachment\",\"dbName\":null}],\"dbName\":null},\"LibraryAccessType\":{\"values\":[{\"name\":\"READ\",\"dbName\":null},{\"name\":\"WRITE\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(process.cwd(), "src/client/libquery_engine-debian-openssl-3.0.x.so.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-1.1.x.so.node");
path.join(process.cwd(), "src/client/libquery_engine-debian-openssl-1.1.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/client/schema.prisma")
