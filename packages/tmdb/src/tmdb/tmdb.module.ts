import { Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './tmdb.consts';
import { TMDBService } from './tmdb.service';

@Module({
  imports: [],
  providers: [TMDBService],
  exports: [TMDBService]
})
export class TMDBModule extends ConfigurableModuleClass {}
