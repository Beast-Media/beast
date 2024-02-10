import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import swaggerDocument from './swagger.json';
import { SwaggerModule } from '@nestjs/swagger';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ShutdownSignal } from '@nestjs/common';
import { initLogger } from '@beast/nestjs-commons';

async function bootstrap() {
  process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  });
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      bufferLogs: true,
      cors: {
        credentials: true,
        origin: true,
      },
    },
  );

  SwaggerModule.setup(
    '/api',
    app,
    {
      ...(swaggerDocument as any),
      servers: [],
    },
    {
      swaggerOptions: {
        defaultModelRendering: 'model',
        tryItOutEnabled: true,
        syntaxHighlight: {
          activate: true,
        },
      },
    },
  );

  initLogger(app);

  app.enableShutdownHooks([ShutdownSignal.SIGTERM, ShutdownSignal.SIGINT]);
  await app.listen(4000, '0.0.0.0');
}
bootstrap();
