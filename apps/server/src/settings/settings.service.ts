import { Injectable } from '@nestjs/common';
import { InitServerBody } from './dto/settings.dto';
import { ServerEntity } from './dto/server.dto';

@Injectable()
export class SettingsService {
  constructor() {}

  public async initServer(init: InitServerBody) {
    const initialized = await this.isInitialized();

    if (initialized) throw new Error('Server already initialised');

    await ServerEntity.insert(
      ServerEntity.create({
        name: init.name,
      }),
    );
  }

  public async isInitialized(): Promise<boolean> {
    const hasServer = (await ServerEntity.count()) !== 0;
    return !!hasServer;
  }
}
