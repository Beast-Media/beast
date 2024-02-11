import { DataSource } from 'typeorm';
import { join } from 'path';

if (!process.env.SERVER_DATA_PATH)
  throw new Error('missing process.env.SERVER_DATA_PATH');

export const connectionSource = new DataSource({
  type: 'better-sqlite3',
  database: join(process.env.SERVER_DATA_PATH, 'server.db'),
  entities: [__dirname + '/../**/*.dto.{js,ts}'],
  logging: ['error', 'warn', 'migration'],
  migrationsRun: true,
  migrations: [__dirname + '/../migrations/*.{js,ts}'],
  enableWAL: true,
  statementCacheSize: 200,
});
