import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionRoleWhereUniqueInput } from './permission-role-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionRoleUpdateWithoutPermissionInput } from './permission-role-update-without-permission.input';
import { PermissionRoleCreateWithoutPermissionInput } from './permission-role-create-without-permission.input';

@InputType()
export class PermissionRoleUpsertWithWhereUniqueWithoutPermissionInput {

    @Field(() => PermissionRoleWhereUniqueInput, {nullable:false})
    @Type(() => PermissionRoleWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionRoleWhereUniqueInput, 'role_id_permission_id'>;

    @Field(() => PermissionRoleUpdateWithoutPermissionInput, {nullable:false})
    @Type(() => PermissionRoleUpdateWithoutPermissionInput)
    update!: PermissionRoleUpdateWithoutPermissionInput;

    @Field(() => PermissionRoleCreateWithoutPermissionInput, {nullable:false})
    @Type(() => PermissionRoleCreateWithoutPermissionInput)
    create!: PermissionRoleCreateWithoutPermissionInput;
}
