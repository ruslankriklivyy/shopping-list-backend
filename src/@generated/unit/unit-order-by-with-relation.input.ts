import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ShoppingListItemOrderByRelationAggregateInput } from '../shopping-list-item/shopping-list-item-order-by-relation-aggregate.input';

@InputType()
export class UnitOrderByWithRelationInput {

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

    @Field(() => ShoppingListItemOrderByRelationAggregateInput, {nullable:true})
    shopping_list_items?: ShoppingListItemOrderByRelationAggregateInput;
}
