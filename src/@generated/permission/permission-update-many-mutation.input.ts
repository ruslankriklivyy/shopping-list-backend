import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionType } from '../prisma/permission-type.enum';

@InputType()
export class PermissionUpdateManyMutationInput {

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
}
