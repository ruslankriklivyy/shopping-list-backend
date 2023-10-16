import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UnitWhereInput } from './unit-where.input';
import { Type } from 'class-transformer';
import { UnitUpdateWithoutShopping_list_itemsInput } from './unit-update-without-shopping-list-items.input';

@InputType()
export class UnitUpdateToOneWithWhereWithoutShopping_list_itemsInput {

    @Field(() => UnitWhereInput, {nullable:true})
    @Type(() => UnitWhereInput)
    where?: UnitWhereInput;

    @Field(() => UnitUpdateWithoutShopping_list_itemsInput, {nullable:false})
    @Type(() => UnitUpdateWithoutShopping_list_itemsInput)
    data!: UnitUpdateWithoutShopping_list_itemsInput;
}
