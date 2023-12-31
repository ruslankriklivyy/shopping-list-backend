import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ShoppingListItemCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => Int, {nullable:false})
    is_completed!: number;

    @Field(() => Int, {nullable:false})
    unit_id!: number;

    @Field(() => Int, {nullable:false})
    shopping_list_id!: number;

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
