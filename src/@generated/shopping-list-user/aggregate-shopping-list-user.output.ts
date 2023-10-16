import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ShoppingListUserCountAggregate } from './shopping-list-user-count-aggregate.output';
import { ShoppingListUserAvgAggregate } from './shopping-list-user-avg-aggregate.output';
import { ShoppingListUserSumAggregate } from './shopping-list-user-sum-aggregate.output';
import { ShoppingListUserMinAggregate } from './shopping-list-user-min-aggregate.output';
import { ShoppingListUserMaxAggregate } from './shopping-list-user-max-aggregate.output';

@ObjectType()
export class AggregateShoppingListUser {

    @Field(() => ShoppingListUserCountAggregate, {nullable:true})
    _count?: ShoppingListUserCountAggregate;

    @Field(() => ShoppingListUserAvgAggregate, {nullable:true})
    _avg?: ShoppingListUserAvgAggregate;

    @Field(() => ShoppingListUserSumAggregate, {nullable:true})
    _sum?: ShoppingListUserSumAggregate;

    @Field(() => ShoppingListUserMinAggregate, {nullable:true})
    _min?: ShoppingListUserMinAggregate;

    @Field(() => ShoppingListUserMaxAggregate, {nullable:true})
    _max?: ShoppingListUserMaxAggregate;
}
