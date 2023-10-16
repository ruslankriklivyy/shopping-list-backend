import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ShoppingListRelationFilter } from '../shopping-list/shopping-list-relation-filter.input';

@InputType()
export class ShoppingListUserWhereInput {

    @Field(() => [ShoppingListUserWhereInput], {nullable:true})
    AND?: Array<ShoppingListUserWhereInput>;

    @Field(() => [ShoppingListUserWhereInput], {nullable:true})
    OR?: Array<ShoppingListUserWhereInput>;

    @Field(() => [ShoppingListUserWhereInput], {nullable:true})
    NOT?: Array<ShoppingListUserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    user_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    shopping_list_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => ShoppingListRelationFilter, {nullable:true})
    shopping_list?: ShoppingListRelationFilter;
}
