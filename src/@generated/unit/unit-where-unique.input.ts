import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UnitWhereInput } from './unit-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ShoppingListItemListRelationFilter } from '../shopping-list-item/shopping-list-item-list-relation-filter.input';

@InputType()
export class UnitWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [UnitWhereInput], {nullable:true})
    AND?: Array<UnitWhereInput>;

    @Field(() => [UnitWhereInput], {nullable:true})
    OR?: Array<UnitWhereInput>;

    @Field(() => [UnitWhereInput], {nullable:true})
    NOT?: Array<UnitWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    value?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => ShoppingListItemListRelationFilter, {nullable:true})
    shopping_list_items?: ShoppingListItemListRelationFilter;
}
