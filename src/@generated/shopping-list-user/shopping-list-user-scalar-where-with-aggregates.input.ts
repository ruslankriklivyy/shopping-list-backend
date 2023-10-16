import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ShoppingListUserScalarWhereWithAggregatesInput {

    @Field(() => [ShoppingListUserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ShoppingListUserScalarWhereWithAggregatesInput>;

    @Field(() => [ShoppingListUserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ShoppingListUserScalarWhereWithAggregatesInput>;

    @Field(() => [ShoppingListUserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ShoppingListUserScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    user_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    shopping_list_id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
