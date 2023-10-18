import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ShoppingListCountOrderByAggregateInput } from './shopping-list-count-order-by-aggregate.input';
import { ShoppingListAvgOrderByAggregateInput } from './shopping-list-avg-order-by-aggregate.input';
import { ShoppingListMaxOrderByAggregateInput } from './shopping-list-max-order-by-aggregate.input';
import { ShoppingListMinOrderByAggregateInput } from './shopping-list-min-order-by-aggregate.input';
import { ShoppingListSumOrderByAggregateInput } from './shopping-list-sum-order-by-aggregate.input';

@InputType()
export class ShoppingListOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    progress?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    author_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => ShoppingListCountOrderByAggregateInput, {nullable:true})
    _count?: ShoppingListCountOrderByAggregateInput;

    @Field(() => ShoppingListAvgOrderByAggregateInput, {nullable:true})
    _avg?: ShoppingListAvgOrderByAggregateInput;

    @Field(() => ShoppingListMaxOrderByAggregateInput, {nullable:true})
    _max?: ShoppingListMaxOrderByAggregateInput;

    @Field(() => ShoppingListMinOrderByAggregateInput, {nullable:true})
    _min?: ShoppingListMinOrderByAggregateInput;

    @Field(() => ShoppingListSumOrderByAggregateInput, {nullable:true})
    _sum?: ShoppingListSumOrderByAggregateInput;
}
