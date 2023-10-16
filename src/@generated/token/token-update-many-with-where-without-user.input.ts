import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenScalarWhereInput } from './token-scalar-where.input';
import { Type } from 'class-transformer';
import { TokenUpdateManyMutationInput } from './token-update-many-mutation.input';

@InputType()
export class TokenUpdateManyWithWhereWithoutUserInput {

    @Field(() => TokenScalarWhereInput, {nullable:false})
    @Type(() => TokenScalarWhereInput)
    where!: TokenScalarWhereInput;

    @Field(() => TokenUpdateManyMutationInput, {nullable:false})
    @Type(() => TokenUpdateManyMutationInput)
    data!: TokenUpdateManyMutationInput;
}
