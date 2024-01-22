import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/commons/prisma/prisma.module';
import { AuthController } from './auth.controller';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [PrismaModule, ConfigModule],
  providers: [],
  exports: [],
  controllers: [AuthController],
})
export class AuthModule {}
