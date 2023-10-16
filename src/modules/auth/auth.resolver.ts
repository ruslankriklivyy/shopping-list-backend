import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthResult, LoginInput } from '@/modules/auth/dto/inputs/login.input';
import { RegisterInput } from '@/modules/auth/dto/inputs/register.input';
import { JwtAuthGuard } from '@/modules/auth/guards/jwt-auth.guard';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResult)
  login(@Args('user') user: LoginInput) {
    return this.authService.login(user);
  }

  @Mutation(() => AuthResult)
  register(@Args('user') user: RegisterInput) {
    console.log('user', user);
    return this.authService.register(user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => String)
  logout(@Args('refreshToken') refreshToken: string) {
    return this.authService.logout(refreshToken);
  }

  @Mutation(() => AuthResult)
  refresh(@Args('refreshToken') refreshToken: string) {
    return this.authService.refresh(refreshToken);
  }
}
