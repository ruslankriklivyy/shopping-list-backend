import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutShopping_listsInput } from './user-update-without-shopping-lists.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutShopping_listsInput } from './user-create-without-shopping-lists.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutShopping_listsInput {

    @Field(() => UserUpdateWithoutShopping_listsInput, {nullable:false})
    @Type(() => UserUpdateWithoutShopping_listsInput)
    update!: UserUpdateWithoutShopping_listsInput;

    @Field(() => UserCreateWithoutShopping_listsInput, {nullable:false})
    @Type(() => UserCreateWithoutShopping_listsInput)
    create!: UserCreateWithoutShopping_listsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
