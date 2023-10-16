import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionRoleCreateManyInput } from './permission-role-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPermissionRoleArgs {

    @Field(() => [PermissionRoleCreateManyInput], {nullable:false})
    @Type(() => PermissionRoleCreateManyInput)
    data!: Array<PermissionRoleCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
