import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { CategoryUpdateManyWithoutIconNestedInput } from '../category/category-update-many-without-icon-nested.input';

@InputType()
export class FileUpdateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    file_name?: string;

    @Field(() => Float, {nullable:true})
    size?: number;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => CategoryUpdateManyWithoutIconNestedInput, {nullable:true})
    categories?: CategoryUpdateManyWithoutIconNestedInput;
}
