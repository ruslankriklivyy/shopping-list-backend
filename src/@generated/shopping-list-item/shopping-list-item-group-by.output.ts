import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ShoppingListItemCountAggregate } from './shopping-list-item-count-aggregate.output';
import { ShoppingListItemAvgAggregate } from './shopping-list-item-avg-aggregate.output';
import { ShoppingListItemSumAggregate } from './shopping-list-item-sum-aggregate.output';
import { ShoppingListItemMinAggregate } from './shopping-list-item-min-aggregate.output';
import { ShoppingListItemMaxAggregate } from './shopping-list-item-max-aggregate.output';

@ObjectType()
export class ShoppingListItemGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => Int, {nullable:false})
    unit_id!: number;

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => ShoppingListItemCountAggregate, {nullable:true})
    _count?: ShoppingListItemCountAggregate;

    @Field(() => ShoppingListItemAvgAggregate, {nullable:true})
    _avg?: ShoppingListItemAvgAggregate;

    @Field(() => ShoppingListItemSumAggregate, {nullable:true})
    _sum?: ShoppingListItemSumAggregate;

    @Field(() => ShoppingListItemMinAggregate, {nullable:true})
    _min?: ShoppingListItemMinAggregate;

    @Field(() => ShoppingListItemMaxAggregate, {nullable:true})
    _max?: ShoppingListItemMaxAggregate;
}
