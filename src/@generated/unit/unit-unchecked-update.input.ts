import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShoppingListItemUncheckedUpdateManyWithoutUnitNestedInput } from '../shopping-list-item/shopping-list-item-unchecked-update-many-without-unit-nested.input';

@InputType()
export class UnitUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    value?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ShoppingListItemUncheckedUpdateManyWithoutUnitNestedInput, {nullable:true})
    shopping_list_items?: ShoppingListItemUncheckedUpdateManyWithoutUnitNestedInput;
}
