import { INestiaConfig } from '@nestia/sdk';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';

const camelize = (word: string, index: number) =>
  !word || index == 0 ? word : word[0].toUpperCase() + word.slice(1);

const config: INestiaConfig = {
  input: async () => {
    const app = await NestFactory.create(AppModule, { logger: false });
    app.setGlobalPrefix('/api');
    return app;
  },
  swagger: {
    output: 'src/swagger.json',
    security: {
      bearer: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
    },
    beautify: true,
    decompose: true,
    operationId: ({ path, method }) =>
      `${method.toLowerCase()}_${path.replace('/api/', '').replace(/\/|-|{|}/gi, '_')}`
        .split('_')
        .map(camelize)
        .join(''),
  },
};
export default config;
