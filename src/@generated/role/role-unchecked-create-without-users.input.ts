import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PermissionRoleUncheckedCreateNestedManyWithoutRoleInput } from '../permission-role/permission-role-unchecked-create-nested-many-without-role.input';

@InputType()
export class RoleUncheckedCreateWithoutUsersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => PermissionRoleUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    permissions?: PermissionRoleUncheckedCreateNestedManyWithoutRoleInput;
}
