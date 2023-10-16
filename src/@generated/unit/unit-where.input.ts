import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ShoppingListItemListRelationFilter } from '../shopping-list-item/shopping-list-item-list-relation-filter.input';

@InputType()
export class UnitWhereInput {

    @Field(() => [UnitWhereInput], {nullable:true})
    AND?: Array<UnitWhereInput>;

    @Field(() => [UnitWhereInput], {nullable:true})
    OR?: Array<UnitWhereInput>;

    @Field(() => [UnitWhereInput], {nullable:true})
    NOT?: Array<UnitWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
