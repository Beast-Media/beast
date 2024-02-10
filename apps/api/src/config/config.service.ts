import { Injectable } from '@nestjs/common';
import dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class ConfigService {
  constructor() {
    this.ensureVariables();
  }

  ensureVariables() {
    const variables = ['TMDB_API_KEY'];

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

  getTMDBApiKey() {
    return this.getValueOrThrow('TMDB_API_KEY');
  }
}
