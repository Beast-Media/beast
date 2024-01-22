import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';
import swaggerDocument from '../swagger.json';
import { SwaggerModule } from '@nestjs/swagger';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { HttpException, HttpStatus, ShutdownSignal } from '@nestjs/common';

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

  app.useLogger(app.get(Logger));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());
  app.enableShutdownHooks([ShutdownSignal.SIGTERM, ShutdownSignal.SIGINT]);
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
