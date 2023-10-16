import { Module } from '@nestjs/common';

import { TokenService } from './token.service';
import { TokenRepository } from '@/modules/token/token.repository';
import { PrismaModule } from '@/shared/database/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TokenService, TokenRepository],
})
export class TokenModule {}
