import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionRoleCreateWithoutPermissionInput } from './permission-role-create-without-permission.input';
import { Type } from 'class-transformer';
import { PermissionRoleCreateOrConnectWithoutPermissionInput } from './permission-role-create-or-connect-without-permission.input';
import { PermissionRoleCreateManyPermissionInputEnvelope } from './permission-role-create-many-permission-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PermissionRoleWhereUniqueInput } from './permission-role-where-unique.input';

@InputType()
export class PermissionRoleUncheckedCreateNestedManyWithoutPermissionInput {

    @Field(() => [PermissionRoleCreateWithoutPermissionInput], {nullable:true})
    @Type(() => PermissionRoleCreateWithoutPermissionInput)
    create?: Array<PermissionRoleCreateWithoutPermissionInput>;

    @Field(() => [PermissionRoleCreateOrConnectWithoutPermissionInput], {nullable:true})
    @Type(() => PermissionRoleCreateOrConnectWithoutPermissionInput)
    connectOrCreate?: Array<PermissionRoleCreateOrConnectWithoutPermissionInput>;

    @Field(() => PermissionRoleCreateManyPermissionInputEnvelope, {nullable:true})
    @Type(() => PermissionRoleCreateManyPermissionInputEnvelope)
    createMany?: PermissionRoleCreateManyPermissionInputEnvelope;

    @Field(() => [PermissionRoleWhereUniqueInput], {nullable:true})
    @Type(() => PermissionRoleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PermissionRoleWhereUniqueInput, 'role_id_permission_id'>>;
}
