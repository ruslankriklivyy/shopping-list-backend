import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShoppingListItemUncheckedCreateNestedManyWithoutCategoryInput } from '../shopping-list-item/shopping-list-item-unchecked-create-nested-many-without-category.input';

@InputType()
export class CategoryUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    icon_id!: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ShoppingListItemUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    shopping_list_items?: ShoppingListItemUncheckedCreateNestedManyWithoutCategoryInput;
}
