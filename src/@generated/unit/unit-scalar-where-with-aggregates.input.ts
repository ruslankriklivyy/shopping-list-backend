import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UnitScalarWhereWithAggregatesInput {

    @Field(() => [UnitScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UnitScalarWhereWithAggregatesInput>;

    @Field(() => [UnitScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UnitScalarWhereWithAggregatesInput>;

    @Field(() => [UnitScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UnitScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    value?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
