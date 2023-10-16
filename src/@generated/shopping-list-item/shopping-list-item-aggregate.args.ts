import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingListItemWhereInput } from './shopping-list-item-where.input';
import { Type } from 'class-transformer';
import { ShoppingListItemOrderByWithRelationInput } from './shopping-list-item-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ShoppingListItemWhereUniqueInput } from './shopping-list-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShoppingListItemCountAggregateInput } from './shopping-list-item-count-aggregate.input';
import { ShoppingListItemAvgAggregateInput } from './shopping-list-item-avg-aggregate.input';
import { ShoppingListItemSumAggregateInput } from './shopping-list-item-sum-aggregate.input';
import { ShoppingListItemMinAggregateInput } from './shopping-list-item-min-aggregate.input';
import { ShoppingListItemMaxAggregateInput } from './shopping-list-item-max-aggregate.input';

@ArgsType()
export class ShoppingListItemAggregateArgs {

    @Field(() => ShoppingListItemWhereInput, {nullable:true})
    @Type(() => ShoppingListItemWhereInput)
    where?: ShoppingListItemWhereInput;

    @Field(() => [ShoppingListItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShoppingListItemOrderByWithRelationInput>;

    @Field(() => ShoppingListItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ShoppingListItemWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ShoppingListItemCountAggregateInput, {nullable:true})
    _count?: ShoppingListItemCountAggregateInput;

    @Field(() => ShoppingListItemAvgAggregateInput, {nullable:true})
    _avg?: ShoppingListItemAvgAggregateInput;

    @Field(() => ShoppingListItemSumAggregateInput, {nullable:true})
    _sum?: ShoppingListItemSumAggregateInput;

    @Field(() => ShoppingListItemMinAggregateInput, {nullable:true})
    _min?: ShoppingListItemMinAggregateInput;

    @Field(() => ShoppingListItemMaxAggregateInput, {nullable:true})
    _max?: ShoppingListItemMaxAggregateInput;
}
