import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionRoleWhereUniqueInput } from './permission-role-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionRoleCreateWithoutRoleInput } from './permission-role-create-without-role.input';

@InputType()
export class PermissionRoleCreateOrConnectWithoutRoleInput {

    @Field(() => PermissionRoleWhereUniqueInput, {nullable:false})
    @Type(() => PermissionRoleWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionRoleWhereUniqueInput, 'role_id_permission_id'>;

    @Field(() => PermissionRoleCreateWithoutRoleInput, {nullable:false})
    @Type(() => PermissionRoleCreateWithoutRoleInput)
    create!: PermissionRoleCreateWithoutRoleInput;
}
