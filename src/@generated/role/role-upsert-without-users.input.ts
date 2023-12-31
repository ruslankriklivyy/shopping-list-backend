import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateWithoutUsersInput } from './role-update-without-users.input';
import { Type } from 'class-transformer';
import { RoleCreateWithoutUsersInput } from './role-create-without-users.input';
import { RoleWhereInput } from './role-where.input';

@InputType()
export class RoleUpsertWithoutUsersInput {

    @Field(() => RoleUpdateWithoutUsersInput, {nullable:false})
    @Type(() => RoleUpdateWithoutUsersInput)
    update!: RoleUpdateWithoutUsersInput;

    @Field(() => RoleCreateWithoutUsersInput, {nullable:false})
    @Type(() => RoleCreateWithoutUsersInput)
    create!: RoleCreateWithoutUsersInput;

    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: RoleWhereInput;
}
