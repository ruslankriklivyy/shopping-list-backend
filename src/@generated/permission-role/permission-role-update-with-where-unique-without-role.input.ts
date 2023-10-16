import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionRoleWhereUniqueInput } from './permission-role-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionRoleUpdateWithoutRoleInput } from './permission-role-update-without-role.input';

@InputType()
export class PermissionRoleUpdateWithWhereUniqueWithoutRoleInput {

    @Field(() => PermissionRoleWhereUniqueInput, {nullable:false})
    @Type(() => PermissionRoleWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionRoleWhereUniqueInput, 'role_id_permission_id'>;

    @Field(() => PermissionRoleUpdateWithoutRoleInput, {nullable:false})
    @Type(() => PermissionRoleUpdateWithoutRoleInput)
    data!: PermissionRoleUpdateWithoutRoleInput;
}
