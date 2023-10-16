import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionRoleCreateWithoutRoleInput } from './permission-role-create-without-role.input';
import { Type } from 'class-transformer';
import { PermissionRoleCreateOrConnectWithoutRoleInput } from './permission-role-create-or-connect-without-role.input';
import { PermissionRoleCreateManyRoleInputEnvelope } from './permission-role-create-many-role-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PermissionRoleWhereUniqueInput } from './permission-role-where-unique.input';

@InputType()
export class PermissionRoleCreateNestedManyWithoutRoleInput {

    @Field(() => [PermissionRoleCreateWithoutRoleInput], {nullable:true})
    @Type(() => PermissionRoleCreateWithoutRoleInput)
    create?: Array<PermissionRoleCreateWithoutRoleInput>;

    @Field(() => [PermissionRoleCreateOrConnectWithoutRoleInput], {nullable:true})
    @Type(() => PermissionRoleCreateOrConnectWithoutRoleInput)
    connectOrCreate?: Array<PermissionRoleCreateOrConnectWithoutRoleInput>;

    @Field(() => PermissionRoleCreateManyRoleInputEnvelope, {nullable:true})
    @Type(() => PermissionRoleCreateManyRoleInputEnvelope)
    createMany?: PermissionRoleCreateManyRoleInputEnvelope;

    @Field(() => [PermissionRoleWhereUniqueInput], {nullable:true})
    @Type(() => PermissionRoleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PermissionRoleWhereUniqueInput, 'role_id_permission_id'>>;
}
