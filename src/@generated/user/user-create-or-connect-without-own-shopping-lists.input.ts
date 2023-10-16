import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutOwn_shopping_listsInput } from './user-create-without-own-shopping-lists.input';

@InputType()
export class UserCreateOrConnectWithoutOwn_shopping_listsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutOwn_shopping_listsInput, {nullable:false})
    @Type(() => UserCreateWithoutOwn_shopping_listsInput)
    create!: UserCreateWithoutOwn_shopping_listsInput;
}
