import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListItemCreateWithoutShopping_listInput } from './shopping-list-item-create-without-shopping-list.input';
import { Type } from 'class-transformer';
import { ShoppingListItemCreateOrConnectWithoutShopping_listInput } from './shopping-list-item-create-or-connect-without-shopping-list.input';
import { ShoppingListItemUpsertWithWhereUniqueWithoutShopping_listInput } from './shopping-list-item-upsert-with-where-unique-without-shopping-list.input';
import { ShoppingListItemCreateManyShopping_listInputEnvelope } from './shopping-list-item-create-many-shopping-list-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ShoppingListItemWhereUniqueInput } from './shopping-list-item-where-unique.input';
import { ShoppingListItemUpdateWithWhereUniqueWithoutShopping_listInput } from './shopping-list-item-update-with-where-unique-without-shopping-list.input';
import { ShoppingListItemUpdateManyWithWhereWithoutShopping_listInput } from './shopping-list-item-update-many-with-where-without-shopping-list.input';
import { ShoppingListItemScalarWhereInput } from './shopping-list-item-scalar-where.input';

@InputType()
export class ShoppingListItemUncheckedUpdateManyWithoutShopping_listNestedInput {

    @Field(() => [ShoppingListItemCreateWithoutShopping_listInput], {nullable:true})
    @Type(() => ShoppingListItemCreateWithoutShopping_listInput)
    create?: Array<ShoppingListItemCreateWithoutShopping_listInput>;

    @Field(() => [ShoppingListItemCreateOrConnectWithoutShopping_listInput], {nullable:true})
    @Type(() => ShoppingListItemCreateOrConnectWithoutShopping_listInput)
    connectOrCreate?: Array<ShoppingListItemCreateOrConnectWithoutShopping_listInput>;

    @Field(() => [ShoppingListItemUpsertWithWhereUniqueWithoutShopping_listInput], {nullable:true})
    @Type(() => ShoppingListItemUpsertWithWhereUniqueWithoutShopping_listInput)
    upsert?: Array<ShoppingListItemUpsertWithWhereUniqueWithoutShopping_listInput>;

    @Field(() => ShoppingListItemCreateManyShopping_listInputEnvelope, {nullable:true})
    @Type(() => ShoppingListItemCreateManyShopping_listInputEnvelope)
    createMany?: ShoppingListItemCreateManyShopping_listInputEnvelope;

    @Field(() => [ShoppingListItemWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingListItemWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ShoppingListItemWhereUniqueInput, 'id'>>;

    @Field(() => [ShoppingListItemWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingListItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ShoppingListItemWhereUniqueInput, 'id'>>;

    @Field(() => [ShoppingListItemWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingListItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ShoppingListItemWhereUniqueInput, 'id'>>;

    @Field(() => [ShoppingListItemWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingListItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ShoppingListItemWhereUniqueInput, 'id'>>;

    @Field(() => [ShoppingListItemUpdateWithWhereUniqueWithoutShopping_listInput], {nullable:true})
    @Type(() => ShoppingListItemUpdateWithWhereUniqueWithoutShopping_listInput)
    update?: Array<ShoppingListItemUpdateWithWhereUniqueWithoutShopping_listInput>;

    @Field(() => [ShoppingListItemUpdateManyWithWhereWithoutShopping_listInput], {nullable:true})
    @Type(() => ShoppingListItemUpdateManyWithWhereWithoutShopping_listInput)
    updateMany?: Array<ShoppingListItemUpdateManyWithWhereWithoutShopping_listInput>;

    @Field(() => [ShoppingListItemScalarWhereInput], {nullable:true})
    @Type(() => ShoppingListItemScalarWhereInput)
    deleteMany?: Array<ShoppingListItemScalarWhereInput>;
}
