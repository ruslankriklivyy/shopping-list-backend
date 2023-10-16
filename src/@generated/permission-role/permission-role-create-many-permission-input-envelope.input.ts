import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionRoleCreateManyPermissionInput } from './permission-role-create-many-permission.input';
import { Type } from 'class-transformer';

@InputType()
export class PermissionRoleCreateManyPermissionInputEnvelope {

    @Field(() => [PermissionRoleCreateManyPermissionInput], {nullable:false})
    @Type(() => PermissionRoleCreateManyPermissionInput)
    data!: Array<PermissionRoleCreateManyPermissionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
