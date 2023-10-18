import { Module } from '@nestjs/common';
import { ShoppingListUserService } from './shopping-list-user.service';
import { ShoppingListUserResolver } from './shopping-list-user.resolver';

@Module({
  providers: [ShoppingListUserResolver, ShoppingListUserService]
})
export class ShoppingListUserModule {}
