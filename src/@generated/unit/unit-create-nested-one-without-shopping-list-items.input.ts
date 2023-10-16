import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UnitCreateWithoutShopping_list_itemsInput } from './unit-create-without-shopping-list-items.input';
import { Type } from 'class-transformer';
import { UnitCreateOrConnectWithoutShopping_list_itemsInput } from './unit-create-or-connect-without-shopping-list-items.input';
import { Prisma } from '@prisma/client';
import { UnitWhereUniqueInput } from './unit-where-unique.input';

@InputType()
export class UnitCreateNestedOneWithoutShopping_list_itemsInput {

    @Field(() => UnitCreateWithoutShopping_list_itemsInput, {nullable:true})
    @Type(() => UnitCreateWithoutShopping_list_itemsInput)
    create?: UnitCreateWithoutShopping_list_itemsInput;

    @Field(() => UnitCreateOrConnectWithoutShopping_list_itemsInput, {nullable:true})
    @Type(() => UnitCreateOrConnectWithoutShopping_list_itemsInput)
    connectOrCreate?: UnitCreateOrConnectWithoutShopping_list_itemsInput;

    @Field(() => UnitWhereUniqueInput, {nullable:true})
    @Type(() => UnitWhereUniqueInput)
    connect?: Prisma.AtLeast<UnitWhereUniqueInput, 'id'>;
}
