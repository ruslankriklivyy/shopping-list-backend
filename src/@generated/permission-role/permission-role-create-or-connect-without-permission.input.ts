import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionRoleWhereUniqueInput } from './permission-role-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionRoleCreateWithoutPermissionInput } from './permission-role-create-without-permission.input';

@InputType()
export class PermissionRoleCreateOrConnectWithoutPermissionInput {

    @Field(() => PermissionRoleWhereUniqueInput, {nullable:false})
    @Type(() => PermissionRoleWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionRoleWhereUniqueInput, 'role_id_permission_id'>;

    @Field(() => PermissionRoleCreateWithoutPermissionInput, {nullable:false})
    @Type(() => PermissionRoleCreateWithoutPermissionInput)
    create!: PermissionRoleCreateWithoutPermissionInput;
}
