import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingListWhereInput } from './shopping-list-where.input';
import { Type } from 'class-transformer';
import { ShoppingListOrderByWithAggregationInput } from './shopping-list-order-by-with-aggregation.input';
import { ShoppingListScalarFieldEnum } from './shopping-list-scalar-field.enum';
import { ShoppingListScalarWhereWithAggregatesInput } from './shopping-list-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ShoppingListCountAggregateInput } from './shopping-list-count-aggregate.input';
import { ShoppingListAvgAggregateInput } from './shopping-list-avg-aggregate.input';
import { ShoppingListSumAggregateInput } from './shopping-list-sum-aggregate.input';
import { ShoppingListMinAggregateInput } from './shopping-list-min-aggregate.input';
import { ShoppingListMaxAggregateInput } from './shopping-list-max-aggregate.input';

@ArgsType()
export class ShoppingListGroupByArgs {

    @Field(() => ShoppingListWhereInput, {nullable:true})
    @Type(() => ShoppingListWhereInput)
    where?: ShoppingListWhereInput;

    @Field(() => [ShoppingListOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ShoppingListOrderByWithAggregationInput>;

    @Field(() => [ShoppingListScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ShoppingListScalarFieldEnum>;

    @Field(() => ShoppingListScalarWhereWithAggregatesInput, {nullable:true})
    having?: ShoppingListScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ShoppingListCountAggregateInput, {nullable:true})
    _count?: ShoppingListCountAggregateInput;

    @Field(() => ShoppingListAvgAggregateInput, {nullable:true})
    _avg?: ShoppingListAvgAggregateInput;

    @Field(() => ShoppingListSumAggregateInput, {nullable:true})
    _sum?: ShoppingListSumAggregateInput;

    @Field(() => ShoppingListMinAggregateInput, {nullable:true})
    _min?: ShoppingListMinAggregateInput;

    @Field(() => ShoppingListMaxAggregateInput, {nullable:true})
    _max?: ShoppingListMaxAggregateInput;
}
