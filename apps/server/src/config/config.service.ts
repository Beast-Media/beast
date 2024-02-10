import { Injectable, OnModuleInit } from '@nestjs/common';
import dotenv from 'dotenv';
import { readFile, stat, writeFile } from 'fs/promises';
import { join } from 'path';
import crypto from 'crypto';

dotenv.config();

@Injectable()
export class ConfigService implements OnModuleInit {
  private jwtSecret: string;

  constructor() {
    this.ensureVariables();
  }

  async onModuleInit() {
    const file = join(this.getServerDataPath(), 'auth-secret');

    if (!(await stat(file).catch(() => null))?.isFile()) {
      this.jwtSecret = crypto.randomBytes(32).toString('hex');
      await writeFile(file, this.jwtSecret, {
        encoding: 'utf8',
      });
    } else {
      this.jwtSecret = await readFile(file, { encoding: 'utf8' });
    }
  }

  ensureVariables() {
    const variables = [
      'SERVER_DATA_PATH',
      'SERVER_LIBRARIES_ROOT',
      'SERVER_APP_PATH',
      'API_APP_PATH',
    ];

    for (const variable of variables) {
      this.getValueOrThrow(variable);
    }
  }

  getValueOrThrow(key: string): string {
    const val = process.env[key];
    if (!val) {
      throw new Error(`missing process.env.${key}`);
    }
    return val;
  }

  getAuthJWTSecret() {
    return this.jwtSecret;
  }

  getMetadatasPath() {
    return join(this.getServerDataPath(), 'metadatas');
  }

  getTranscodePath() {
    return join(this.getServerDataPath(), 'transcode');
  }

  getAppPath() {
    return this.getValueOrThrow('SERVER_APP_PATH');
  }

  getLibrariesRoot() {
    return this.getValueOrThrow('SERVER_LIBRARIES_ROOT');
  }

  getServerDataPath() {
    return this.getValueOrThrow('SERVER_DATA_PATH');
  }

  getApiAppPath() {
    return this.getValueOrThrow('API_APP_PATH');
  }
}
