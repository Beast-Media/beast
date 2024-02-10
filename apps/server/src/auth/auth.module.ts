import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [ConfigModule],
  providers: [],
  exports: [],
  controllers: [AuthController],
})
export class AuthModule {}
