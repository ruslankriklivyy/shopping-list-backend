import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import { ShoppingList as ShoppingListModel } from '@prisma/client';
import { User } from '@/modules/user/user.model';
import { IsOptional } from 'class-validator';

@ObjectType()
export class ShoppingList {
  @Field(() => Int)
  id: ShoppingListModel['id'];

  @Field(() => String)
  name: ShoppingListModel['name'];

  @Field(() => String)
  color: ShoppingListModel['color'];

  @Field(() => Int)
  progress: ShoppingListModel['progress'];

  @Field(() => User)
  @IsOptional()
  author?: User;

  @Field(() => GraphQLISODateTime)
  created_at: ShoppingListModel['created_at'];

  @Field(() => GraphQLISODateTime)
  updated_at: ShoppingListModel['updated_at'];
}
