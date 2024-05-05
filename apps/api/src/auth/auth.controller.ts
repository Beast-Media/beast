import { TypedRoute } from '@nestia/core';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

/**
 * Auth
 */
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  /**
   * Register a nas
   * Gets the public key and the nas ip address. This endpoint will be also called if the nas changes ip address
   */
  @TypedRoute.Post('/register')
  public async register() {
    return true;
  }

  /**
   * Gets a nas from its public DID
   */
  @TypedRoute.Post('/server')
  public async server() {
    return true;
  }

  /**
   * Adds a device to the attached devices of a specified nas
   */
  @TypedRoute.Post('/attach-device')
  public async attachDevice() {
    return true;
  }
}
