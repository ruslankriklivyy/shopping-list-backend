import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { UserRepository } from './user.repository';
import { PrismaModule } from '../../shared/database/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UserResolver, UserService, UserRepository],
  exports: [UserResolver, UserService, UserRepository],
})
export class UserModule {}
