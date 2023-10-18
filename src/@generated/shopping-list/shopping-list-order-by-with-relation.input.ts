import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ShoppingListUserOrderByRelationAggregateInput } from '../shopping-list-user/shopping-list-user-order-by-relation-aggregate.input';
import { ShoppingListItemOrderByRelationAggregateInput } from '../shopping-list-item/shopping-list-item-order-by-relation-aggregate.input';

@InputType()
export class ShoppingListOrderByWithRelationInput {

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

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    author?: UserOrderByWithRelationInput;

    @Field(() => ShoppingListUserOrderByRelationAggregateInput, {nullable:true})
    responsibles?: ShoppingListUserOrderByRelationAggregateInput;

    @Field(() => ShoppingListItemOrderByRelationAggregateInput, {nullable:true})
    shopping_list_items?: ShoppingListItemOrderByRelationAggregateInput;
}
