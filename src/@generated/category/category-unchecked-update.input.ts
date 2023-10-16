import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShoppingListItemUncheckedUpdateManyWithoutCategoryNestedInput } from '../shopping-list-item/shopping-list-item-unchecked-update-many-without-category-nested.input';

@InputType()
export class CategoryUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:true})
    icon_id?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ShoppingListItemUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    shopping_list_items?: ShoppingListItemUncheckedUpdateManyWithoutCategoryNestedInput;
}
