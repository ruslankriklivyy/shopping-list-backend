import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ShoppingListUserSumAggregate {

    @Field(() => Int, {nullable:true})
    user_id?: number;

    @Field(() => Int, {nullable:true})
    shopping_list_id?: number;
}
