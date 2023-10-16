import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionType } from './permission-type.enum';
import { IntFilter } from './int-filter.input';
import { EnumPermissionTypeFilter } from './enum-permission-type-filter.input';

@InputType()
export class EnumPermissionTypeWithAggregatesFilter {

    @Field(() => PermissionType, {nullable:true})
    equals?: keyof typeof PermissionType;

    @Field(() => [PermissionType], {nullable:true})
    in?: Array<keyof typeof PermissionType>;

    @Field(() => [PermissionType], {nullable:true})
    notIn?: Array<keyof typeof PermissionType>;

    @Field(() => EnumPermissionTypeWithAggregatesFilter, {nullable:true})
    not?: EnumPermissionTypeWithAggregatesFilter;

    @Field(() => IntFilter, {nullable:true})
    _count?: IntFilter;

    @Field(() => EnumPermissionTypeFilter, {nullable:true})
    _min?: EnumPermissionTypeFilter;

    @Field(() => EnumPermissionTypeFilter, {nullable:true})
    _max?: EnumPermissionTypeFilter;
}
