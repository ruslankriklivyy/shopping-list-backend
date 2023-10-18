import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '@/shared/database/prisma.service';
import { Params } from '@/types/general/params';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  getUsers(params: Params) {
    const { skip, take } = params;
    return this.prisma.user.findMany({ skip, take });
  }

  getUser(where?: Prisma.UserWhereInput) {
    return this.prisma.user.findFirst({
      where,
      include: { role: true, avatar: true },
    });
  }

  createUser(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data });
  }

  updateUser(where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput) {
    return this.prisma.user.update({ where, data });
  }

  deleteUser(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({ where });
  }

  getUserByShoppingList(shoppingListId: number) {
    return this.prisma.user.findFirst({
      where: { own_shopping_lists: { every: { id: shoppingListId } } },
    });
  }
}
