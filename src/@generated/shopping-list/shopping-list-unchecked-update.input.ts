import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShoppingListUserUncheckedUpdateManyWithoutShopping_listNestedInput } from '../shopping-list-user/shopping-list-user-unchecked-update-many-without-shopping-list-nested.input';
import { ShoppingListItemUncheckedUpdateManyWithoutShopping_listNestedInput } from '../shopping-list-item/shopping-list-item-unchecked-update-many-without-shopping-list-nested.input';

@InputType()
export class ShoppingListUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => Int, {nullable:true})
    progress?: number;

    @Field(() => Int, {nullable:true})
    author_id?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ShoppingListUserUncheckedUpdateManyWithoutShopping_listNestedInput, {nullable:true})
    responsibles?: ShoppingListUserUncheckedUpdateManyWithoutShopping_listNestedInput;

    @Field(() => ShoppingListItemUncheckedUpdateManyWithoutShopping_listNestedInput, {nullable:true})
    shopping_list_items?: ShoppingListItemUncheckedUpdateManyWithoutShopping_listNestedInput;
}
