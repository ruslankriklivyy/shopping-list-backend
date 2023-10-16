import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyAvatarInput } from './user-create-many-avatar.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateManyAvatarInputEnvelope {

    @Field(() => [UserCreateManyAvatarInput], {nullable:false})
    @Type(() => UserCreateManyAvatarInput)
    data!: Array<UserCreateManyAvatarInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
