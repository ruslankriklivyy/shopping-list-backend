import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListUserUser_idShopping_list_idCompoundUniqueInput } from './shopping-list-user-user-id-shopping-list-id-compound-unique.input';
import { ShoppingListUserWhereInput } from './shopping-list-user-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ShoppingListRelationFilter } from '../shopping-list/shopping-list-relation-filter.input';

@InputType()
export class ShoppingListUserWhereUniqueInput {

    @Field(() => ShoppingListUserUser_idShopping_list_idCompoundUniqueInput, {nullable:true})
    user_id_shopping_list_id?: ShoppingListUserUser_idShopping_list_idCompoundUniqueInput;

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
