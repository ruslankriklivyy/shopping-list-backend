import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ShoppingListUserListRelationFilter } from '../shopping-list-user/shopping-list-user-list-relation-filter.input';
import { ShoppingListListRelationFilter } from '../shopping-list/shopping-list-list-relation-filter.input';
import { TokenListRelationFilter } from '../token/token-list-relation-filter.input';
import { RoleRelationFilter } from '../role/role-relation-filter.input';
import { FileRelationFilter } from '../file/file-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    role_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    avatar_id?: IntFilter;

    @Field(() => ShoppingListUserListRelationFilter, {nullable:true})
    shopping_lists?: ShoppingListUserListRelationFilter;

    @Field(() => ShoppingListListRelationFilter, {nullable:true})
    own_shopping_lists?: ShoppingListListRelationFilter;

    @Field(() => TokenListRelationFilter, {nullable:true})
    tokens?: TokenListRelationFilter;

    @Field(() => RoleRelationFilter, {nullable:true})
    role?: RoleRelationFilter;

    @Field(() => FileRelationFilter, {nullable:true})
    avatar?: FileRelationFilter;
}
