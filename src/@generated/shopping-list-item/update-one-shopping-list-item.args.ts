import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingListItemUpdateInput } from './shopping-list-item-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ShoppingListItemWhereUniqueInput } from './shopping-list-item-where-unique.input';

@ArgsType()
export class UpdateOneShoppingListItemArgs {

    @Field(() => ShoppingListItemUpdateInput, {nullable:false})
    @Type(() => ShoppingListItemUpdateInput)
    data!: ShoppingListItemUpdateInput;

    @Field(() => ShoppingListItemWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingListItemWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingListItemWhereUniqueInput, 'id'>;
}
