import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { AppLogger } from './logger';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        level: process.env['NODE_ENV'] !== 'production' ? 'debug' : 'info',
        // transport:
        //   process.env.PRODUCTION !== 'prod'
        //     ? {
        //         target: join(__dirname, 'pino-pretty-transport.js'),
        //       }
        //     : undefined,
      },
    }),
  ],
  providers: [AppLogger],
  exports: [AppLogger],
})
export class AppLoggerModule {}
