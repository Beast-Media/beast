import { Injectable } from '@nestjs/common';
import dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class ConfigService {
  constructor() {
    this.ensureVariables();
  }

  ensureVariables() {
    const variables = [
      'DATABASE_URL',
      'METADATAS_PATH',
      'TRANSCODE_PATH',
      'AUTH_JWT_SECRET',
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

  getDatabaseUrl() {
    return this.getValueOrThrow('DATABASE_URL');
  }

  getAuthJWTSecret() {
    return this.getValueOrThrow('AUTH_JWT_SECRET');
  }

  getMetadatasPath() {
    return this.getValueOrThrow('METADATAS_PATH');
  }

  getTranscodePath() {
    return this.getValueOrThrow('TRANSCODE_PATH');
  }
}
