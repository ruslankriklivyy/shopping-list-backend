import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionRoleWhereInput } from './permission-role-where.input';
import { Type } from 'class-transformer';
import { PermissionRoleOrderByWithRelationInput } from './permission-role-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PermissionRoleWhereUniqueInput } from './permission-role-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PermissionRoleCountAggregateInput } from './permission-role-count-aggregate.input';
import { PermissionRoleAvgAggregateInput } from './permission-role-avg-aggregate.input';
import { PermissionRoleSumAggregateInput } from './permission-role-sum-aggregate.input';
import { PermissionRoleMinAggregateInput } from './permission-role-min-aggregate.input';
import { PermissionRoleMaxAggregateInput } from './permission-role-max-aggregate.input';

@ArgsType()
export class PermissionRoleAggregateArgs {

    @Field(() => PermissionRoleWhereInput, {nullable:true})
    @Type(() => PermissionRoleWhereInput)
    where?: PermissionRoleWhereInput;

    @Field(() => [PermissionRoleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PermissionRoleOrderByWithRelationInput>;

    @Field(() => PermissionRoleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PermissionRoleWhereUniqueInput, 'role_id_permission_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PermissionRoleCountAggregateInput, {nullable:true})
    _count?: PermissionRoleCountAggregateInput;

    @Field(() => PermissionRoleAvgAggregateInput, {nullable:true})
    _avg?: PermissionRoleAvgAggregateInput;

    @Field(() => PermissionRoleSumAggregateInput, {nullable:true})
    _sum?: PermissionRoleSumAggregateInput;

    @Field(() => PermissionRoleMinAggregateInput, {nullable:true})
    _min?: PermissionRoleMinAggregateInput;

    @Field(() => PermissionRoleMaxAggregateInput, {nullable:true})
    _max?: PermissionRoleMaxAggregateInput;
}
