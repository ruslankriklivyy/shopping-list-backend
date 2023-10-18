import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ShoppingListItemAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    quantity?: number;

    @Field(() => Float, {nullable:true})
    unit_id?: number;

    @Field(() => Float, {nullable:true})
    shopping_list_id?: number;

    @Field(() => Float, {nullable:true})
    category_id?: number;
}
