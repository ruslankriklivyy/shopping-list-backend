import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenCreateWithoutUserInput } from './token-create-without-user.input';
import { Type } from 'class-transformer';
import { TokenCreateOrConnectWithoutUserInput } from './token-create-or-connect-without-user.input';
import { TokenCreateManyUserInputEnvelope } from './token-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TokenWhereUniqueInput } from './token-where-unique.input';

@InputType()
export class TokenCreateNestedManyWithoutUserInput {

    @Field(() => [TokenCreateWithoutUserInput], {nullable:true})
    @Type(() => TokenCreateWithoutUserInput)
    create?: Array<TokenCreateWithoutUserInput>;

    @Field(() => [TokenCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => TokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<TokenCreateOrConnectWithoutUserInput>;

    @Field(() => TokenCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => TokenCreateManyUserInputEnvelope)
    createMany?: TokenCreateManyUserInputEnvelope;

    @Field(() => [TokenWhereUniqueInput], {nullable:true})
    @Type(() => TokenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TokenWhereUniqueInput, 'id' | 'access_token' | 'refresh_token'>>;
}
