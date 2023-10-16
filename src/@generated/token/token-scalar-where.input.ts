import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TokenScalarWhereInput {

    @Field(() => [TokenScalarWhereInput], {nullable:true})
    AND?: Array<TokenScalarWhereInput>;

    @Field(() => [TokenScalarWhereInput], {nullable:true})
    OR?: Array<TokenScalarWhereInput>;

    @Field(() => [TokenScalarWhereInput], {nullable:true})
    NOT?: Array<TokenScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    access_token?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    refresh_token?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    user_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
