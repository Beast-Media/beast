import { TypedQuery, TypedRoute } from '@nestia/core';
import { Controller } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Authenticated } from 'src/auth/auth.decorator';
import { MovieDTO, QueryMovie } from './dto/movie.query';
import { MovieService } from './movie.service';
import { LibraryAccessType, LibraryType } from '@beast/server-db-schemas';
import { HasLibraryAccess } from 'src/library/library-access.decorator';

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
  @HasLibraryAccess<QueryMovie>(LibraryAccessType.READ, {
    from: LibraryType.MOVIES,
    id: 'movieId',
  })
  public async show(@TypedQuery() query: QueryMovie): Promise<MovieDTO> {
    return this.movieService.getMovie(query.movieId);
  }
}
