import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PermissionType } from '../prisma/permission-type.enum';
import { PermissionRoleUncheckedUpdateManyWithoutPermissionNestedInput } from '../permission-role/permission-role-unchecked-update-many-without-permission-nested.input';

@InputType()
export class PermissionUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => PermissionRoleUncheckedUpdateManyWithoutPermissionNestedInput, {nullable:true})
    roles?: PermissionRoleUncheckedUpdateManyWithoutPermissionNestedInput;
}
