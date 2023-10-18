import { Injectable } from '@nestjs/common';

import { ShoppingListItemRepository } from '@/modules/shopping-list-item/shopping-list-item.repository';
import { CreateShoppingListItemInput } from '@/modules/shopping-list-item/dto/inputs/create-shopping-list-item.input';
import { GetShoppingListItemArgs } from '@/modules/shopping-list-item/dto/args/get-shopping-list-item.args';
import { GetWithPaginationArgs } from '@/shared/dto/args/get-with-pagination.args';
import { UpdateShoppingListItemArgs } from '@/modules/shopping-list-item/dto/args/update-shopping-list-item.args';
import { UpdateShoppingListItemInput } from '@/modules/shopping-list-item/dto/inputs/update-shopping-list-item.input';
import { DeleteShoppingListItemArgs } from '@/modules/shopping-list-item/dto/args/delete-shopping-list-item.args';

@Injectable()
export class ShoppingListItemService {
  constructor(
    private readonly shoppingListItemRepository: ShoppingListItemRepository,
  ) {}

  public getShoppingListItem(getShoppingListItemArgs: GetShoppingListItemArgs) {
    return this.shoppingListItemRepository.getShoppingListItem(
      getShoppingListItemArgs,
    );
  }

  public getShoppingListItems(getWithPaginationArgs: GetWithPaginationArgs) {
    return this.shoppingListItemRepository.getShoppingListItems(
      getWithPaginationArgs,
    );
  }

  public createShoppingListItem(
    createShoppingListItemInput: CreateShoppingListItemInput,
  ) {
    return this.shoppingListItemRepository.createShoppingListItem({
      ...createShoppingListItemInput,
      shopping_list: {
        connect: { id: createShoppingListItemInput.shopping_list_id },
      },
      unit: { connect: { id: createShoppingListItemInput.unit_id } },
      category: { connect: { id: createShoppingListItemInput.category_id } },
    });
  }

  public updateShoppingListItem(
    updateShoppingListItemArgs: UpdateShoppingListItemArgs,
    updateShoppingListItemInput: UpdateShoppingListItemInput,
  ) {
    return this.shoppingListItemRepository.updateShoppingListItem(
      updateShoppingListItemArgs,
      updateShoppingListItemInput,
    );
  }

  deleteShoppingListItem(
    deleteShoppingListItemArgs: DeleteShoppingListItemArgs,
  ) {
    return this.shoppingListItemRepository.deleteShoppingListItem(
      deleteShoppingListItemArgs,
    );
  }
}
