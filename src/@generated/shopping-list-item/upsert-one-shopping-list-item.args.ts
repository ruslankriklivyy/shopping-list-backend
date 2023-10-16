import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShoppingListItemWhereUniqueInput } from './shopping-list-item-where-unique.input';
import { Type } from 'class-transformer';
import { ShoppingListItemCreateInput } from './shopping-list-item-create.input';
import { ShoppingListItemUpdateInput } from './shopping-list-item-update.input';

@ArgsType()
export class UpsertOneShoppingListItemArgs {

    @Field(() => ShoppingListItemWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingListItemWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingListItemWhereUniqueInput, 'id'>;

    @Field(() => ShoppingListItemCreateInput, {nullable:false})
    @Type(() => ShoppingListItemCreateInput)
    create!: ShoppingListItemCreateInput;

    @Field(() => ShoppingListItemUpdateInput, {nullable:false})
    @Type(() => ShoppingListItemUpdateInput)
    update!: ShoppingListItemUpdateInput;
}
