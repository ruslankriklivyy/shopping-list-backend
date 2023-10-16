import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionType } from '../prisma/permission-type.enum';
import { PermissionRoleUpdateManyWithoutPermissionNestedInput } from '../permission-role/permission-role-update-many-without-permission-nested.input';

@InputType()
export class PermissionUpdateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => PermissionType, {nullable:true})
    type?: keyof typeof PermissionType;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => PermissionRoleUpdateManyWithoutPermissionNestedInput, {nullable:true})
    roles?: PermissionRoleUpdateManyWithoutPermissionNestedInput;
}
