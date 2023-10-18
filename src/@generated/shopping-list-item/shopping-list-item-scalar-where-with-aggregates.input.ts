import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ShoppingListItemScalarWhereWithAggregatesInput {

    @Field(() => [ShoppingListItemScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ShoppingListItemScalarWhereWithAggregatesInput>;

    @Field(() => [ShoppingListItemScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ShoppingListItemScalarWhereWithAggregatesInput>;

    @Field(() => [ShoppingListItemScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ShoppingListItemScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    quantity?: FloatWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    is_completed?: BoolWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    unit_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    shopping_list_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    category_id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
