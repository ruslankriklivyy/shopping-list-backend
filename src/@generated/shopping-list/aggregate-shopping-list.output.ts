import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ShoppingListCountAggregate } from './shopping-list-count-aggregate.output';
import { ShoppingListAvgAggregate } from './shopping-list-avg-aggregate.output';
import { ShoppingListSumAggregate } from './shopping-list-sum-aggregate.output';
import { ShoppingListMinAggregate } from './shopping-list-min-aggregate.output';
import { ShoppingListMaxAggregate } from './shopping-list-max-aggregate.output';

@ObjectType()
export class AggregateShoppingList {

    @Field(() => ShoppingListCountAggregate, {nullable:true})
    _count?: ShoppingListCountAggregate;

    @Field(() => ShoppingListAvgAggregate, {nullable:true})
    _avg?: ShoppingListAvgAggregate;

    @Field(() => ShoppingListSumAggregate, {nullable:true})
    _sum?: ShoppingListSumAggregate;

    @Field(() => ShoppingListMinAggregate, {nullable:true})
    _min?: ShoppingListMinAggregate;

    @Field(() => ShoppingListMaxAggregate, {nullable:true})
    _max?: ShoppingListMaxAggregate;
}
