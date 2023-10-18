import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '@/shared/database/prisma.service';
import { Params } from '@/types/general/params';

@Injectable()
export class ShoppingListItemRepository {
  constructor(private readonly prisma: PrismaService) {}

  getShoppingListItem(where?: Prisma.ShoppingListItemWhereInput) {
    return this.prisma.shoppingListItem.findFirst({ where });
  }

  getShoppingListItems(params?: Params) {
    const { skip, take } = params;
    return this.prisma.shoppingListItem.findMany({ skip, take });
  }

  createShoppingListItem(data: Prisma.ShoppingListItemCreateInput) {
    return this.prisma.shoppingListItem.create({ data });
  }

  updateShoppingListItem(
    where?: Prisma.ShoppingListItemWhereUniqueInput,
    data?: Prisma.ShoppingListItemUpdateInput,
  ) {
    return this.prisma.shoppingListItem.update({ where, data });
  }

  deleteShoppingListItem(where?: Prisma.ShoppingListItemWhereUniqueInput) {
    return this.prisma.shoppingListItem.delete({ where });
  }
}
