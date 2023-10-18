import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateNestedOneWithoutCategoriesInput } from '../file/file-create-nested-one-without-categories.input';
import { ShoppingListItemCreateNestedManyWithoutCategoryInput } from '../shopping-list-item/shopping-list-item-create-nested-many-without-category.input';

@InputType()
export class CategoryCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => FileCreateNestedOneWithoutCategoriesInput, {nullable:true})
    icon?: FileCreateNestedOneWithoutCategoriesInput;

    @Field(() => ShoppingListItemCreateNestedManyWithoutCategoryInput, {nullable:true})
    shopping_list_items?: ShoppingListItemCreateNestedManyWithoutCategoryInput;
}
