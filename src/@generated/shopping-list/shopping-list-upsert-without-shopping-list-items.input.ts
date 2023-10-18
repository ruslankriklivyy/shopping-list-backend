import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListUpdateWithoutShopping_list_itemsInput } from './shopping-list-update-without-shopping-list-items.input';
import { Type } from 'class-transformer';
import { ShoppingListCreateWithoutShopping_list_itemsInput } from './shopping-list-create-without-shopping-list-items.input';
import { ShoppingListWhereInput } from './shopping-list-where.input';

@InputType()
export class ShoppingListUpsertWithoutShopping_list_itemsInput {

    @Field(() => ShoppingListUpdateWithoutShopping_list_itemsInput, {nullable:false})
    @Type(() => ShoppingListUpdateWithoutShopping_list_itemsInput)
    update!: ShoppingListUpdateWithoutShopping_list_itemsInput;

    @Field(() => ShoppingListCreateWithoutShopping_list_itemsInput, {nullable:false})
    @Type(() => ShoppingListCreateWithoutShopping_list_itemsInput)
    create!: ShoppingListCreateWithoutShopping_list_itemsInput;

    @Field(() => ShoppingListWhereInput, {nullable:true})
    @Type(() => ShoppingListWhereInput)
    where?: ShoppingListWhereInput;
}
