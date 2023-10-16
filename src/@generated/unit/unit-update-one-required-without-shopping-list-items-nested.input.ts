import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UnitCreateWithoutShopping_list_itemsInput } from './unit-create-without-shopping-list-items.input';
import { Type } from 'class-transformer';
import { UnitCreateOrConnectWithoutShopping_list_itemsInput } from './unit-create-or-connect-without-shopping-list-items.input';
import { UnitUpsertWithoutShopping_list_itemsInput } from './unit-upsert-without-shopping-list-items.input';
import { Prisma } from '@prisma/client';
import { UnitWhereUniqueInput } from './unit-where-unique.input';
import { UnitUpdateToOneWithWhereWithoutShopping_list_itemsInput } from './unit-update-to-one-with-where-without-shopping-list-items.input';

@InputType()
export class UnitUpdateOneRequiredWithoutShopping_list_itemsNestedInput {

    @Field(() => UnitCreateWithoutShopping_list_itemsInput, {nullable:true})
    @Type(() => UnitCreateWithoutShopping_list_itemsInput)
    create?: UnitCreateWithoutShopping_list_itemsInput;

    @Field(() => UnitCreateOrConnectWithoutShopping_list_itemsInput, {nullable:true})
    @Type(() => UnitCreateOrConnectWithoutShopping_list_itemsInput)
    connectOrCreate?: UnitCreateOrConnectWithoutShopping_list_itemsInput;

    @Field(() => UnitUpsertWithoutShopping_list_itemsInput, {nullable:true})
    @Type(() => UnitUpsertWithoutShopping_list_itemsInput)
    upsert?: UnitUpsertWithoutShopping_list_itemsInput;

    @Field(() => UnitWhereUniqueInput, {nullable:true})
    @Type(() => UnitWhereUniqueInput)
    connect?: Prisma.AtLeast<UnitWhereUniqueInput, 'id'>;

    @Field(() => UnitUpdateToOneWithWhereWithoutShopping_list_itemsInput, {nullable:true})
    @Type(() => UnitUpdateToOneWithWhereWithoutShopping_list_itemsInput)
    update?: UnitUpdateToOneWithWhereWithoutShopping_list_itemsInput;
}
