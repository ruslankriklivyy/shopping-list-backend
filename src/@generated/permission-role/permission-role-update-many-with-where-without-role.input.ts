import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionRoleScalarWhereInput } from './permission-role-scalar-where.input';
import { Type } from 'class-transformer';
import { PermissionRoleUpdateManyMutationInput } from './permission-role-update-many-mutation.input';

@InputType()
export class PermissionRoleUpdateManyWithWhereWithoutRoleInput {

    @Field(() => PermissionRoleScalarWhereInput, {nullable:false})
    @Type(() => PermissionRoleScalarWhereInput)
    where!: PermissionRoleScalarWhereInput;

    @Field(() => PermissionRoleUpdateManyMutationInput, {nullable:false})
    @Type(() => PermissionRoleUpdateManyMutationInput)
    data!: PermissionRoleUpdateManyMutationInput;
}
