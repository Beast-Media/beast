import { TypedQuery, TypedRoute } from '@nestia/core';
import { Controller } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Authenticated } from 'src/auth/auth.decorator';
import { QueryMovie } from './dto/movie.query';
import { MovieService } from './movie.service';
import { HasLibraryAccess } from 'src/library/library-access.decorator';
import { Movie } from './dto/movie.dto';

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
  @HasLibraryAccess<QueryMovie>('READ', {
    from: 'MOVIES',
    id: 'movieId',
  })
  public async show(@TypedQuery() query: QueryMovie): Promise<Movie> {
    return this.movieService.getMovie(query.movieId);
  }
}
