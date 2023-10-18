import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '@/shared/database/prisma.service';
import { Params } from '@/types/general/params';

@Injectable()
export class RoleRepository {
  constructor(private readonly prisma: PrismaService) {}

  getRole(where?: Prisma.RoleWhereInput) {
    return this.prisma.role.findFirst({ where });
  }

  getRoles(params: Params) {
    const { skip, take } = params;
    return this.prisma.role.findMany({ skip, take, include: { users: true } });
  }

  createRole(data: Prisma.RoleCreateInput) {
    return this.prisma.role.create({ data });
  }

  updateRole(where: Prisma.RoleWhereUniqueInput, data: Prisma.RoleUpdateInput) {
    return this.prisma.role.update({ where, data });
  }

  deleteRole(where: Prisma.RoleWhereUniqueInput) {
    return this.prisma.role.delete({ where });
  }
}
