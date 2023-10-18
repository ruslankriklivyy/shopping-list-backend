import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ShoppingListItemSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    quantity?: number;

    @Field(() => Int, {nullable:true})
    unit_id?: number;

    @Field(() => Int, {nullable:true})
    shopping_list_id?: number;

    @Field(() => Int, {nullable:true})
    category_id?: number;
}
