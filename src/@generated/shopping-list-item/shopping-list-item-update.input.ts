import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { UnitUpdateOneRequiredWithoutShopping_list_itemsNestedInput } from '../unit/unit-update-one-required-without-shopping-list-items-nested.input';
import { CategoryUpdateOneRequiredWithoutShopping_list_itemsNestedInput } from '../category/category-update-one-required-without-shopping-list-items-nested.input';

@InputType()
export class ShoppingListItemUpdateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Float, {nullable:true})
    quantity?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => UnitUpdateOneRequiredWithoutShopping_list_itemsNestedInput, {nullable:true})
    unit?: UnitUpdateOneRequiredWithoutShopping_list_itemsNestedInput;

    @Field(() => CategoryUpdateOneRequiredWithoutShopping_list_itemsNestedInput, {nullable:true})
    category?: CategoryUpdateOneRequiredWithoutShopping_list_itemsNestedInput;
}
