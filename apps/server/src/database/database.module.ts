import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectionSource } from './typeorm.datasource';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({}), // do not remove or it wont work, idk why, dont care
      dataSourceFactory: () => {
        return connectionSource.initialize();
      },
    }),
  ],
})
export class DatabaseModule {}
