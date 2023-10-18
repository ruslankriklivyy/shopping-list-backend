import { Module } from '@nestjs/common';

import { ShoppingListItemService } from './shopping-list-item.service';
import { ShoppingListItemResolver } from './shopping-list-item.resolver';
import { PrismaModule } from '@/shared/database/prisma.module';
import { ShoppingListItemRepository } from '@/modules/shopping-list-item/shopping-list-item.repository';

@Module({
  imports: [PrismaModule],
  providers: [
    ShoppingListItemResolver,
    ShoppingListItemService,
    ShoppingListItemRepository,
  ],
})
export class ShoppingListItemModule {}
