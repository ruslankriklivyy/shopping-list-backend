import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionRoleUpdateManyMutationInput } from './permission-role-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PermissionRoleWhereInput } from './permission-role-where.input';

@ArgsType()
export class UpdateManyPermissionRoleArgs {

    @Field(() => PermissionRoleUpdateManyMutationInput, {nullable:false})
    @Type(() => PermissionRoleUpdateManyMutationInput)
    data!: PermissionRoleUpdateManyMutationInput;

    @Field(() => PermissionRoleWhereInput, {nullable:true})
    @Type(() => PermissionRoleWhereInput)
    where?: PermissionRoleWhereInput;
}
