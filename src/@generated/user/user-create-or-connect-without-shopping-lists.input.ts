import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutShopping_listsInput } from './user-create-without-shopping-lists.input';

@InputType()
export class UserCreateOrConnectWithoutShopping_listsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutShopping_listsInput, {nullable:false})
    @Type(() => UserCreateWithoutShopping_listsInput)
    create!: UserCreateWithoutShopping_listsInput;
}
