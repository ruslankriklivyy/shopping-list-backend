import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TokenCountOrderByAggregateInput } from './token-count-order-by-aggregate.input';
import { TokenAvgOrderByAggregateInput } from './token-avg-order-by-aggregate.input';
import { TokenMaxOrderByAggregateInput } from './token-max-order-by-aggregate.input';
import { TokenMinOrderByAggregateInput } from './token-min-order-by-aggregate.input';
import { TokenSumOrderByAggregateInput } from './token-sum-order-by-aggregate.input';

@InputType()
export class TokenOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    access_token?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    refresh_token?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => TokenCountOrderByAggregateInput, {nullable:true})
    _count?: TokenCountOrderByAggregateInput;

    @Field(() => TokenAvgOrderByAggregateInput, {nullable:true})
    _avg?: TokenAvgOrderByAggregateInput;

    @Field(() => TokenMaxOrderByAggregateInput, {nullable:true})
    _max?: TokenMaxOrderByAggregateInput;

    @Field(() => TokenMinOrderByAggregateInput, {nullable:true})
    _min?: TokenMinOrderByAggregateInput;

    @Field(() => TokenSumOrderByAggregateInput, {nullable:true})
    _sum?: TokenSumOrderByAggregateInput;
}
