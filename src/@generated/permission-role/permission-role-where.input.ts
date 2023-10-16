import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RoleRelationFilter } from '../role/role-relation-filter.input';
import { PermissionRelationFilter } from '../permission/permission-relation-filter.input';

@InputType()
export class PermissionRoleWhereInput {

    @Field(() => [PermissionRoleWhereInput], {nullable:true})
    AND?: Array<PermissionRoleWhereInput>;

    @Field(() => [PermissionRoleWhereInput], {nullable:true})
    OR?: Array<PermissionRoleWhereInput>;

    @Field(() => [PermissionRoleWhereInput], {nullable:true})
    NOT?: Array<PermissionRoleWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    role_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    permission_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => RoleRelationFilter, {nullable:true})
    role?: RoleRelationFilter;

    @Field(() => PermissionRelationFilter, {nullable:true})
    permission?: PermissionRelationFilter;
}
