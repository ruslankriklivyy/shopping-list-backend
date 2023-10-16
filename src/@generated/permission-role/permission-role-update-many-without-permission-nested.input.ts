import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionRoleCreateWithoutPermissionInput } from './permission-role-create-without-permission.input';
import { Type } from 'class-transformer';
import { PermissionRoleCreateOrConnectWithoutPermissionInput } from './permission-role-create-or-connect-without-permission.input';
import { PermissionRoleUpsertWithWhereUniqueWithoutPermissionInput } from './permission-role-upsert-with-where-unique-without-permission.input';
import { PermissionRoleCreateManyPermissionInputEnvelope } from './permission-role-create-many-permission-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PermissionRoleWhereUniqueInput } from './permission-role-where-unique.input';
import { PermissionRoleUpdateWithWhereUniqueWithoutPermissionInput } from './permission-role-update-with-where-unique-without-permission.input';
import { PermissionRoleUpdateManyWithWhereWithoutPermissionInput } from './permission-role-update-many-with-where-without-permission.input';
import { PermissionRoleScalarWhereInput } from './permission-role-scalar-where.input';

@InputType()
export class PermissionRoleUpdateManyWithoutPermissionNestedInput {

    @Field(() => [PermissionRoleCreateWithoutPermissionInput], {nullable:true})
    @Type(() => PermissionRoleCreateWithoutPermissionInput)
    create?: Array<PermissionRoleCreateWithoutPermissionInput>;

    @Field(() => [PermissionRoleCreateOrConnectWithoutPermissionInput], {nullable:true})
    @Type(() => PermissionRoleCreateOrConnectWithoutPermissionInput)
    connectOrCreate?: Array<PermissionRoleCreateOrConnectWithoutPermissionInput>;

    @Field(() => [PermissionRoleUpsertWithWhereUniqueWithoutPermissionInput], {nullable:true})
    @Type(() => PermissionRoleUpsertWithWhereUniqueWithoutPermissionInput)
    upsert?: Array<PermissionRoleUpsertWithWhereUniqueWithoutPermissionInput>;

    @Field(() => PermissionRoleCreateManyPermissionInputEnvelope, {nullable:true})
    @Type(() => PermissionRoleCreateManyPermissionInputEnvelope)
    createMany?: PermissionRoleCreateManyPermissionInputEnvelope;

    @Field(() => [PermissionRoleWhereUniqueInput], {nullable:true})
    @Type(() => PermissionRoleWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PermissionRoleWhereUniqueInput, 'role_id_permission_id'>>;

    @Field(() => [PermissionRoleWhereUniqueInput], {nullable:true})
    @Type(() => PermissionRoleWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PermissionRoleWhereUniqueInput, 'role_id_permission_id'>>;

    @Field(() => [PermissionRoleWhereUniqueInput], {nullable:true})
    @Type(() => PermissionRoleWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PermissionRoleWhereUniqueInput, 'role_id_permission_id'>>;

    @Field(() => [PermissionRoleWhereUniqueInput], {nullable:true})
    @Type(() => PermissionRoleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PermissionRoleWhereUniqueInput, 'role_id_permission_id'>>;

    @Field(() => [PermissionRoleUpdateWithWhereUniqueWithoutPermissionInput], {nullable:true})
    @Type(() => PermissionRoleUpdateWithWhereUniqueWithoutPermissionInput)
    update?: Array<PermissionRoleUpdateWithWhereUniqueWithoutPermissionInput>;

    @Field(() => [PermissionRoleUpdateManyWithWhereWithoutPermissionInput], {nullable:true})
    @Type(() => PermissionRoleUpdateManyWithWhereWithoutPermissionInput)
    updateMany?: Array<PermissionRoleUpdateManyWithWhereWithoutPermissionInput>;

    @Field(() => [PermissionRoleScalarWhereInput], {nullable:true})
    @Type(() => PermissionRoleScalarWhereInput)
    deleteMany?: Array<PermissionRoleScalarWhereInput>;
}
