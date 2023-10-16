import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateNestedOneWithoutCategoriesInput } from '../file/file-create-nested-one-without-categories.input';

@InputType()
export class CategoryCreateWithoutShopping_list_itemsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => FileCreateNestedOneWithoutCategoriesInput, {nullable:false})
    icon!: FileCreateNestedOneWithoutCategoriesInput;
}
