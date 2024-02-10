import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import swaggerDocument from './swagger.json';
import { SwaggerModule } from '@nestjs/swagger';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ShutdownSignal } from '@nestjs/common';
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
    new FastifyAdapter({
      rewriteUrl: (req) => {
        return config.getFrontDist() &&
          !req.url.startsWith('/api') && // this is a big hack, idk what is the correct answer to this yet
          !req.url.startsWith('/assets') &&
          req.url !== ''
          ? '/index.html'
          : req.url;
      },
    }),
    {
      bufferLogs: true,
      cors: {
        credentials: true,
        origin: true,
      },
    },
  );

  app.setGlobalPrefix('api');

  const config = app.get(ConfigService);

  app.register((instance, opts, next) => {
    instance.register(fastifyStatic, {
      root: resolve(join(config.getMetadatasPath(), 'images')),
      prefix: '/api/public/images',
    });
    next();
  });

  app.register((instance, opts, next) => {
    instance.register(fastifyStatic, {
      root: resolve(config.getTranscodePath()),
      prefix: '/api/public/transcodes',
    });
    next();
  });

  const frontDist = config.getFrontDist();
  if (frontDist) {
    console.log('serving front dist');
    const staticDist = resolve(frontDist);
    app.register((instance, opts, next) => {
      instance.register(fastifyStatic, {
        root: join(staticDist),
        prefix: '/',
      });
      next();
    });
  }

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
  console.log('LISTENING ON ', config.getPort());
  await app.listen(config.getPort(), '0.0.0.0');
}
bootstrap();
