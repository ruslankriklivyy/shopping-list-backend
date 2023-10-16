import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShoppingListUserUncheckedUpdateManyWithoutShopping_listNestedInput } from '../shopping-list-user/shopping-list-user-unchecked-update-many-without-shopping-list-nested.input';

@InputType()
export class ShoppingListUncheckedUpdateWithoutAuthorInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ShoppingListUserUncheckedUpdateManyWithoutShopping_listNestedInput, {nullable:true})
    responsibles?: ShoppingListUserUncheckedUpdateManyWithoutShopping_listNestedInput;
}
