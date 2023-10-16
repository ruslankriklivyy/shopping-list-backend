import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TokenWhereUniqueInput } from './token-where-unique.input';
import { Type } from 'class-transformer';
import { TokenUpdateWithoutUserInput } from './token-update-without-user.input';
import { TokenCreateWithoutUserInput } from './token-create-without-user.input';

@InputType()
export class TokenUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => TokenWhereUniqueInput, {nullable:false})
    @Type(() => TokenWhereUniqueInput)
    where!: Prisma.AtLeast<TokenWhereUniqueInput, 'id' | 'access_token' | 'refresh_token'>;

    @Field(() => TokenUpdateWithoutUserInput, {nullable:false})
    @Type(() => TokenUpdateWithoutUserInput)
    update!: TokenUpdateWithoutUserInput;

    @Field(() => TokenCreateWithoutUserInput, {nullable:false})
    @Type(() => TokenCreateWithoutUserInput)
    create!: TokenCreateWithoutUserInput;
}
