import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { UnitCreateNestedOneWithoutShopping_list_itemsInput } from '../unit/unit-create-nested-one-without-shopping-list-items.input';

@InputType()
export class ShoppingListItemCreateWithoutCategoryInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => UnitCreateNestedOneWithoutShopping_list_itemsInput, {nullable:false})
    unit!: UnitCreateNestedOneWithoutShopping_list_itemsInput;
}
