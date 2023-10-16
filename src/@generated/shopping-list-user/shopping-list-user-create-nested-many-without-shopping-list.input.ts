import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListUserCreateWithoutShopping_listInput } from './shopping-list-user-create-without-shopping-list.input';
import { Type } from 'class-transformer';
import { ShoppingListUserCreateOrConnectWithoutShopping_listInput } from './shopping-list-user-create-or-connect-without-shopping-list.input';
import { ShoppingListUserCreateManyShopping_listInputEnvelope } from './shopping-list-user-create-many-shopping-list-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ShoppingListUserWhereUniqueInput } from './shopping-list-user-where-unique.input';

@InputType()
export class ShoppingListUserCreateNestedManyWithoutShopping_listInput {

    @Field(() => [ShoppingListUserCreateWithoutShopping_listInput], {nullable:true})
    @Type(() => ShoppingListUserCreateWithoutShopping_listInput)
    create?: Array<ShoppingListUserCreateWithoutShopping_listInput>;

    @Field(() => [ShoppingListUserCreateOrConnectWithoutShopping_listInput], {nullable:true})
    @Type(() => ShoppingListUserCreateOrConnectWithoutShopping_listInput)
    connectOrCreate?: Array<ShoppingListUserCreateOrConnectWithoutShopping_listInput>;

    @Field(() => ShoppingListUserCreateManyShopping_listInputEnvelope, {nullable:true})
    @Type(() => ShoppingListUserCreateManyShopping_listInputEnvelope)
    createMany?: ShoppingListUserCreateManyShopping_listInputEnvelope;

    @Field(() => [ShoppingListUserWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingListUserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ShoppingListUserWhereUniqueInput, 'user_id_shopping_list_id'>>;
}
