import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenCreateManyUserInput } from './token-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class TokenCreateManyUserInputEnvelope {

    @Field(() => [TokenCreateManyUserInput], {nullable:false})
    @Type(() => TokenCreateManyUserInput)
    data!: Array<TokenCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
