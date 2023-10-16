import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionRoleWhereInput } from './permission-role-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPermissionRoleArgs {

    @Field(() => PermissionRoleWhereInput, {nullable:true})
    @Type(() => PermissionRoleWhereInput)
    where?: PermissionRoleWhereInput;
}
