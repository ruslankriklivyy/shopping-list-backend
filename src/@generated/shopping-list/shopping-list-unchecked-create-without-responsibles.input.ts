import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShoppingListItemUncheckedCreateNestedManyWithoutShopping_listInput } from '../shopping-list-item/shopping-list-item-unchecked-create-nested-many-without-shopping-list.input';

@InputType()
export class ShoppingListUncheckedCreateWithoutResponsiblesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    color!: string;

    @Field(() => Int, {nullable:false})
    progress!: number;

    @Field(() => Int, {nullable:true})
    author_id?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ShoppingListItemUncheckedCreateNestedManyWithoutShopping_listInput, {nullable:true})
    shopping_list_items?: ShoppingListItemUncheckedCreateNestedManyWithoutShopping_listInput;
}
