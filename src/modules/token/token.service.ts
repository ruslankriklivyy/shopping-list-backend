import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { TokenRepository } from '@/modules/token/token.repository';
import { User } from '@/modules/user/user.model';

@Injectable()
export class TokenService {
  constructor(
    private readonly tokenRepository: TokenRepository,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  public getTokenByRefresh(refreshToken: string) {
    return this.tokenRepository.getToken({ refresh_token: refreshToken });
  }

  public deleteTokenByRefresh(refreshToken: string) {
    return this.tokenRepository.deleteToken({ refresh_token: refreshToken });
  }

  public async generateToken(user: User) {
    const access_token = await this.jwtService.signAsync(user, {
      expiresIn: this.configService.get('JWT_ACCESS_TOKEN_EXPIRES_IN'),
      secret: this.configService.get('JWT_ACCESS_SECRET'),
    });
    const refresh_token = await this.jwtService.signAsync(user, {
      expiresIn: this.configService.get('JWT_REFRESH_TOKEN_EXPIRES_IN'),
      secret: this.configService.get('JWT_REFRESH_SECRET'),
    });

    return {
      access_token,
      refresh_token,
    };
  }

  public async saveToken(
    userId: number,
    accessToken: string,
    refreshToken: string,
  ) {
    const token = await this.tokenRepository.getToken({ user_id: userId });

    if (token) {
      return this.tokenRepository.updateToken(
        { id: token.id },
        { refresh_token: refreshToken },
      );
    }

    return this.tokenRepository.createToken({
      user: { connect: { id: userId } },
      access_token: accessToken,
      refresh_token: refreshToken,
    });
  }

  public async validateTokenRefresh(token: string) {
    try {
      return await this.jwtService.verify(token, {
        secret: this.configService.get('JWT_REFRESH_TOKEN_EXPIRES_IN'),
      });
    } catch (error) {
      return null;
    }
  }
}
