import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ShoppingListCreateNestedOneWithoutShopping_list_itemsInput } from '../shopping-list/shopping-list-create-nested-one-without-shopping-list-items.input';
import { CategoryCreateNestedOneWithoutShopping_list_itemsInput } from '../category/category-create-nested-one-without-shopping-list-items.input';

@InputType()
export class ShoppingListItemCreateWithoutUnitInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => Boolean, {nullable:true})
    is_completed?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ShoppingListCreateNestedOneWithoutShopping_list_itemsInput, {nullable:false})
    shopping_list!: ShoppingListCreateNestedOneWithoutShopping_list_itemsInput;

    @Field(() => CategoryCreateNestedOneWithoutShopping_list_itemsInput, {nullable:false})
    category!: CategoryCreateNestedOneWithoutShopping_list_itemsInput;
}
