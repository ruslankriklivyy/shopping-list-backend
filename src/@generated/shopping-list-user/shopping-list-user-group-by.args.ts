import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingListUserWhereInput } from './shopping-list-user-where.input';
import { Type } from 'class-transformer';
import { ShoppingListUserOrderByWithAggregationInput } from './shopping-list-user-order-by-with-aggregation.input';
import { ShoppingListUserScalarFieldEnum } from './shopping-list-user-scalar-field.enum';
import { ShoppingListUserScalarWhereWithAggregatesInput } from './shopping-list-user-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ShoppingListUserCountAggregateInput } from './shopping-list-user-count-aggregate.input';
import { ShoppingListUserAvgAggregateInput } from './shopping-list-user-avg-aggregate.input';
import { ShoppingListUserSumAggregateInput } from './shopping-list-user-sum-aggregate.input';
import { ShoppingListUserMinAggregateInput } from './shopping-list-user-min-aggregate.input';
import { ShoppingListUserMaxAggregateInput } from './shopping-list-user-max-aggregate.input';

@ArgsType()
export class ShoppingListUserGroupByArgs {

    @Field(() => ShoppingListUserWhereInput, {nullable:true})
    @Type(() => ShoppingListUserWhereInput)
    where?: ShoppingListUserWhereInput;

    @Field(() => [ShoppingListUserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ShoppingListUserOrderByWithAggregationInput>;

    @Field(() => [ShoppingListUserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ShoppingListUserScalarFieldEnum>;

    @Field(() => ShoppingListUserScalarWhereWithAggregatesInput, {nullable:true})
    having?: ShoppingListUserScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ShoppingListUserCountAggregateInput, {nullable:true})
    _count?: ShoppingListUserCountAggregateInput;

    @Field(() => ShoppingListUserAvgAggregateInput, {nullable:true})
    _avg?: ShoppingListUserAvgAggregateInput;

    @Field(() => ShoppingListUserSumAggregateInput, {nullable:true})
    _sum?: ShoppingListUserSumAggregateInput;

    @Field(() => ShoppingListUserMinAggregateInput, {nullable:true})
    _min?: ShoppingListUserMinAggregateInput;

    @Field(() => ShoppingListUserMaxAggregateInput, {nullable:true})
    _max?: ShoppingListUserMaxAggregateInput;
}
