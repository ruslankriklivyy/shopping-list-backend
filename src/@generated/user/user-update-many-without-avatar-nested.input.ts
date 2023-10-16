import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAvatarInput } from './user-create-without-avatar.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAvatarInput } from './user-create-or-connect-without-avatar.input';
import { UserUpsertWithWhereUniqueWithoutAvatarInput } from './user-upsert-with-where-unique-without-avatar.input';
import { UserCreateManyAvatarInputEnvelope } from './user-create-many-avatar-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutAvatarInput } from './user-update-with-where-unique-without-avatar.input';
import { UserUpdateManyWithWhereWithoutAvatarInput } from './user-update-many-with-where-without-avatar.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutAvatarNestedInput {

    @Field(() => [UserCreateWithoutAvatarInput], {nullable:true})
    @Type(() => UserCreateWithoutAvatarInput)
    create?: Array<UserCreateWithoutAvatarInput>;

    @Field(() => [UserCreateOrConnectWithoutAvatarInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAvatarInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutAvatarInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutAvatarInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutAvatarInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutAvatarInput>;

    @Field(() => UserCreateManyAvatarInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyAvatarInputEnvelope)
    createMany?: UserCreateManyAvatarInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutAvatarInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutAvatarInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutAvatarInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutAvatarInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutAvatarInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutAvatarInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
