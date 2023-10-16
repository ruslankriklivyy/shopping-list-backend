import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PermissionRoleScalarWhereWithAggregatesInput {

    @Field(() => [PermissionRoleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PermissionRoleScalarWhereWithAggregatesInput>;

    @Field(() => [PermissionRoleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PermissionRoleScalarWhereWithAggregatesInput>;

    @Field(() => [PermissionRoleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PermissionRoleScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    role_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    permission_id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
