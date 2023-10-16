import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutTokensNestedInput } from '../user/user-update-one-required-without-tokens-nested.input';

@InputType()
export class TokenUpdateInput {

    @Field(() => String, {nullable:true})
    access_token?: string;

    @Field(() => String, {nullable:true})
    refresh_token?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => UserUpdateOneRequiredWithoutTokensNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutTokensNestedInput;
}
