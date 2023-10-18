import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListItemCreateWithoutShopping_listInput } from './shopping-list-item-create-without-shopping-list.input';
import { Type } from 'class-transformer';
import { ShoppingListItemCreateOrConnectWithoutShopping_listInput } from './shopping-list-item-create-or-connect-without-shopping-list.input';
import { ShoppingListItemCreateManyShopping_listInputEnvelope } from './shopping-list-item-create-many-shopping-list-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ShoppingListItemWhereUniqueInput } from './shopping-list-item-where-unique.input';

@InputType()
export class ShoppingListItemUncheckedCreateNestedManyWithoutShopping_listInput {

    @Field(() => [ShoppingListItemCreateWithoutShopping_listInput], {nullable:true})
    @Type(() => ShoppingListItemCreateWithoutShopping_listInput)
    create?: Array<ShoppingListItemCreateWithoutShopping_listInput>;

    @Field(() => [ShoppingListItemCreateOrConnectWithoutShopping_listInput], {nullable:true})
    @Type(() => ShoppingListItemCreateOrConnectWithoutShopping_listInput)
    connectOrCreate?: Array<ShoppingListItemCreateOrConnectWithoutShopping_listInput>;

    @Field(() => ShoppingListItemCreateManyShopping_listInputEnvelope, {nullable:true})
    @Type(() => ShoppingListItemCreateManyShopping_listInputEnvelope)
    createMany?: ShoppingListItemCreateManyShopping_listInputEnvelope;

    @Field(() => [ShoppingListItemWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingListItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ShoppingListItemWhereUniqueInput, 'id'>>;
}
