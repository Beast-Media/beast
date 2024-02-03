import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import swaggerDocument from './swagger.json';
import { SwaggerModule } from '@nestjs/swagger';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { HttpException, HttpStatus, ShutdownSignal } from '@nestjs/common';
import { join, resolve } from 'path';
import { ConfigService } from './config/config.service';
import { fastifyStatic } from '@fastify/static';
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
        origin: (requestOrigin: string, callback) => {
          if (!requestOrigin || requestOrigin?.includes('localhost'))
            callback(null, true);
          else {
            callback(
              new HttpException(
                'Not allowed by CORS ' + requestOrigin,
                HttpStatus.FORBIDDEN,
              ),
              false,
            );
          }
        },
      },
    },
  );

  SwaggerModule.setup(
    '/api',
    app,
    {
      ...(swaggerDocument as any),
      servers: [
        {
          url: `http://localhost:3000`,
          description: 'Main Server',
        },
      ],
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

  const config = app.get(ConfigService);

  app.register((instance, opts, next) => {
    instance.register(fastifyStatic as any, {
      root: resolve(join(config.getMetadatasPath(), 'images')),
      prefix: '/public/images',
    });
    next();
  });

  app.register((instance, opts, next) => {
    instance.register(fastifyStatic as any, {
      root: resolve(config.getTranscodePath()),
      prefix: '/public/transcodes',
    });
    next();
  });

  initLogger(app);

  app.enableShutdownHooks([ShutdownSignal.SIGTERM, ShutdownSignal.SIGINT]);
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
