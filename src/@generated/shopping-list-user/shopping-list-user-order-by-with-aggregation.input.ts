import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ShoppingListUserCountOrderByAggregateInput } from './shopping-list-user-count-order-by-aggregate.input';
import { ShoppingListUserAvgOrderByAggregateInput } from './shopping-list-user-avg-order-by-aggregate.input';
import { ShoppingListUserMaxOrderByAggregateInput } from './shopping-list-user-max-order-by-aggregate.input';
import { ShoppingListUserMinOrderByAggregateInput } from './shopping-list-user-min-order-by-aggregate.input';
import { ShoppingListUserSumOrderByAggregateInput } from './shopping-list-user-sum-order-by-aggregate.input';

@InputType()
export class ShoppingListUserOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shopping_list_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => ShoppingListUserCountOrderByAggregateInput, {nullable:true})
    _count?: ShoppingListUserCountOrderByAggregateInput;

    @Field(() => ShoppingListUserAvgOrderByAggregateInput, {nullable:true})
    _avg?: ShoppingListUserAvgOrderByAggregateInput;

    @Field(() => ShoppingListUserMaxOrderByAggregateInput, {nullable:true})
    _max?: ShoppingListUserMaxOrderByAggregateInput;

    @Field(() => ShoppingListUserMinOrderByAggregateInput, {nullable:true})
    _min?: ShoppingListUserMinOrderByAggregateInput;

    @Field(() => ShoppingListUserSumOrderByAggregateInput, {nullable:true})
    _sum?: ShoppingListUserSumOrderByAggregateInput;
}
