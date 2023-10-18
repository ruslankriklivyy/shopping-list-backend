import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileUpdateOneWithoutCategoriesNestedInput } from '../file/file-update-one-without-categories-nested.input';

@InputType()
export class CategoryUpdateWithoutShopping_list_itemsInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => FileUpdateOneWithoutCategoriesNestedInput, {nullable:true})
    icon?: FileUpdateOneWithoutCategoriesNestedInput;
}
