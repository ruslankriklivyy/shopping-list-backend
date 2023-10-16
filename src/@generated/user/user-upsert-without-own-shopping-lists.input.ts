import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutOwn_shopping_listsInput } from './user-update-without-own-shopping-lists.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutOwn_shopping_listsInput } from './user-create-without-own-shopping-lists.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutOwn_shopping_listsInput {

    @Field(() => UserUpdateWithoutOwn_shopping_listsInput, {nullable:false})
    @Type(() => UserUpdateWithoutOwn_shopping_listsInput)
    update!: UserUpdateWithoutOwn_shopping_listsInput;

    @Field(() => UserCreateWithoutOwn_shopping_listsInput, {nullable:false})
    @Type(() => UserCreateWithoutOwn_shopping_listsInput)
    create!: UserCreateWithoutOwn_shopping_listsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
