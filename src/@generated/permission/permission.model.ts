import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PermissionType } from '../prisma/permission-type.enum';
import { PermissionRole } from '../permission-role/permission-role.model';
import { PermissionCount } from './permission-count.output';

@ObjectType()
export class Permission {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => PermissionType, {nullable:false})
    type!: keyof typeof PermissionType;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => [PermissionRole], {nullable:true})
    roles?: Array<PermissionRole>;

    @Field(() => PermissionCount, {nullable:false})
    _count?: PermissionCount;
}
