import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ShoppingListItemCountAggregate } from './shopping-list-item-count-aggregate.output';
import { ShoppingListItemAvgAggregate } from './shopping-list-item-avg-aggregate.output';
import { ShoppingListItemSumAggregate } from './shopping-list-item-sum-aggregate.output';
import { ShoppingListItemMinAggregate } from './shopping-list-item-min-aggregate.output';
import { ShoppingListItemMaxAggregate } from './shopping-list-item-max-aggregate.output';

@ObjectType()
export class AggregateShoppingListItem {

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
