import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PermissionRoleCountAggregate } from './permission-role-count-aggregate.output';
import { PermissionRoleAvgAggregate } from './permission-role-avg-aggregate.output';
import { PermissionRoleSumAggregate } from './permission-role-sum-aggregate.output';
import { PermissionRoleMinAggregate } from './permission-role-min-aggregate.output';
import { PermissionRoleMaxAggregate } from './permission-role-max-aggregate.output';

@ObjectType()
export class PermissionRoleGroupBy {

    @Field(() => Int, {nullable:false})
    role_id!: number;

    @Field(() => Int, {nullable:false})
    permission_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => PermissionRoleCountAggregate, {nullable:true})
    _count?: PermissionRoleCountAggregate;

    @Field(() => PermissionRoleAvgAggregate, {nullable:true})
    _avg?: PermissionRoleAvgAggregate;

    @Field(() => PermissionRoleSumAggregate, {nullable:true})
    _sum?: PermissionRoleSumAggregate;

    @Field(() => PermissionRoleMinAggregate, {nullable:true})
    _min?: PermissionRoleMinAggregate;

    @Field(() => PermissionRoleMaxAggregate, {nullable:true})
    _max?: PermissionRoleMaxAggregate;
}
