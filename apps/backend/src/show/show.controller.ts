import { TypedQuery, TypedRoute } from '@nestia/core';
import { Controller } from '@nestjs/common';
import { Authenticated } from 'src/auth/auth.decorator';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { ShowService } from './show.service';
import {
  EpisodeDTO,
  QueryEpisode,
  QuerySeason,
  QueryShow,
  SeasonWithEpisodes,
  ShowWithSeasons,
} from './dto/show.dto';
import { TasksService } from 'src/tasks/tasks.service';

/**
 * Controller for the TV Shows
 */
@ApiTags('show')
@ApiSecurity('bearer')
@Controller('show')
@Authenticated()
export class ShowController {
  constructor(
    public showService: ShowService,
    public tasksService: TasksService,
  ) {}

  /**
   * Get the informations of a show
   */
  @TypedRoute.Get('/')
  public async show(@TypedQuery() query: QueryShow): Promise<ShowWithSeasons> {
    return this.showService.getShow(query.showId);
  }

  /**
   * Start a scan on a show
   */
  @TypedRoute.Post('/scan')
  public async scanShow(@TypedQuery() query: QueryShow): Promise<boolean> {
    const show = await this.showService.getShowWithLibrary(query.showId);
    this.tasksService.queueTask({
      name: 'index_show',
      library: show.library,
      showPath: show.path,
    });
    return true;
  }

  /**
   * Get the informations of a season
   */
  @TypedRoute.Get('season')
  public async season(
    @TypedQuery() query: QuerySeason,
  ): Promise<SeasonWithEpisodes> {
    return this.showService.getSeason(query.seasonId);
  }

  /**
   * Get the informations of a episode
   */
  @TypedRoute.Get('episode')
  public async espisode(
    @TypedQuery() query: QueryEpisode,
  ): Promise<EpisodeDTO> {
    return this.showService.getEpisode(query.episodeId);
  }
}
