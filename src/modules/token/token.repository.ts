import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '@/shared/database/prisma.service';

@Injectable()
export class TokenRepository {
  constructor(private readonly prisma: PrismaService) {}

  getToken(where?: Prisma.TokenWhereInput) {
    return this.prisma.token.findFirst({ where });
  }

  createToken(data: Prisma.TokenCreateInput) {
    return this.prisma.token.create({ data });
  }

  updateToken(
    where: Prisma.TokenWhereUniqueInput,
    data: Prisma.TokenUpdateInput,
  ) {
    return this.prisma.token.update({ where, data });
  }

  deleteToken(where: Prisma.TokenWhereUniqueInput) {
    return this.prisma.token.delete({ where });
  }
}
