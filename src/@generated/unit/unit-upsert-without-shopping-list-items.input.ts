import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UnitUpdateWithoutShopping_list_itemsInput } from './unit-update-without-shopping-list-items.input';
import { Type } from 'class-transformer';
import { UnitCreateWithoutShopping_list_itemsInput } from './unit-create-without-shopping-list-items.input';
import { UnitWhereInput } from './unit-where.input';

@InputType()
export class UnitUpsertWithoutShopping_list_itemsInput {

    @Field(() => UnitUpdateWithoutShopping_list_itemsInput, {nullable:false})
    @Type(() => UnitUpdateWithoutShopping_list_itemsInput)
    update!: UnitUpdateWithoutShopping_list_itemsInput;

    @Field(() => UnitCreateWithoutShopping_list_itemsInput, {nullable:false})
    @Type(() => UnitCreateWithoutShopping_list_itemsInput)
    create!: UnitCreateWithoutShopping_list_itemsInput;

    @Field(() => UnitWhereInput, {nullable:true})
    @Type(() => UnitWhereInput)
    where?: UnitWhereInput;
}
