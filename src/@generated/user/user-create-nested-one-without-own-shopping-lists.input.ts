import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOwn_shopping_listsInput } from './user-create-without-own-shopping-lists.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutOwn_shopping_listsInput } from './user-create-or-connect-without-own-shopping-lists.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutOwn_shopping_listsInput {

    @Field(() => UserCreateWithoutOwn_shopping_listsInput, {nullable:true})
    @Type(() => UserCreateWithoutOwn_shopping_listsInput)
    create?: UserCreateWithoutOwn_shopping_listsInput;

    @Field(() => UserCreateOrConnectWithoutOwn_shopping_listsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutOwn_shopping_listsInput)
    connectOrCreate?: UserCreateOrConnectWithoutOwn_shopping_listsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
