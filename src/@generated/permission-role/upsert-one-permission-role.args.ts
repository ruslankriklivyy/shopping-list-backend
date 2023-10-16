import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionRoleWhereUniqueInput } from './permission-role-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionRoleCreateInput } from './permission-role-create.input';
import { PermissionRoleUpdateInput } from './permission-role-update.input';

@ArgsType()
export class UpsertOnePermissionRoleArgs {

    @Field(() => PermissionRoleWhereUniqueInput, {nullable:false})
    @Type(() => PermissionRoleWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionRoleWhereUniqueInput, 'role_id_permission_id'>;

    @Field(() => PermissionRoleCreateInput, {nullable:false})
    @Type(() => PermissionRoleCreateInput)
    create!: PermissionRoleCreateInput;

    @Field(() => PermissionRoleUpdateInput, {nullable:false})
    @Type(() => PermissionRoleUpdateInput)
    update!: PermissionRoleUpdateInput;
}
