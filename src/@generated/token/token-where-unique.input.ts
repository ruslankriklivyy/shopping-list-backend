import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TokenWhereInput } from './token-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class TokenWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    access_token?: string;

    @Field(() => String, {nullable:true})
    refresh_token?: string;

    @Field(() => [TokenWhereInput], {nullable:true})
    AND?: Array<TokenWhereInput>;

    @Field(() => [TokenWhereInput], {nullable:true})
    OR?: Array<TokenWhereInput>;

    @Field(() => [TokenWhereInput], {nullable:true})
    NOT?: Array<TokenWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    user_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
