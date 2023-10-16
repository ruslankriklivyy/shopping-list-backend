import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileUpdateOneRequiredWithoutCategoriesNestedInput } from '../file/file-update-one-required-without-categories-nested.input';
import { ShoppingListItemUpdateManyWithoutCategoryNestedInput } from '../shopping-list-item/shopping-list-item-update-many-without-category-nested.input';

@InputType()
export class CategoryUpdateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => FileUpdateOneRequiredWithoutCategoriesNestedInput, {nullable:true})
    icon?: FileUpdateOneRequiredWithoutCategoriesNestedInput;

    @Field(() => ShoppingListItemUpdateManyWithoutCategoryNestedInput, {nullable:true})
    shopping_list_items?: ShoppingListItemUpdateManyWithoutCategoryNestedInput;
}
