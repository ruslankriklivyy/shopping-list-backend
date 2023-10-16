import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ShoppingListScalarWhereInput {

    @Field(() => [ShoppingListScalarWhereInput], {nullable:true})
    AND?: Array<ShoppingListScalarWhereInput>;

    @Field(() => [ShoppingListScalarWhereInput], {nullable:true})
    OR?: Array<ShoppingListScalarWhereInput>;

    @Field(() => [ShoppingListScalarWhereInput], {nullable:true})
    NOT?: Array<ShoppingListScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    color?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    author_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
