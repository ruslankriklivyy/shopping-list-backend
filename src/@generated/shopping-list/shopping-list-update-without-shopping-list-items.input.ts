import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserUpdateOneWithoutOwn_shopping_listsNestedInput } from '../user/user-update-one-without-own-shopping-lists-nested.input';
import { ShoppingListUserUpdateManyWithoutShopping_listNestedInput } from '../shopping-list-user/shopping-list-user-update-many-without-shopping-list-nested.input';

@InputType()
export class ShoppingListUpdateWithoutShopping_list_itemsInput {

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

    @Field(() => UserUpdateOneWithoutOwn_shopping_listsNestedInput, {nullable:true})
    author?: UserUpdateOneWithoutOwn_shopping_listsNestedInput;

    @Field(() => ShoppingListUserUpdateManyWithoutShopping_listNestedInput, {nullable:true})
    responsibles?: ShoppingListUserUpdateManyWithoutShopping_listNestedInput;
}
