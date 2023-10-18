import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShoppingListItemWhereUniqueInput } from './shopping-list-item-where-unique.input';
import { Type } from 'class-transformer';
import { ShoppingListItemCreateWithoutShopping_listInput } from './shopping-list-item-create-without-shopping-list.input';

@InputType()
export class ShoppingListItemCreateOrConnectWithoutShopping_listInput {

    @Field(() => ShoppingListItemWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingListItemWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingListItemWhereUniqueInput, 'id'>;

    @Field(() => ShoppingListItemCreateWithoutShopping_listInput, {nullable:false})
    @Type(() => ShoppingListItemCreateWithoutShopping_listInput)
    create!: ShoppingListItemCreateWithoutShopping_listInput;
}
