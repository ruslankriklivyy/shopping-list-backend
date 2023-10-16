import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TokenCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    access_token!: string;

    @Field(() => String, {nullable:false})
    refresh_token!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
