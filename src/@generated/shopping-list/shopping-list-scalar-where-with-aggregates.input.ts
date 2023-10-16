import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ShoppingListScalarWhereWithAggregatesInput {

    @Field(() => [ShoppingListScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ShoppingListScalarWhereWithAggregatesInput>;

    @Field(() => [ShoppingListScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ShoppingListScalarWhereWithAggregatesInput>;

    @Field(() => [ShoppingListScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ShoppingListScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    color?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    author_id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
