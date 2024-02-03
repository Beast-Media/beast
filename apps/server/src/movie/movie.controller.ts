import { TypedQuery, TypedRoute } from '@nestia/core';
import { Controller } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Authenticated } from 'src/auth/auth.decorator';
import { MovieDTO, QueryMovie } from './dto/movie.dto';
import { MovieService } from './movie.service';

/**
 * Controller for the Movies
 */
@ApiTags('movie')
@ApiSecurity('bearer')
@Controller('movie')
@Authenticated()
export class MovieController {
  constructor(private movieService: MovieService) {}

  /**
   * Get the informations of a movie
   */
  @TypedRoute.Get('/')
  public async show(@TypedQuery() query: QueryMovie): Promise<MovieDTO> {
    return this.movieService.getMovie(query.movieId);
  }
}
