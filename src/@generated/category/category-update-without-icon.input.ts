import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListItemUpdateManyWithoutCategoryNestedInput } from '../shopping-list-item/shopping-list-item-update-many-without-category-nested.input';

@InputType()
export class CategoryUpdateWithoutIconInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ShoppingListItemUpdateManyWithoutCategoryNestedInput, {nullable:true})
    shopping_list_items?: ShoppingListItemUpdateManyWithoutCategoryNestedInput;
}
