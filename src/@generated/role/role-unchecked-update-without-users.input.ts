import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PermissionRoleUncheckedUpdateManyWithoutRoleNestedInput } from '../permission-role/permission-role-unchecked-update-many-without-role-nested.input';

@InputType()
export class RoleUncheckedUpdateWithoutUsersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => PermissionRoleUncheckedUpdateManyWithoutRoleNestedInput, {nullable:true})
    permissions?: PermissionRoleUncheckedUpdateManyWithoutRoleNestedInput;
}
