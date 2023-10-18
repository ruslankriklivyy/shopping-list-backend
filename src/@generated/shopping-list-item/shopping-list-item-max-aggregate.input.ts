import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ShoppingListItemMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    quantity?: true;

    @Field(() => Boolean, {nullable:true})
    is_completed?: true;

    @Field(() => Boolean, {nullable:true})
    unit_id?: true;

    @Field(() => Boolean, {nullable:true})
    shopping_list_id?: true;

    @Field(() => Boolean, {nullable:true})
    category_id?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;
}
