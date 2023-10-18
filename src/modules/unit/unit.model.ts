import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import { Unit as UnitModel } from '@prisma/client';
import { ShoppingListItem } from '@/modules/shopping-list-item/shopping-list-item.model';

@ObjectType()
export class Unit {
  @Field(() => Int)
  id: UnitModel['id'];

  @Field(() => String)
  name: UnitModel['name'];

  @Field(() => String)
  value: UnitModel['value'];

  @Field(() => [ShoppingListItem], { nullable: true })
  shopping_list_items?: ShoppingListItem[];

  @Field(() => GraphQLISODateTime)
  created_at: UnitModel['created_at'];

  @Field(() => GraphQLISODateTime)
  updated_at: UnitModel['updated_at'];
}
