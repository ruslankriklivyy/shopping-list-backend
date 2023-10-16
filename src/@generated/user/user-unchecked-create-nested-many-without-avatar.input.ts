import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAvatarInput } from './user-create-without-avatar.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAvatarInput } from './user-create-or-connect-without-avatar.input';
import { UserCreateManyAvatarInputEnvelope } from './user-create-many-avatar-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutAvatarInput {

    @Field(() => [UserCreateWithoutAvatarInput], {nullable:true})
    @Type(() => UserCreateWithoutAvatarInput)
    create?: Array<UserCreateWithoutAvatarInput>;

    @Field(() => [UserCreateOrConnectWithoutAvatarInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAvatarInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutAvatarInput>;

    @Field(() => UserCreateManyAvatarInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyAvatarInputEnvelope)
    createMany?: UserCreateManyAvatarInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
}
