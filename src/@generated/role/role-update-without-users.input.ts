import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionRoleUpdateManyWithoutRoleNestedInput } from '../permission-role/permission-role-update-many-without-role-nested.input';

@InputType()
export class RoleUpdateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => PermissionRoleUpdateManyWithoutRoleNestedInput, {nullable:true})
    permissions?: PermissionRoleUpdateManyWithoutRoleNestedInput;
}
