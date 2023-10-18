import { Module } from '@nestjs/common';

import { ShoppingListService } from './shopping-list.service';
import { ShoppingListResolver } from './shopping-list.resolver';
import { ShoppingListRepository } from '@/modules/shopping-list/shopping-list.repository';
import { PrismaModule } from '@/shared/database/prisma.module';
import { UserService } from '@/modules/user/user.service';
import { UserRepository } from '@/modules/user/user.repository';

@Module({
  imports: [PrismaModule],
  providers: [
    ShoppingListResolver,
    ShoppingListService,
    ShoppingListRepository,
    UserService,
    UserRepository,
  ],
})
export class ShoppingListModule {}
