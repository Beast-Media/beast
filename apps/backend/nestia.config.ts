import { INestiaConfig } from '@nestia/sdk';

const camelize = (word: string, index: number) =>
  !word || index == 0 ? word : word[0].toUpperCase() + word.slice(1);

const config: INestiaConfig = {
  input: {
    include: ['src/**/*.controller.ts'],
    exclude: [],
  },
  swagger: {
    output: 'swagger.json',
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
      `${method.toLowerCase()}_${path.substring(1).replace(/\/|-|{|}/gi, '_')}`
        .split('_')
        .map(camelize)
        .join(''),
  },
};
export default config;
