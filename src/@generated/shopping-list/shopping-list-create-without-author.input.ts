import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShoppingListUserCreateNestedManyWithoutShopping_listInput } from '../shopping-list-user/shopping-list-user-create-nested-many-without-shopping-list.input';
import { ShoppingListItemCreateNestedManyWithoutShopping_listInput } from '../shopping-list-item/shopping-list-item-create-nested-many-without-shopping-list.input';

@InputType()
export class ShoppingListCreateWithoutAuthorInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    color!: string;

    @Field(() => Int, {nullable:false})
    progress!: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ShoppingListUserCreateNestedManyWithoutShopping_listInput, {nullable:true})
    responsibles?: ShoppingListUserCreateNestedManyWithoutShopping_listInput;

    @Field(() => ShoppingListItemCreateNestedManyWithoutShopping_listInput, {nullable:true})
    shopping_list_items?: ShoppingListItemCreateNestedManyWithoutShopping_listInput;
}
