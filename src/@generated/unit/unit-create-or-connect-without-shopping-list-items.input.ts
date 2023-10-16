import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UnitWhereUniqueInput } from './unit-where-unique.input';
import { Type } from 'class-transformer';
import { UnitCreateWithoutShopping_list_itemsInput } from './unit-create-without-shopping-list-items.input';

@InputType()
export class UnitCreateOrConnectWithoutShopping_list_itemsInput {

    @Field(() => UnitWhereUniqueInput, {nullable:false})
    @Type(() => UnitWhereUniqueInput)
    where!: Prisma.AtLeast<UnitWhereUniqueInput, 'id'>;

    @Field(() => UnitCreateWithoutShopping_list_itemsInput, {nullable:false})
    @Type(() => UnitCreateWithoutShopping_list_itemsInput)
    create!: UnitCreateWithoutShopping_list_itemsInput;
}
