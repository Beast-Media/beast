import { Controller } from '@nestjs/common';
import { PlayerService } from './player.service';
import { Authenticated } from 'src/auth/auth.decorator';
import { TypedBody, TypedQuery, TypedRoute } from '@nestia/core';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import {
  PlayerSettings,
  QueryPlayer,
  StartPlayerResponse,
} from './dto/player.dto';

@ApiTags('player')
@ApiSecurity('bearer')
@Authenticated()
@Controller('player')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @TypedRoute.Post('/start')
  async startPlayer(
    // @User() user: UserSession,
    @TypedBody() body: PlayerSettings,
  ): Promise<StartPlayerResponse> {
    const [{ id }, { duration }] = await this.playerService.startPlayer(body);

    return {
      id,
      duration,
    };
  }

  @TypedRoute.Post('/end')
  async endPlayer(
    // @User() user: UserSession,
    @TypedQuery() query: QueryPlayer,
  ) {
    await this.playerService.endPlayer(query.id);
  }

  //   @TypedRoute.Post('/seek')
  //   async seekPlayer(
  //     // @User() user: UserSession,
  //     @TypedQuery() query: SeekPlayer,
  //   ) {
  //     await this.playerService.seekPlayer(query.id, query.seek);
  //   }
}
