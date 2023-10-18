import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '@/shared/database/prisma.service';
import { Params } from '@/types/general/params';

@Injectable()
export class ShoppingListRepository {
  constructor(private readonly prisma: PrismaService) {}

  getShoppingList(where?: Prisma.ShoppingListWhereInput) {
    return this.prisma.shoppingList.findFirst({
      where,
    });
  }

  getShoppingLists(params?: Params) {
    const { skip, take } = params;
    return this.prisma.shoppingList.findMany({
      skip,
      take,
    });
  }

  createShoppingList(
    data: Prisma.ShoppingListCreateInput & { author_id: number },
  ) {
    return this.prisma.shoppingList.create({
      data: {
        name: data.name,
        color: data.color,
        author: { connect: { id: data.author_id } },
        progress: data.progress,
      },
    });
  }

  updateShoppingList(
    where?: Prisma.ShoppingListWhereUniqueInput,
    data?: Prisma.ShoppingListUpdateInput,
  ) {
    return this.prisma.shoppingList.update({
      where,
      data,
      include: { author: true },
    });
  }

  deleteShoppingList(where?: Prisma.ShoppingListWhereUniqueInput) {
    return this.prisma.shoppingList.delete({ where });
  }
}
