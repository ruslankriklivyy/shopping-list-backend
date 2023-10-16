import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionRoleCreateInput } from './permission-role-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePermissionRoleArgs {

    @Field(() => PermissionRoleCreateInput, {nullable:false})
    @Type(() => PermissionRoleCreateInput)
    data!: PermissionRoleCreateInput;
}
