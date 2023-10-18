import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ShoppingListItemSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    quantity?: true;

    @Field(() => Boolean, {nullable:true})
    unit_id?: true;

    @Field(() => Boolean, {nullable:true})
    shopping_list_id?: true;

    @Field(() => Boolean, {nullable:true})
    category_id?: true;
}
