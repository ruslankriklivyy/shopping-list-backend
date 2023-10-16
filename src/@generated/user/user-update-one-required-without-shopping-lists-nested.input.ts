import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutShopping_listsInput } from './user-create-without-shopping-lists.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutShopping_listsInput } from './user-create-or-connect-without-shopping-lists.input';
import { UserUpsertWithoutShopping_listsInput } from './user-upsert-without-shopping-lists.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutShopping_listsInput } from './user-update-to-one-with-where-without-shopping-lists.input';

@InputType()
export class UserUpdateOneRequiredWithoutShopping_listsNestedInput {

    @Field(() => UserCreateWithoutShopping_listsInput, {nullable:true})
    @Type(() => UserCreateWithoutShopping_listsInput)
    create?: UserCreateWithoutShopping_listsInput;

    @Field(() => UserCreateOrConnectWithoutShopping_listsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutShopping_listsInput)
    connectOrCreate?: UserCreateOrConnectWithoutShopping_listsInput;

    @Field(() => UserUpsertWithoutShopping_listsInput, {nullable:true})
    @Type(() => UserUpsertWithoutShopping_listsInput)
    upsert?: UserUpsertWithoutShopping_listsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutShopping_listsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutShopping_listsInput)
    update?: UserUpdateToOneWithWhereWithoutShopping_listsInput;
}
