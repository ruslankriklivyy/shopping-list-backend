import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TokenWhereUniqueInput } from './token-where-unique.input';
import { Type } from 'class-transformer';
import { TokenUpdateWithoutUserInput } from './token-update-without-user.input';

@InputType()
export class TokenUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => TokenWhereUniqueInput, {nullable:false})
    @Type(() => TokenWhereUniqueInput)
    where!: Prisma.AtLeast<TokenWhereUniqueInput, 'id' | 'access_token' | 'refresh_token'>;

    @Field(() => TokenUpdateWithoutUserInput, {nullable:false})
    @Type(() => TokenUpdateWithoutUserInput)
    data!: TokenUpdateWithoutUserInput;
}
