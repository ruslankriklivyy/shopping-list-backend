import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionType } from '../prisma/permission-type.enum';
import { PermissionRoleCreateNestedManyWithoutPermissionInput } from '../permission-role/permission-role-create-nested-many-without-permission.input';

@InputType()
export class PermissionCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => PermissionType, {nullable:false})
    type!: keyof typeof PermissionType;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => PermissionRoleCreateNestedManyWithoutPermissionInput, {nullable:true})
    roles?: PermissionRoleCreateNestedManyWithoutPermissionInput;
}
