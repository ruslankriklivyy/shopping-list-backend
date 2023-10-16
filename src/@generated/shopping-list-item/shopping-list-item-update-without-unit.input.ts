import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { CategoryUpdateOneRequiredWithoutShopping_list_itemsNestedInput } from '../category/category-update-one-required-without-shopping-list-items-nested.input';

@InputType()
export class ShoppingListItemUpdateWithoutUnitInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Float, {nullable:true})
    quantity?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => CategoryUpdateOneRequiredWithoutShopping_list_itemsNestedInput, {nullable:true})
    category?: CategoryUpdateOneRequiredWithoutShopping_list_itemsNestedInput;
}
