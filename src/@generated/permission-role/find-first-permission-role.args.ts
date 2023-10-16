import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionRoleWhereInput } from './permission-role-where.input';
import { Type } from 'class-transformer';
import { PermissionRoleOrderByWithRelationInput } from './permission-role-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PermissionRoleWhereUniqueInput } from './permission-role-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PermissionRoleScalarFieldEnum } from './permission-role-scalar-field.enum';

@ArgsType()
export class FindFirstPermissionRoleArgs {

    @Field(() => PermissionRoleWhereInput, {nullable:true})
    @Type(() => PermissionRoleWhereInput)
    where?: PermissionRoleWhereInput;

    @Field(() => [PermissionRoleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PermissionRoleOrderByWithRelationInput>;

    @Field(() => PermissionRoleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PermissionRoleWhereUniqueInput, 'role_id_permission_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PermissionRoleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PermissionRoleScalarFieldEnum>;
}
