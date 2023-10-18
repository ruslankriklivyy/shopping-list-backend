import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShoppingListItemWhereUniqueInput } from './shopping-list-item-where-unique.input';
import { Type } from 'class-transformer';
import { ShoppingListItemUpdateWithoutShopping_listInput } from './shopping-list-item-update-without-shopping-list.input';

@InputType()
export class ShoppingListItemUpdateWithWhereUniqueWithoutShopping_listInput {

    @Field(() => ShoppingListItemWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingListItemWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingListItemWhereUniqueInput, 'id'>;

    @Field(() => ShoppingListItemUpdateWithoutShopping_listInput, {nullable:false})
    @Type(() => ShoppingListItemUpdateWithoutShopping_listInput)
    data!: ShoppingListItemUpdateWithoutShopping_listInput;
}
