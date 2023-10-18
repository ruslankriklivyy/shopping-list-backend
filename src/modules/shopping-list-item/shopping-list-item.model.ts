import {
  Field,
  Float,
  Int,
  GraphQLISODateTime,
  ObjectType,
} from '@nestjs/graphql';
import { ShoppingListItem as ShoppingListItemModel } from '@prisma/client';
import { Category } from '@/modules/category/category.model';
import { ShoppingList } from '@/modules/shopping-list/shopping-list.model';
import { Unit } from '@/modules/unit/unit.model';

@ObjectType()
export class ShoppingListItem {
  @Field(() => Int)
  id: ShoppingListItemModel['id'];

  @Field(() => String)
  name: ShoppingListItemModel['name'];

  @Field(() => Float)
  quantity: ShoppingListItemModel['quantity'];

  @Field(() => Boolean)
  is_completed: ShoppingListItemModel['is_completed'];

  @Field(() => Unit)
  unit: Unit;

  @Field(() => Category)
  category: Category;

  @Field(() => ShoppingList)
  shopping_list: ShoppingList;

  @Field(() => GraphQLISODateTime)
  created_at: ShoppingListItemModel['created_at'];

  @Field(() => GraphQLISODateTime)
  updated_at: ShoppingListItemModel['updated_at'];
}
