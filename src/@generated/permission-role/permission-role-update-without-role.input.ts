import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionUpdateOneRequiredWithoutRolesNestedInput } from '../permission/permission-update-one-required-without-roles-nested.input';

@InputType()
export class PermissionRoleUpdateWithoutRoleInput {

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => PermissionUpdateOneRequiredWithoutRolesNestedInput, {nullable:true})
    permission?: PermissionUpdateOneRequiredWithoutRolesNestedInput;
}
