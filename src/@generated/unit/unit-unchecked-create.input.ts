import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShoppingListItemUncheckedCreateNestedManyWithoutUnitInput } from '../shopping-list-item/shopping-list-item-unchecked-create-nested-many-without-unit.input';

@InputType()
export class UnitUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ShoppingListItemUncheckedCreateNestedManyWithoutUnitInput, {nullable:true})
    shopping_list_items?: ShoppingListItemUncheckedCreateNestedManyWithoutUnitInput;
}
