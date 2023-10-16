import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListUserCreateWithoutUserInput } from './shopping-list-user-create-without-user.input';
import { Type } from 'class-transformer';
import { ShoppingListUserCreateOrConnectWithoutUserInput } from './shopping-list-user-create-or-connect-without-user.input';
import { ShoppingListUserUpsertWithWhereUniqueWithoutUserInput } from './shopping-list-user-upsert-with-where-unique-without-user.input';
import { ShoppingListUserCreateManyUserInputEnvelope } from './shopping-list-user-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ShoppingListUserWhereUniqueInput } from './shopping-list-user-where-unique.input';
import { ShoppingListUserUpdateWithWhereUniqueWithoutUserInput } from './shopping-list-user-update-with-where-unique-without-user.input';
import { ShoppingListUserUpdateManyWithWhereWithoutUserInput } from './shopping-list-user-update-many-with-where-without-user.input';
import { ShoppingListUserScalarWhereInput } from './shopping-list-user-scalar-where.input';

@InputType()
export class ShoppingListUserUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [ShoppingListUserCreateWithoutUserInput], {nullable:true})
    @Type(() => ShoppingListUserCreateWithoutUserInput)
    create?: Array<ShoppingListUserCreateWithoutUserInput>;

    @Field(() => [ShoppingListUserCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ShoppingListUserCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ShoppingListUserCreateOrConnectWithoutUserInput>;

    @Field(() => [ShoppingListUserUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ShoppingListUserUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ShoppingListUserUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ShoppingListUserCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ShoppingListUserCreateManyUserInputEnvelope)
    createMany?: ShoppingListUserCreateManyUserInputEnvelope;

    @Field(() => [ShoppingListUserWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingListUserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ShoppingListUserWhereUniqueInput, 'user_id_shopping_list_id'>>;

    @Field(() => [ShoppingListUserWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingListUserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ShoppingListUserWhereUniqueInput, 'user_id_shopping_list_id'>>;

    @Field(() => [ShoppingListUserWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingListUserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ShoppingListUserWhereUniqueInput, 'user_id_shopping_list_id'>>;

    @Field(() => [ShoppingListUserWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingListUserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ShoppingListUserWhereUniqueInput, 'user_id_shopping_list_id'>>;

    @Field(() => [ShoppingListUserUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ShoppingListUserUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ShoppingListUserUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ShoppingListUserUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ShoppingListUserUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ShoppingListUserUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ShoppingListUserScalarWhereInput], {nullable:true})
    @Type(() => ShoppingListUserScalarWhereInput)
    deleteMany?: Array<ShoppingListUserScalarWhereInput>;
}
