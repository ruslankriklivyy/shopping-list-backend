import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ShoppingListItemCountOrderByAggregateInput } from './shopping-list-item-count-order-by-aggregate.input';
import { ShoppingListItemAvgOrderByAggregateInput } from './shopping-list-item-avg-order-by-aggregate.input';
import { ShoppingListItemMaxOrderByAggregateInput } from './shopping-list-item-max-order-by-aggregate.input';
import { ShoppingListItemMinOrderByAggregateInput } from './shopping-list-item-min-order-by-aggregate.input';
import { ShoppingListItemSumOrderByAggregateInput } from './shopping-list-item-sum-order-by-aggregate.input';

@InputType()
export class ShoppingListItemOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_completed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    unit_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shopping_list_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => ShoppingListItemCountOrderByAggregateInput, {nullable:true})
    _count?: ShoppingListItemCountOrderByAggregateInput;

    @Field(() => ShoppingListItemAvgOrderByAggregateInput, {nullable:true})
    _avg?: ShoppingListItemAvgOrderByAggregateInput;

    @Field(() => ShoppingListItemMaxOrderByAggregateInput, {nullable:true})
    _max?: ShoppingListItemMaxOrderByAggregateInput;

    @Field(() => ShoppingListItemMinOrderByAggregateInput, {nullable:true})
    _min?: ShoppingListItemMinOrderByAggregateInput;

    @Field(() => ShoppingListItemSumOrderByAggregateInput, {nullable:true})
    _sum?: ShoppingListItemSumOrderByAggregateInput;
}
