import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { AppLogger } from './logger';
import { join } from 'path';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        level:
          false && process.env['NODE_ENV'] !== 'production' ? 'debug' : 'info',
        transport:
          false && process.env['NODE_ENV'] !== 'production'
            ? {
                target: join(__dirname, 'pino-pretty-transport.js'),
              }
            : undefined,
      },
    }),
  ],
  providers: [AppLogger],
  exports: [AppLogger],
})
export class AppLoggerModule {}
