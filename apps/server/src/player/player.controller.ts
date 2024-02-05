import { Controller } from '@nestjs/common';
import { PlayerService } from './player.service';
import { Authenticated } from 'src/auth/auth.decorator';
import { TypedBody, TypedQuery, TypedRoute } from '@nestia/core';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import {
  PlayerSettings,
  QueryPlayer,
  StartedPlayerInfos,
} from './dto/player.dto';

@ApiTags('player')
@ApiSecurity('bearer')
@Authenticated()
@Controller('player')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @TypedRoute.Post('/start')
  async startPlayer(
    @TypedBody() body: PlayerSettings,
  ): Promise<StartedPlayerInfos> {
    return this.playerService.startPlayer(body);
  }

  /**
   * Used to tell the server that the user is still watching
   * if the server does not receive this call within a 10s window,
   * the server will close the player to save ressources
   */
  @TypedRoute.Post('/keepalive')
  async keepalive(@TypedQuery() query: QueryPlayer): Promise<boolean> {
    this.playerService.keepalive(query.id);
    return true;
  }

  @TypedRoute.Post('/end')
  async endPlayer(@TypedQuery() query: QueryPlayer) {
    await this.playerService.endPlayer(query.id);
  }
}
