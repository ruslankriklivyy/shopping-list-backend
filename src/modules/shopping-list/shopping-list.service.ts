import { Injectable } from '@nestjs/common';

import { ShoppingListRepository } from '@/modules/shopping-list/shopping-list.repository';
import { GetShoppingListArgs } from '@/modules/shopping-list/dto/args/get-shopping-list.args';
import { GetWithPaginationArgs } from '@/shared/dto/args/get-with-pagination.args';
import { CreateShoppingListInput } from '@/modules/shopping-list/dto/inputs/create-shopping-list.input';
import { UpdateShoppingListInput } from '@/modules/shopping-list/dto/inputs/update-shopping-list.input';
import { UpdateShoppingListArgs } from '@/modules/shopping-list/dto/args/update-shopping-list.args';

@Injectable()
export class ShoppingListService {
  constructor(
    private readonly shoppingListRepository: ShoppingListRepository,
  ) {}

  public getShoppingList(getShoppingListArgs: GetShoppingListArgs) {
    return this.shoppingListRepository.getShoppingList(getShoppingListArgs);
  }

  public getShoppingLists(getWithPaginationArgs: GetWithPaginationArgs) {
    return this.shoppingListRepository.getShoppingLists(getWithPaginationArgs);
  }

  public async createShoppingList(
    userId: number,
    createShoppingListInput: CreateShoppingListInput,
  ) {
    const newShoppingList =
      await this.shoppingListRepository.createShoppingList({
        ...createShoppingListInput,
        author_id: userId,
        progress: 0,
      });

    await this.updateShoppingList(
      { id: newShoppingList.id, userId },
      {
        responsibles: [userId],
      },
    );
  }

  public updateShoppingList(
    updateShoppingListArgs: UpdateShoppingListArgs,
    updateShoppingListInput: UpdateShoppingListInput,
  ) {
    return this.shoppingListRepository.updateShoppingList(
      updateShoppingListArgs,
      {
        ...updateShoppingListInput,
        responsibles: {
          connect: {
            user_id_shopping_list_id: {
              user_id: updateShoppingListArgs.userId,
              shopping_list_id: updateShoppingListArgs.id,
            },
          },
        },
      },
    );
  }

  public deleteShoppingList(deleteShoppingListArgs: GetShoppingListArgs) {
    return this.shoppingListRepository.deleteShoppingList(
      deleteShoppingListArgs,
    );
  }
}
