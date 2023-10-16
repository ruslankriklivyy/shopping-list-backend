import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListItemCreateNestedManyWithoutCategoryInput } from '../shopping-list-item/shopping-list-item-create-nested-many-without-category.input';

@InputType()
export class CategoryCreateWithoutIconInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ShoppingListItemCreateNestedManyWithoutCategoryInput, {nullable:true})
    shopping_list_items?: ShoppingListItemCreateNestedManyWithoutCategoryInput;
}
