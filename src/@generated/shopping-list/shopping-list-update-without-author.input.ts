import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShoppingListUserUpdateManyWithoutShopping_listNestedInput } from '../shopping-list-user/shopping-list-user-update-many-without-shopping-list-nested.input';
import { ShoppingListItemUpdateManyWithoutShopping_listNestedInput } from '../shopping-list-item/shopping-list-item-update-many-without-shopping-list-nested.input';

@InputType()
export class ShoppingListUpdateWithoutAuthorInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => Int, {nullable:true})
    progress?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ShoppingListUserUpdateManyWithoutShopping_listNestedInput, {nullable:true})
    responsibles?: ShoppingListUserUpdateManyWithoutShopping_listNestedInput;

    @Field(() => ShoppingListItemUpdateManyWithoutShopping_listNestedInput, {nullable:true})
    shopping_list_items?: ShoppingListItemUpdateManyWithoutShopping_listNestedInput;
}
