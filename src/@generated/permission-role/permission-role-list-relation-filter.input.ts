import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionRoleWhereInput } from './permission-role-where.input';

@InputType()
export class PermissionRoleListRelationFilter {

    @Field(() => PermissionRoleWhereInput, {nullable:true})
    every?: PermissionRoleWhereInput;

    @Field(() => PermissionRoleWhereInput, {nullable:true})
    some?: PermissionRoleWhereInput;

    @Field(() => PermissionRoleWhereInput, {nullable:true})
    none?: PermissionRoleWhereInput;
}
