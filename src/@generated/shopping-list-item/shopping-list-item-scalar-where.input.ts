import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ShoppingListItemScalarWhereInput {

    @Field(() => [ShoppingListItemScalarWhereInput], {nullable:true})
    AND?: Array<ShoppingListItemScalarWhereInput>;

    @Field(() => [ShoppingListItemScalarWhereInput], {nullable:true})
    OR?: Array<ShoppingListItemScalarWhereInput>;

    @Field(() => [ShoppingListItemScalarWhereInput], {nullable:true})
    NOT?: Array<ShoppingListItemScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    quantity?: FloatFilter;

    @Field(() => IntFilter, {nullable:true})
    unit_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    category_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
