import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ConfigModule } from 'src/config/config.module';
import { ServerDBModule } from '@beast/server-db-schemas';

@Module({
  imports: [ServerDBModule, ConfigModule],
  providers: [],
  exports: [],
  controllers: [AuthController],
})
export class AuthModule {}
