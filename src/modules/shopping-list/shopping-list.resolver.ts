import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { ShoppingListService } from './shopping-list.service';
import { ShoppingList } from '@/modules/shopping-list/shopping-list.model';
import { GetShoppingListArgs } from '@/modules/shopping-list/dto/args/get-shopping-list.args';
import { GetWithPaginationArgs } from '@/shared/dto/args/get-with-pagination.args';
import { CreateShoppingListInput } from '@/modules/shopping-list/dto/inputs/create-shopping-list.input';
import { CurrentUser } from '@/decorators/current-user.decorator';
import { User } from '@/modules/user/user.model';
import { UpdateShoppingListInput } from '@/modules/shopping-list/dto/inputs/update-shopping-list.input';
import { UpdateShoppingListArgs } from '@/modules/shopping-list/dto/args/update-shopping-list.args';
import { UserService } from '@/modules/user/user.service';

@Resolver('ShoppingList')
export class ShoppingListResolver {
  constructor(
    private readonly shoppingListService: ShoppingListService,
    private readonly userService: UserService,
  ) {}

  @Query(() => ShoppingList)
  getShoppingList(@Args() getShoppingListArgs: GetShoppingListArgs) {
    return this.shoppingListService.getShoppingList(getShoppingListArgs);
  }

  @Query(() => [ShoppingList])
  getShoppingLists(@Args() getWithPaginationArgs: GetWithPaginationArgs) {
    return this.shoppingListService.getShoppingLists(getWithPaginationArgs);
  }

  @Mutation(() => ShoppingList)
  createShoppingList(
    @CurrentUser() user: User,
    @Args('createShoppingListInput')
    createShoppingListInput: CreateShoppingListInput,
  ) {
    return this.shoppingListService.createShoppingList(
      user.id,
      createShoppingListInput,
    );
  }

  @Mutation(() => ShoppingList)
  updateShoppingList(
    @Args() updateShoppingListArgs: UpdateShoppingListArgs,
    @Args('updateShoppingListInput')
    updateShoppingListInput: UpdateShoppingListInput,
  ) {
    return this.shoppingListService.updateShoppingList(
      updateShoppingListArgs,
      updateShoppingListInput,
    );
  }

  @Mutation(() => ShoppingList)
  deleteShoppingList(@Args() deleteShoppingListArgs: GetShoppingListArgs) {
    return this.shoppingListService.deleteShoppingList(deleteShoppingListArgs);
  }

  @ResolveField('author', () => User)
  async getUsersByShoppingList(@Parent() shoppingList: ShoppingList) {
    return this.userService.getUserByShoppingList(shoppingList.id);
  }
}
