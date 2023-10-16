import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListUserCreateWithoutUserInput } from './shopping-list-user-create-without-user.input';
import { Type } from 'class-transformer';
import { ShoppingListUserCreateOrConnectWithoutUserInput } from './shopping-list-user-create-or-connect-without-user.input';
import { ShoppingListUserCreateManyUserInputEnvelope } from './shopping-list-user-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ShoppingListUserWhereUniqueInput } from './shopping-list-user-where-unique.input';

@InputType()
export class ShoppingListUserUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [ShoppingListUserCreateWithoutUserInput], {nullable:true})
    @Type(() => ShoppingListUserCreateWithoutUserInput)
    create?: Array<ShoppingListUserCreateWithoutUserInput>;

    @Field(() => [ShoppingListUserCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ShoppingListUserCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ShoppingListUserCreateOrConnectWithoutUserInput>;

    @Field(() => ShoppingListUserCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ShoppingListUserCreateManyUserInputEnvelope)
    createMany?: ShoppingListUserCreateManyUserInputEnvelope;

    @Field(() => [ShoppingListUserWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingListUserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ShoppingListUserWhereUniqueInput, 'user_id_shopping_list_id'>>;
}
