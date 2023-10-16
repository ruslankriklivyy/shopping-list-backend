import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PermissionRoleScalarWhereInput {

    @Field(() => [PermissionRoleScalarWhereInput], {nullable:true})
    AND?: Array<PermissionRoleScalarWhereInput>;

    @Field(() => [PermissionRoleScalarWhereInput], {nullable:true})
    OR?: Array<PermissionRoleScalarWhereInput>;

    @Field(() => [PermissionRoleScalarWhereInput], {nullable:true})
    NOT?: Array<PermissionRoleScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    role_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    permission_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
