import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShoppingListWhereUniqueInput } from './shopping-list-where-unique.input';
import { Type } from 'class-transformer';
import { ShoppingListCreateWithoutShopping_list_itemsInput } from './shopping-list-create-without-shopping-list-items.input';

@InputType()
export class ShoppingListCreateOrConnectWithoutShopping_list_itemsInput {

    @Field(() => ShoppingListWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingListWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingListWhereUniqueInput, 'id'>;

    @Field(() => ShoppingListCreateWithoutShopping_list_itemsInput, {nullable:false})
    @Type(() => ShoppingListCreateWithoutShopping_list_itemsInput)
    create!: ShoppingListCreateWithoutShopping_list_itemsInput;
}
