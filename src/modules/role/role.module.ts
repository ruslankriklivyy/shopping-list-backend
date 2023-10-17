import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleResolver } from './role.resolver';
import { RoleRepository } from '@/modules/role/role.repository';
import { PrismaModule } from '@/shared/database/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [RoleResolver, RoleService, RoleRepository],
})
export class RoleModule {}
