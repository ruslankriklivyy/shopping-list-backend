import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutAvatarInput } from './user-update-without-avatar.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutAvatarInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateWithoutAvatarInput, {nullable:false})
    @Type(() => UserUpdateWithoutAvatarInput)
    data!: UserUpdateWithoutAvatarInput;
}
