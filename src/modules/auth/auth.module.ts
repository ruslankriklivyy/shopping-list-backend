import { Module } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { PrismaModule } from '@/shared/database/prisma.module';
import { TokenService } from '@/modules/token/token.service';
import { TokenRepository } from '@/modules/token/token.repository';

@Module({
  imports: [PrismaModule],
  providers: [
    AuthResolver,
    AuthService,
    UserService,
    UserRepository,
    TokenService,
    TokenRepository,
  ],
})
export class AuthModule {}
