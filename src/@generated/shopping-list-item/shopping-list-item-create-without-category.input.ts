import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { UnitCreateNestedOneWithoutShopping_list_itemsInput } from '../unit/unit-create-nested-one-without-shopping-list-items.input';
import { ShoppingListCreateNestedOneWithoutShopping_list_itemsInput } from '../shopping-list/shopping-list-create-nested-one-without-shopping-list-items.input';

@InputType()
export class ShoppingListItemCreateWithoutCategoryInput {

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

    @Field(() => UnitCreateNestedOneWithoutShopping_list_itemsInput, {nullable:false})
    unit!: UnitCreateNestedOneWithoutShopping_list_itemsInput;

    @Field(() => ShoppingListCreateNestedOneWithoutShopping_list_itemsInput, {nullable:false})
    shopping_list!: ShoppingListCreateNestedOneWithoutShopping_list_itemsInput;
}
