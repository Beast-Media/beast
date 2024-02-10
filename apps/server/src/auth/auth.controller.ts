import { TypedBody, TypedRoute } from '@nestia/core';
import { Controller, HttpException, HttpStatus } from '@nestjs/common';
import { verify, hash } from 'argon2';
import jwt from 'jsonwebtoken';
import { ConfigService } from 'src/config/config.service';
import { AuthTokens } from './dto/responses';
import { LoginBody, RefreshBody, RegisterBody } from './dto/bodies';
import { ApiTags } from '@nestjs/swagger';
import { User, UserEntity } from './dto/user.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private configService: ConfigService) {}

  private createTokens(userId: User['id']) {
    return {
      access_token: jwt.sign(
        { user: { id: userId } },
        this.configService.getAuthJWTSecret(),
        { expiresIn: '1h' },
      ),
      refresh_token: jwt.sign(
        { user: { id: userId } },
        this.configService.getAuthJWTSecret(),
        { expiresIn: '1d' },
      ),
    };
  }

  @TypedRoute.Post('login')
  async login(@TypedBody() body: LoginBody): Promise<AuthTokens> {
    const foundUser = await UserEntity.findOne({
      where: { email: body.email },
    });
    if (!foundUser)
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    if (!(await verify(foundUser.password, body.password)))
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);

    return this.createTokens(foundUser.id);
  }

  @TypedRoute.Post('refresh')
  async refresh(@TypedBody() body: RefreshBody): Promise<AuthTokens> {
    try {
      const res = jwt.verify(
        body.refresh_token,
        this.configService.getAuthJWTSecret(),
      ) as { user: { id: string } };

      const foundUser = await UserEntity.findOne({
        where: { id: res.user.id },
      });
      if (!foundUser)
        throw new HttpException(
          'invalid refresh token - user does not exists',
          HttpStatus.FORBIDDEN,
        );

      return this.createTokens(res.user.id);
    } catch {
      throw new HttpException('invalid refresh token', HttpStatus.FORBIDDEN);
    }
  }

  @TypedRoute.Post('register')
  async register(@TypedBody() body: RegisterBody): Promise<boolean> {
    const foundUser = await UserEntity.findOne({
      where: { email: body.email },
    });
    if (foundUser) return false;

    const isFisrtUser = (await UserEntity.count()) === 0;

    try {
      await UserEntity.create({
        email: body.email,
        password: await hash(body.password),
        isOwner: isFisrtUser,
      }).save();

      return true;
    } catch {
      throw new HttpException(
        'Unable to register',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
