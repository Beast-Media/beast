import { ServerDBService } from '@beast/server-db-schemas';
import { Injectable } from '@nestjs/common';
import { InitServerBody } from './dto/settings.dto';

@Injectable()
export class SettingsService {
  constructor(private prisma: ServerDBService) {}

  public async initServer(init: InitServerBody) {
    const initialized = await this.isInitialized();

    if (initialized) throw new Error('Server already initialised');

    await this.prisma.server.create({
      data: {
        name: init.name,
      },
    });
  }

  public async isInitialized(): Promise<boolean> {
    const hasServer = (await this.prisma.server.count()) !== 0;
    return !!hasServer;
  }
}
