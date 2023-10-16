import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PermissionWhereInput } from './permission-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumPermissionTypeFilter } from '../prisma/enum-permission-type-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PermissionRoleListRelationFilter } from '../permission-role/permission-role-list-relation-filter.input';

@InputType()
export class PermissionWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => [PermissionWhereInput], {nullable:true})
    AND?: Array<PermissionWhereInput>;

    @Field(() => [PermissionWhereInput], {nullable:true})
    OR?: Array<PermissionWhereInput>;

    @Field(() => [PermissionWhereInput], {nullable:true})
    NOT?: Array<PermissionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumPermissionTypeFilter, {nullable:true})
    type?: EnumPermissionTypeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => PermissionRoleListRelationFilter, {nullable:true})
    roles?: PermissionRoleListRelationFilter;
}
