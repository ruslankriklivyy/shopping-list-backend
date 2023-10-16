import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionRoleCreateManyRoleInput } from './permission-role-create-many-role.input';
import { Type } from 'class-transformer';

@InputType()
export class PermissionRoleCreateManyRoleInputEnvelope {

    @Field(() => [PermissionRoleCreateManyRoleInput], {nullable:false})
    @Type(() => PermissionRoleCreateManyRoleInput)
    data!: Array<PermissionRoleCreateManyRoleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
