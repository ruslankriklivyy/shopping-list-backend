import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    shopping_lists?: number;

    @Field(() => Int, {nullable:false})
    own_shopping_lists?: number;

    @Field(() => Int, {nullable:false})
    tokens?: number;
}
