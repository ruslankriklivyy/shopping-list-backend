import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionRoleCreateWithoutRoleInput } from './permission-role-create-without-role.input';
import { Type } from 'class-transformer';
import { PermissionRoleCreateOrConnectWithoutRoleInput } from './permission-role-create-or-connect-without-role.input';
import { PermissionRoleUpsertWithWhereUniqueWithoutRoleInput } from './permission-role-upsert-with-where-unique-without-role.input';
import { PermissionRoleCreateManyRoleInputEnvelope } from './permission-role-create-many-role-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PermissionRoleWhereUniqueInput } from './permission-role-where-unique.input';
import { PermissionRoleUpdateWithWhereUniqueWithoutRoleInput } from './permission-role-update-with-where-unique-without-role.input';
import { PermissionRoleUpdateManyWithWhereWithoutRoleInput } from './permission-role-update-many-with-where-without-role.input';
import { PermissionRoleScalarWhereInput } from './permission-role-scalar-where.input';

@InputType()
export class PermissionRoleUncheckedUpdateManyWithoutRoleNestedInput {

    @Field(() => [PermissionRoleCreateWithoutRoleInput], {nullable:true})
    @Type(() => PermissionRoleCreateWithoutRoleInput)
    create?: Array<PermissionRoleCreateWithoutRoleInput>;

    @Field(() => [PermissionRoleCreateOrConnectWithoutRoleInput], {nullable:true})
    @Type(() => PermissionRoleCreateOrConnectWithoutRoleInput)
    connectOrCreate?: Array<PermissionRoleCreateOrConnectWithoutRoleInput>;

    @Field(() => [PermissionRoleUpsertWithWhereUniqueWithoutRoleInput], {nullable:true})
    @Type(() => PermissionRoleUpsertWithWhereUniqueWithoutRoleInput)
    upsert?: Array<PermissionRoleUpsertWithWhereUniqueWithoutRoleInput>;

    @Field(() => PermissionRoleCreateManyRoleInputEnvelope, {nullable:true})
    @Type(() => PermissionRoleCreateManyRoleInputEnvelope)
    createMany?: PermissionRoleCreateManyRoleInputEnvelope;

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

    @Field(() => [PermissionRoleUpdateWithWhereUniqueWithoutRoleInput], {nullable:true})
    @Type(() => PermissionRoleUpdateWithWhereUniqueWithoutRoleInput)
    update?: Array<PermissionRoleUpdateWithWhereUniqueWithoutRoleInput>;

    @Field(() => [PermissionRoleUpdateManyWithWhereWithoutRoleInput], {nullable:true})
    @Type(() => PermissionRoleUpdateManyWithWhereWithoutRoleInput)
    updateMany?: Array<PermissionRoleUpdateManyWithWhereWithoutRoleInput>;

    @Field(() => [PermissionRoleScalarWhereInput], {nullable:true})
    @Type(() => PermissionRoleScalarWhereInput)
    deleteMany?: Array<PermissionRoleScalarWhereInput>;
}
