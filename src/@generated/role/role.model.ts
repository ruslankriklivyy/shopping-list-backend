import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { PermissionRole } from '../permission-role/permission-role.model';
import { RoleCount } from './role-count.output';

@ObjectType()
export class Role {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => [PermissionRole], {nullable:true})
    permissions?: Array<PermissionRole>;

    @Field(() => RoleCount, {nullable:false})
    _count?: RoleCount;
}
