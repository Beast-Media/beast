import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from './index';

@Injectable()
export class ServerDBService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      log: ['error', 'warn', 'info', 'query'],
      // datasourceUrl: config.database_url,
    });
  }

  async onModuleInit() {
    await this.$connect();
  }
}