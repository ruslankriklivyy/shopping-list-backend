import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PermissionRoleCountOrderByAggregateInput } from './permission-role-count-order-by-aggregate.input';
import { PermissionRoleAvgOrderByAggregateInput } from './permission-role-avg-order-by-aggregate.input';
import { PermissionRoleMaxOrderByAggregateInput } from './permission-role-max-order-by-aggregate.input';
import { PermissionRoleMinOrderByAggregateInput } from './permission-role-min-order-by-aggregate.input';
import { PermissionRoleSumOrderByAggregateInput } from './permission-role-sum-order-by-aggregate.input';

@InputType()
export class PermissionRoleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    role_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    permission_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => PermissionRoleCountOrderByAggregateInput, {nullable:true})
    _count?: PermissionRoleCountOrderByAggregateInput;

    @Field(() => PermissionRoleAvgOrderByAggregateInput, {nullable:true})
    _avg?: PermissionRoleAvgOrderByAggregateInput;

    @Field(() => PermissionRoleMaxOrderByAggregateInput, {nullable:true})
    _max?: PermissionRoleMaxOrderByAggregateInput;

    @Field(() => PermissionRoleMinOrderByAggregateInput, {nullable:true})
    _min?: PermissionRoleMinOrderByAggregateInput;

    @Field(() => PermissionRoleSumOrderByAggregateInput, {nullable:true})
    _sum?: PermissionRoleSumOrderByAggregateInput;
}
