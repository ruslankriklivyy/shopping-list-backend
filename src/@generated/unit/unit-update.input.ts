import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListItemUpdateManyWithoutUnitNestedInput } from '../shopping-list-item/shopping-list-item-update-many-without-unit-nested.input';

@InputType()
export class UnitUpdateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    value?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ShoppingListItemUpdateManyWithoutUnitNestedInput, {nullable:true})
    shopping_list_items?: ShoppingListItemUpdateManyWithoutUnitNestedInput;
}
