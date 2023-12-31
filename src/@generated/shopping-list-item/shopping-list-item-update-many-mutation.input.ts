import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class ShoppingListItemUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Float, {nullable:true})
    quantity?: number;

    @Field(() => Boolean, {nullable:true})
    is_completed?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
