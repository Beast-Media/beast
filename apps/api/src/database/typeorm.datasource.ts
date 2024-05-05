import { DataSource } from 'typeorm';

if (!process.env.API_DB_URL) throw new Error('missing process.env.API_DB_URL');

export const connectionSource = new DataSource({
  type: 'postgres',
  url: process.env.API_DB_URL,
  entities: [__dirname + '/../**/*.dto.{js,ts}'],
  logging: ['error', 'warn', 'migration'],
  migrationsRun: true,
  migrations: [__dirname + '/../migrations/*.{js,ts}'],
});
