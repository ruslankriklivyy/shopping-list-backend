import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutAvatarInput } from '../user/user-unchecked-create-nested-many-without-avatar.input';

@InputType()
export class FileUncheckedCreateWithoutCategoriesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => UserUncheckedCreateNestedManyWithoutAvatarInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutAvatarInput;
}
