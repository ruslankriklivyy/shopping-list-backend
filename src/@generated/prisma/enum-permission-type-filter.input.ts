import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionType } from './permission-type.enum';

@InputType()
export class EnumPermissionTypeFilter {

    @Field(() => PermissionType, {nullable:true})
    equals?: keyof typeof PermissionType;

    @Field(() => [PermissionType], {nullable:true})
    in?: Array<keyof typeof PermissionType>;

    @Field(() => [PermissionType], {nullable:true})
    notIn?: Array<keyof typeof PermissionType>;

    @Field(() => EnumPermissionTypeFilter, {nullable:true})
    not?: EnumPermissionTypeFilter;
}
