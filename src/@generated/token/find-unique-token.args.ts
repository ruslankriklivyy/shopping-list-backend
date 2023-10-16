import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TokenWhereUniqueInput } from './token-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueTokenArgs {

    @Field(() => TokenWhereUniqueInput, {nullable:false})
    @Type(() => TokenWhereUniqueInput)
    where!: Prisma.AtLeast<TokenWhereUniqueInput, 'id' | 'access_token' | 'refresh_token'>;
}
