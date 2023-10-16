import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ShoppingListUserOrderByRelationAggregateInput } from '../shopping-list-user/shopping-list-user-order-by-relation-aggregate.input';
import { ShoppingListOrderByRelationAggregateInput } from '../shopping-list/shopping-list-order-by-relation-aggregate.input';
import { TokenOrderByRelationAggregateInput } from '../token/token-order-by-relation-aggregate.input';
import { RoleOrderByWithRelationInput } from '../role/role-order-by-with-relation.input';
import { FileOrderByWithRelationInput } from '../file/file-order-by-with-relation.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    role_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    avatar_id?: SortOrderInput;

    @Field(() => ShoppingListUserOrderByRelationAggregateInput, {nullable:true})
    shopping_lists?: ShoppingListUserOrderByRelationAggregateInput;

    @Field(() => ShoppingListOrderByRelationAggregateInput, {nullable:true})
    own_shopping_lists?: ShoppingListOrderByRelationAggregateInput;

    @Field(() => TokenOrderByRelationAggregateInput, {nullable:true})
    tokens?: TokenOrderByRelationAggregateInput;

    @Field(() => RoleOrderByWithRelationInput, {nullable:true})
    role?: RoleOrderByWithRelationInput;

    @Field(() => FileOrderByWithRelationInput, {nullable:true})
    avatar?: FileOrderByWithRelationInput;
}
