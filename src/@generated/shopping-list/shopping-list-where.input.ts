import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ShoppingListUserListRelationFilter } from '../shopping-list-user/shopping-list-user-list-relation-filter.input';

@InputType()
export class ShoppingListWhereInput {

    @Field(() => [ShoppingListWhereInput], {nullable:true})
    AND?: Array<ShoppingListWhereInput>;

    @Field(() => [ShoppingListWhereInput], {nullable:true})
    OR?: Array<ShoppingListWhereInput>;

    @Field(() => [ShoppingListWhereInput], {nullable:true})
    NOT?: Array<ShoppingListWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    author?: UserRelationFilter;

    @Field(() => ShoppingListUserListRelationFilter, {nullable:true})
    responsibles?: ShoppingListUserListRelationFilter;
}
