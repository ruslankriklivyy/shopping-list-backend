import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PermissionRoleSumAggregate {

    @Field(() => Int, {nullable:true})
    role_id?: number;

    @Field(() => Int, {nullable:true})
    permission_id?: number;
}
