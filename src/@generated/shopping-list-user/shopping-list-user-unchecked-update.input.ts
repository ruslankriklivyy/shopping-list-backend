import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ShoppingListUserUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    user_id?: number;

    @Field(() => Int, {nullable:true})
    shopping_list_id?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
