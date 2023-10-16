import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { UserUpdateManyWithoutAvatarNestedInput } from '../user/user-update-many-without-avatar-nested.input';
import { CategoryUpdateManyWithoutIconNestedInput } from '../category/category-update-many-without-icon-nested.input';

@InputType()
export class FileUpdateInput {

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

    @Field(() => UserUpdateManyWithoutAvatarNestedInput, {nullable:true})
    users?: UserUpdateManyWithoutAvatarNestedInput;

    @Field(() => CategoryUpdateManyWithoutIconNestedInput, {nullable:true})
    categories?: CategoryUpdateManyWithoutIconNestedInput;
}
