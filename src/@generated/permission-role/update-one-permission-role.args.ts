import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionRoleUpdateInput } from './permission-role-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PermissionRoleWhereUniqueInput } from './permission-role-where-unique.input';

@ArgsType()
export class UpdateOnePermissionRoleArgs {

    @Field(() => PermissionRoleUpdateInput, {nullable:false})
    @Type(() => PermissionRoleUpdateInput)
    data!: PermissionRoleUpdateInput;

    @Field(() => PermissionRoleWhereUniqueInput, {nullable:false})
    @Type(() => PermissionRoleWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionRoleWhereUniqueInput, 'role_id_permission_id'>;
}
