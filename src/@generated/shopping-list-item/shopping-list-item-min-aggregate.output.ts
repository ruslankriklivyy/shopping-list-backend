import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ShoppingListItemMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Float, {nullable:true})
    quantity?: number;

    @Field(() => Boolean, {nullable:true})
    is_completed?: boolean;

    @Field(() => Int, {nullable:true})
    unit_id?: number;

    @Field(() => Int, {nullable:true})
    shopping_list_id?: number;

    @Field(() => Int, {nullable:true})
    category_id?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
