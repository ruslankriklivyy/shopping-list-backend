import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ShoppingListUserAvgAggregate {

    @Field(() => Float, {nullable:true})
    user_id?: number;

    @Field(() => Float, {nullable:true})
    shopping_list_id?: number;
}
