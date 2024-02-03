import { TMDBMovie, TMDBService } from '@beast/tmdb';
import { TypedParam, TypedRoute } from '@nestia/core';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

/**
 * Proxy of the tmdb api
 */
@ApiTags('tmdb')
@Controller('tmdb')
export class TMDBController {
  constructor(private tmdbService: TMDBService) {}

  /**
   * Get a move from its id
   */
  @TypedRoute.Get('/movie/:id')
  public async show(@TypedParam('id') id: number): Promise<TMDBMovie | null> {
    return this.tmdbService.getMovie(id);
  }
}
