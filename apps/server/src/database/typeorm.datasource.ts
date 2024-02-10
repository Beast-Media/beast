import { DataSource } from 'typeorm';

if (!process.env.SERVER_DB_PATH)
  throw new Error('missing process.env.SERVER_DB_PATH');

export const connectionSource = new DataSource({
  type: 'better-sqlite3',
  database: process.env.SERVER_DB_PATH,
  entities: [__dirname + '/../**/*.dto.{js,ts}'],
  logging: ['log', 'query'],
  migrationsRun: true,
  migrations: [__dirname + '/../migrations/*.{js,ts}'],
});
