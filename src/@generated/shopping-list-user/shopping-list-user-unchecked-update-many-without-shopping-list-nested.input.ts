import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListUserCreateWithoutShopping_listInput } from './shopping-list-user-create-without-shopping-list.input';
import { Type } from 'class-transformer';
import { ShoppingListUserCreateOrConnectWithoutShopping_listInput } from './shopping-list-user-create-or-connect-without-shopping-list.input';
import { ShoppingListUserUpsertWithWhereUniqueWithoutShopping_listInput } from './shopping-list-user-upsert-with-where-unique-without-shopping-list.input';
import { ShoppingListUserCreateManyShopping_listInputEnvelope } from './shopping-list-user-create-many-shopping-list-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ShoppingListUserWhereUniqueInput } from './shopping-list-user-where-unique.input';
import { ShoppingListUserUpdateWithWhereUniqueWithoutShopping_listInput } from './shopping-list-user-update-with-where-unique-without-shopping-list.input';
import { ShoppingListUserUpdateManyWithWhereWithoutShopping_listInput } from './shopping-list-user-update-many-with-where-without-shopping-list.input';
import { ShoppingListUserScalarWhereInput } from './shopping-list-user-scalar-where.input';

@InputType()
export class ShoppingListUserUncheckedUpdateManyWithoutShopping_listNestedInput {

    @Field(() => [ShoppingListUserCreateWithoutShopping_listInput], {nullable:true})
    @Type(() => ShoppingListUserCreateWithoutShopping_listInput)
    create?: Array<ShoppingListUserCreateWithoutShopping_listInput>;

    @Field(() => [ShoppingListUserCreateOrConnectWithoutShopping_listInput], {nullable:true})
    @Type(() => ShoppingListUserCreateOrConnectWithoutShopping_listInput)
    connectOrCreate?: Array<ShoppingListUserCreateOrConnectWithoutShopping_listInput>;

    @Field(() => [ShoppingListUserUpsertWithWhereUniqueWithoutShopping_listInput], {nullable:true})
    @Type(() => ShoppingListUserUpsertWithWhereUniqueWithoutShopping_listInput)
    upsert?: Array<ShoppingListUserUpsertWithWhereUniqueWithoutShopping_listInput>;

    @Field(() => ShoppingListUserCreateManyShopping_listInputEnvelope, {nullable:true})
    @Type(() => ShoppingListUserCreateManyShopping_listInputEnvelope)
    createMany?: ShoppingListUserCreateManyShopping_listInputEnvelope;

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

    @Field(() => [ShoppingListUserUpdateWithWhereUniqueWithoutShopping_listInput], {nullable:true})
    @Type(() => ShoppingListUserUpdateWithWhereUniqueWithoutShopping_listInput)
    update?: Array<ShoppingListUserUpdateWithWhereUniqueWithoutShopping_listInput>;

    @Field(() => [ShoppingListUserUpdateManyWithWhereWithoutShopping_listInput], {nullable:true})
    @Type(() => ShoppingListUserUpdateManyWithWhereWithoutShopping_listInput)
    updateMany?: Array<ShoppingListUserUpdateManyWithWhereWithoutShopping_listInput>;

    @Field(() => [ShoppingListUserScalarWhereInput], {nullable:true})
    @Type(() => ShoppingListUserScalarWhereInput)
    deleteMany?: Array<ShoppingListUserScalarWhereInput>;
}
