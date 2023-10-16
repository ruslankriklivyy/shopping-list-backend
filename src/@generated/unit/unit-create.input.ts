import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListItemCreateNestedManyWithoutUnitInput } from '../shopping-list-item/shopping-list-item-create-nested-many-without-unit.input';

@InputType()
export class UnitCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ShoppingListItemCreateNestedManyWithoutUnitInput, {nullable:true})
    shopping_list_items?: ShoppingListItemCreateNestedManyWithoutUnitInput;
}
