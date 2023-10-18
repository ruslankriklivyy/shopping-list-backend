import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { ShoppingListItemService } from './shopping-list-item.service';
import { JwtAuthGuard } from '@/modules/auth/guards/jwt-auth.guard';
import { ShoppingListItem } from '@/modules/shopping-list-item/shopping-list-item.model';
import { GetShoppingListItemArgs } from '@/modules/shopping-list-item/dto/args/get-shopping-list-item.args';
import { GetWithPaginationArgs } from '@/shared/dto/args/get-with-pagination.args';
import { CreateShoppingListItemInput } from '@/modules/shopping-list-item/dto/inputs/create-shopping-list-item.input';
import { UpdateShoppingListItemArgs } from '@/modules/shopping-list-item/dto/args/update-shopping-list-item.args';
import { UpdateShoppingListItemInput } from '@/modules/shopping-list-item/dto/inputs/update-shopping-list-item.input';
import { DeleteShoppingListItemArgs } from '@/modules/shopping-list-item/dto/args/delete-shopping-list-item.args';

@UseGuards(JwtAuthGuard)
@Resolver('ShoppingListItem')
export class ShoppingListItemResolver {
  constructor(
    private readonly shoppingListItemService: ShoppingListItemService,
  ) {}

  @Query(() => ShoppingListItem)
  getShoppingListItem(
    @Args() getShoppingListItemArgs: GetShoppingListItemArgs,
  ) {
    return this.shoppingListItemService.getShoppingListItem(
      getShoppingListItemArgs,
    );
  }

  @Query(() => [ShoppingListItem])
  getShoppingListItems(@Args() getWithPaginationArgs: GetWithPaginationArgs) {
    return this.shoppingListItemService.getShoppingListItems(
      getWithPaginationArgs,
    );
  }

  @Mutation(() => ShoppingListItem)
  createShoppingListItem(
    @Args('createShoppingListItemInput')
    createShoppingListItemInput: CreateShoppingListItemInput,
  ) {
    return this.shoppingListItemService.createShoppingListItem(
      createShoppingListItemInput,
    );
  }

  @Mutation(() => ShoppingListItem)
  updateShoppingListItem(
    @Args() updateShoppingListItem: UpdateShoppingListItemArgs,
    @Args('updateShoppingListItemInput')
    updateShoppingListItemInput: UpdateShoppingListItemInput,
  ) {
    return this.shoppingListItemService.updateShoppingListItem(
      updateShoppingListItem,
      updateShoppingListItemInput,
    );
  }

  @Mutation(() => ShoppingListItem)
  deleteShoppingListItem(
    @Args() deleteShoppingListItemArgs: DeleteShoppingListItemArgs,
  ) {
    return this.shoppingListItemService.deleteShoppingListItem(
      deleteShoppingListItemArgs,
    );
  }
}
