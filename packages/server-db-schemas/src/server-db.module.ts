

import { Module } from '@nestjs/common';
import { ServerDBService } from './server-db.service';

@Module({
  providers: [ServerDBService],
  exports: [ServerDBService],
})
export class ServerDBModule {
}