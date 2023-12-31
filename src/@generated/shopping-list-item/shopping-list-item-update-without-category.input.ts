import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { UnitUpdateOneRequiredWithoutShopping_list_itemsNestedInput } from '../unit/unit-update-one-required-without-shopping-list-items-nested.input';
import { ShoppingListUpdateOneRequiredWithoutShopping_list_itemsNestedInput } from '../shopping-list/shopping-list-update-one-required-without-shopping-list-items-nested.input';

@InputType()
export class ShoppingListItemUpdateWithoutCategoryInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Float, {nullable:true})
    quantity?: number;

    @Field(() => Boolean, {nullable:true})
    is_completed?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => UnitUpdateOneRequiredWithoutShopping_list_itemsNestedInput, {nullable:true})
    unit?: UnitUpdateOneRequiredWithoutShopping_list_itemsNestedInput;

    @Field(() => ShoppingListUpdateOneRequiredWithoutShopping_list_itemsNestedInput, {nullable:true})
    shopping_list?: ShoppingListUpdateOneRequiredWithoutShopping_list_itemsNestedInput;
}
