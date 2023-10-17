import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '@/shared/database/prisma.service';

@Injectable()
export class RoleRepository {
  constructor(private readonly prisma: PrismaService) {}

  getRole(where?: Prisma.RoleWhereInput) {
    return this.prisma.role.findFirst({ where });
  }

  getRoles(params: { skip?: number; take?: number; orderBy?: string }) {
    const { skip, take } = params;
    return this.prisma.role.findMany({ skip, take });
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
