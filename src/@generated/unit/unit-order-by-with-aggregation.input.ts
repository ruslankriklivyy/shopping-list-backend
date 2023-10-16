import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UnitCountOrderByAggregateInput } from './unit-count-order-by-aggregate.input';
import { UnitAvgOrderByAggregateInput } from './unit-avg-order-by-aggregate.input';
import { UnitMaxOrderByAggregateInput } from './unit-max-order-by-aggregate.input';
import { UnitMinOrderByAggregateInput } from './unit-min-order-by-aggregate.input';
import { UnitSumOrderByAggregateInput } from './unit-sum-order-by-aggregate.input';

@InputType()
export class UnitOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => UnitCountOrderByAggregateInput, {nullable:true})
    _count?: UnitCountOrderByAggregateInput;

    @Field(() => UnitAvgOrderByAggregateInput, {nullable:true})
    _avg?: UnitAvgOrderByAggregateInput;

    @Field(() => UnitMaxOrderByAggregateInput, {nullable:true})
    _max?: UnitMaxOrderByAggregateInput;

    @Field(() => UnitMinOrderByAggregateInput, {nullable:true})
    _min?: UnitMinOrderByAggregateInput;

    @Field(() => UnitSumOrderByAggregateInput, {nullable:true})
    _sum?: UnitSumOrderByAggregateInput;
}
