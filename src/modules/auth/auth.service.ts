import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { TokenService } from '@/modules/token/token.service';
import { UserService } from '@/modules/user/user.service';
import { LoginInput } from '@/modules/auth/dto/inputs/login.input';
import { RegisterInput } from '@/modules/auth/dto/inputs/register.input';

@Injectable()
export class AuthService {
  constructor(
    private readonly tokenService: TokenService,
    private readonly userService: UserService,
  ) {}

  async login(loginInput: LoginInput) {
    const { email, password } = loginInput;
    const user = await this.userService.getUser({ email });

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'User not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    const isPasswordEquals = bcrypt.compare(password, user.password);

    if (!isPasswordEquals) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid password or email',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const token = await this.tokenService.generateToken(user);

    await this.tokenService.saveToken(
      user.id,
      token.access_token,
      token.refresh_token,
    );

    return { ...token, user };
  }

  async register(registerInput: RegisterInput) {
    const { email, password, name } = registerInput;
    const user = await this.userService.getUser({ email });

    if (user) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'There is already a user this email',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashedPassword = await bcrypt.hash(password, 3);

    const newUser = await this.userService.createUser({
      name,
      email,
      password: hashedPassword,
    });
    const token = await this.tokenService.generateToken(newUser);

    await this.tokenService.saveToken(
      newUser.id,
      token.access_token,
      token.refresh_token,
    );

    return { ...token, user: newUser };
  }

  async refresh(refreshToken: string) {
    if (!refreshToken) {
      throw new HttpException(
        { status: HttpStatus.UNAUTHORIZED, error: 'Unauthorized' },
        HttpStatus.UNAUTHORIZED,
      );
    }

    const decodedData = await this.tokenService.validateTokenRefresh(
      refreshToken,
    );
    const user = await this.userService.getUser({ email: decodedData.email });
    const token = await this.tokenService.getTokenByRefresh(refreshToken);

    if (!decodedData || !token || !user) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: 'Unauthorized',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }

    const tokenData = await this.tokenService.generateToken(user);

    await this.tokenService.saveToken(
      user.id,
      tokenData.access_token,
      tokenData.refresh_token,
    );

    return { ...tokenData, user };
  }

  async logout(refreshToken: string) {
    try {
      await this.tokenService.deleteTokenByRefresh(refreshToken);
      return 'User logout';
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: "User doesn't logout",
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
