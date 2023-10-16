import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileUpdateOneRequiredWithoutCategoriesNestedInput } from '../file/file-update-one-required-without-categories-nested.input';

@InputType()
export class CategoryUpdateWithoutShopping_list_itemsInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => FileUpdateOneRequiredWithoutCategoriesNestedInput, {nullable:true})
    icon?: FileUpdateOneRequiredWithoutCategoriesNestedInput;
}
