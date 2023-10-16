import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListItemCreateWithoutUnitInput } from './shopping-list-item-create-without-unit.input';
import { Type } from 'class-transformer';
import { ShoppingListItemCreateOrConnectWithoutUnitInput } from './shopping-list-item-create-or-connect-without-unit.input';
import { ShoppingListItemCreateManyUnitInputEnvelope } from './shopping-list-item-create-many-unit-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ShoppingListItemWhereUniqueInput } from './shopping-list-item-where-unique.input';

@InputType()
export class ShoppingListItemCreateNestedManyWithoutUnitInput {

    @Field(() => [ShoppingListItemCreateWithoutUnitInput], {nullable:true})
    @Type(() => ShoppingListItemCreateWithoutUnitInput)
    create?: Array<ShoppingListItemCreateWithoutUnitInput>;

    @Field(() => [ShoppingListItemCreateOrConnectWithoutUnitInput], {nullable:true})
    @Type(() => ShoppingListItemCreateOrConnectWithoutUnitInput)
    connectOrCreate?: Array<ShoppingListItemCreateOrConnectWithoutUnitInput>;

    @Field(() => ShoppingListItemCreateManyUnitInputEnvelope, {nullable:true})
    @Type(() => ShoppingListItemCreateManyUnitInputEnvelope)
    createMany?: ShoppingListItemCreateManyUnitInputEnvelope;

    @Field(() => [ShoppingListItemWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingListItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ShoppingListItemWhereUniqueInput, 'id'>>;
}
