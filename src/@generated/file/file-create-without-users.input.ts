import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { CategoryCreateNestedManyWithoutIconInput } from '../category/category-create-nested-many-without-icon.input';

@InputType()
export class FileCreateWithoutUsersInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    file_name!: string;

    @Field(() => Float, {nullable:false})
    size!: number;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => CategoryCreateNestedManyWithoutIconInput, {nullable:true})
    categories?: CategoryCreateNestedManyWithoutIconInput;
}
