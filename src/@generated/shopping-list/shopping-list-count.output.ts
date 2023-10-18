import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ShoppingListCount {

    @Field(() => Int, {nullable:false})
    responsibles?: number;

    @Field(() => Int, {nullable:false})
    shopping_list_items?: number;
}
