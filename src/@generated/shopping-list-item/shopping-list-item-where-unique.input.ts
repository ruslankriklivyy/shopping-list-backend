import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShoppingListItemWhereInput } from './shopping-list-item-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UnitRelationFilter } from '../unit/unit-relation-filter.input';
import { CategoryRelationFilter } from '../category/category-relation-filter.input';

@InputType()
export class ShoppingListItemWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ShoppingListItemWhereInput], {nullable:true})
    AND?: Array<ShoppingListItemWhereInput>;

    @Field(() => [ShoppingListItemWhereInput], {nullable:true})
    OR?: Array<ShoppingListItemWhereInput>;

    @Field(() => [ShoppingListItemWhereInput], {nullable:true})
    NOT?: Array<ShoppingListItemWhereInput>;

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

    @Field(() => UnitRelationFilter, {nullable:true})
    unit?: UnitRelationFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    category?: CategoryRelationFilter;
}
