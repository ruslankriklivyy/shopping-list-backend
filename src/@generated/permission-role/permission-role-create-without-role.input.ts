import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateNestedOneWithoutRolesInput } from '../permission/permission-create-nested-one-without-roles.input';

@InputType()
export class PermissionRoleCreateWithoutRoleInput {

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => PermissionCreateNestedOneWithoutRolesInput, {nullable:false})
    permission!: PermissionCreateNestedOneWithoutRolesInput;
}
