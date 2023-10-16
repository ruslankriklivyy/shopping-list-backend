import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenCreateWithoutUserInput } from './token-create-without-user.input';
import { Type } from 'class-transformer';
import { TokenCreateOrConnectWithoutUserInput } from './token-create-or-connect-without-user.input';
import { TokenUpsertWithWhereUniqueWithoutUserInput } from './token-upsert-with-where-unique-without-user.input';
import { TokenCreateManyUserInputEnvelope } from './token-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TokenWhereUniqueInput } from './token-where-unique.input';
import { TokenUpdateWithWhereUniqueWithoutUserInput } from './token-update-with-where-unique-without-user.input';
import { TokenUpdateManyWithWhereWithoutUserInput } from './token-update-many-with-where-without-user.input';
import { TokenScalarWhereInput } from './token-scalar-where.input';

@InputType()
export class TokenUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [TokenCreateWithoutUserInput], {nullable:true})
    @Type(() => TokenCreateWithoutUserInput)
    create?: Array<TokenCreateWithoutUserInput>;

    @Field(() => [TokenCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => TokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<TokenCreateOrConnectWithoutUserInput>;

    @Field(() => [TokenUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => TokenUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<TokenUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => TokenCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => TokenCreateManyUserInputEnvelope)
    createMany?: TokenCreateManyUserInputEnvelope;

    @Field(() => [TokenWhereUniqueInput], {nullable:true})
    @Type(() => TokenWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TokenWhereUniqueInput, 'id' | 'access_token' | 'refresh_token'>>;

    @Field(() => [TokenWhereUniqueInput], {nullable:true})
    @Type(() => TokenWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TokenWhereUniqueInput, 'id' | 'access_token' | 'refresh_token'>>;

    @Field(() => [TokenWhereUniqueInput], {nullable:true})
    @Type(() => TokenWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TokenWhereUniqueInput, 'id' | 'access_token' | 'refresh_token'>>;

    @Field(() => [TokenWhereUniqueInput], {nullable:true})
    @Type(() => TokenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TokenWhereUniqueInput, 'id' | 'access_token' | 'refresh_token'>>;

    @Field(() => [TokenUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => TokenUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<TokenUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [TokenUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => TokenUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<TokenUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [TokenScalarWhereInput], {nullable:true})
    @Type(() => TokenScalarWhereInput)
    deleteMany?: Array<TokenScalarWhereInput>;
}
