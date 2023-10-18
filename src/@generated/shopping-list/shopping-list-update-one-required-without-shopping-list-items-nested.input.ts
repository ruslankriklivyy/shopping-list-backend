import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListCreateWithoutShopping_list_itemsInput } from './shopping-list-create-without-shopping-list-items.input';
import { Type } from 'class-transformer';
import { ShoppingListCreateOrConnectWithoutShopping_list_itemsInput } from './shopping-list-create-or-connect-without-shopping-list-items.input';
import { ShoppingListUpsertWithoutShopping_list_itemsInput } from './shopping-list-upsert-without-shopping-list-items.input';
import { Prisma } from '@prisma/client';
import { ShoppingListWhereUniqueInput } from './shopping-list-where-unique.input';
import { ShoppingListUpdateToOneWithWhereWithoutShopping_list_itemsInput } from './shopping-list-update-to-one-with-where-without-shopping-list-items.input';

@InputType()
export class ShoppingListUpdateOneRequiredWithoutShopping_list_itemsNestedInput {

    @Field(() => ShoppingListCreateWithoutShopping_list_itemsInput, {nullable:true})
    @Type(() => ShoppingListCreateWithoutShopping_list_itemsInput)
    create?: ShoppingListCreateWithoutShopping_list_itemsInput;

    @Field(() => ShoppingListCreateOrConnectWithoutShopping_list_itemsInput, {nullable:true})
    @Type(() => ShoppingListCreateOrConnectWithoutShopping_list_itemsInput)
    connectOrCreate?: ShoppingListCreateOrConnectWithoutShopping_list_itemsInput;

    @Field(() => ShoppingListUpsertWithoutShopping_list_itemsInput, {nullable:true})
    @Type(() => ShoppingListUpsertWithoutShopping_list_itemsInput)
    upsert?: ShoppingListUpsertWithoutShopping_list_itemsInput;

    @Field(() => ShoppingListWhereUniqueInput, {nullable:true})
    @Type(() => ShoppingListWhereUniqueInput)
    connect?: Prisma.AtLeast<ShoppingListWhereUniqueInput, 'id'>;

    @Field(() => ShoppingListUpdateToOneWithWhereWithoutShopping_list_itemsInput, {nullable:true})
    @Type(() => ShoppingListUpdateToOneWithWhereWithoutShopping_list_itemsInput)
    update?: ShoppingListUpdateToOneWithWhereWithoutShopping_list_itemsInput;
}
