import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { CategoryUncheckedUpdateManyWithoutIconNestedInput } from '../category/category-unchecked-update-many-without-icon-nested.input';

@InputType()
export class FileUncheckedUpdateWithoutUsersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => CategoryUncheckedUpdateManyWithoutIconNestedInput, {nullable:true})
    categories?: CategoryUncheckedUpdateManyWithoutIconNestedInput;
}
