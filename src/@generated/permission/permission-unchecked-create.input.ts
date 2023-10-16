import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PermissionType } from '../prisma/permission-type.enum';
import { PermissionRoleUncheckedCreateNestedManyWithoutPermissionInput } from '../permission-role/permission-role-unchecked-create-nested-many-without-permission.input';

@InputType()
export class PermissionUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => PermissionRoleUncheckedCreateNestedManyWithoutPermissionInput, {nullable:true})
    roles?: PermissionRoleUncheckedCreateNestedManyWithoutPermissionInput;
}
