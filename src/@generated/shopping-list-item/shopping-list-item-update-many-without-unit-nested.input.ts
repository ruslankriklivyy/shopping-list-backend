import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListItemCreateWithoutUnitInput } from './shopping-list-item-create-without-unit.input';
import { Type } from 'class-transformer';
import { ShoppingListItemCreateOrConnectWithoutUnitInput } from './shopping-list-item-create-or-connect-without-unit.input';
import { ShoppingListItemUpsertWithWhereUniqueWithoutUnitInput } from './shopping-list-item-upsert-with-where-unique-without-unit.input';
import { ShoppingListItemCreateManyUnitInputEnvelope } from './shopping-list-item-create-many-unit-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ShoppingListItemWhereUniqueInput } from './shopping-list-item-where-unique.input';
import { ShoppingListItemUpdateWithWhereUniqueWithoutUnitInput } from './shopping-list-item-update-with-where-unique-without-unit.input';
import { ShoppingListItemUpdateManyWithWhereWithoutUnitInput } from './shopping-list-item-update-many-with-where-without-unit.input';
import { ShoppingListItemScalarWhereInput } from './shopping-list-item-scalar-where.input';

@InputType()
export class ShoppingListItemUpdateManyWithoutUnitNestedInput {

    @Field(() => [ShoppingListItemCreateWithoutUnitInput], {nullable:true})
    @Type(() => ShoppingListItemCreateWithoutUnitInput)
    create?: Array<ShoppingListItemCreateWithoutUnitInput>;

    @Field(() => [ShoppingListItemCreateOrConnectWithoutUnitInput], {nullable:true})
    @Type(() => ShoppingListItemCreateOrConnectWithoutUnitInput)
    connectOrCreate?: Array<ShoppingListItemCreateOrConnectWithoutUnitInput>;

    @Field(() => [ShoppingListItemUpsertWithWhereUniqueWithoutUnitInput], {nullable:true})
    @Type(() => ShoppingListItemUpsertWithWhereUniqueWithoutUnitInput)
    upsert?: Array<ShoppingListItemUpsertWithWhereUniqueWithoutUnitInput>;

    @Field(() => ShoppingListItemCreateManyUnitInputEnvelope, {nullable:true})
    @Type(() => ShoppingListItemCreateManyUnitInputEnvelope)
    createMany?: ShoppingListItemCreateManyUnitInputEnvelope;

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

    @Field(() => [ShoppingListItemUpdateWithWhereUniqueWithoutUnitInput], {nullable:true})
    @Type(() => ShoppingListItemUpdateWithWhereUniqueWithoutUnitInput)
    update?: Array<ShoppingListItemUpdateWithWhereUniqueWithoutUnitInput>;

    @Field(() => [ShoppingListItemUpdateManyWithWhereWithoutUnitInput], {nullable:true})
    @Type(() => ShoppingListItemUpdateManyWithWhereWithoutUnitInput)
    updateMany?: Array<ShoppingListItemUpdateManyWithWhereWithoutUnitInput>;

    @Field(() => [ShoppingListItemScalarWhereInput], {nullable:true})
    @Type(() => ShoppingListItemScalarWhereInput)
    deleteMany?: Array<ShoppingListItemScalarWhereInput>;
}
