import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UnitOrderByWithRelationInput } from '../unit/unit-order-by-with-relation.input';
import { ShoppingListOrderByWithRelationInput } from '../shopping-list/shopping-list-order-by-with-relation.input';
import { CategoryOrderByWithRelationInput } from '../category/category-order-by-with-relation.input';

@InputType()
export class ShoppingListItemOrderByWithRelationInput {

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

    @Field(() => UnitOrderByWithRelationInput, {nullable:true})
    unit?: UnitOrderByWithRelationInput;

    @Field(() => ShoppingListOrderByWithRelationInput, {nullable:true})
    shopping_list?: ShoppingListOrderByWithRelationInput;

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    category?: CategoryOrderByWithRelationInput;
}
