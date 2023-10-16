import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListUserWhereInput } from './shopping-list-user-where.input';

@InputType()
export class ShoppingListUserListRelationFilter {

    @Field(() => ShoppingListUserWhereInput, {nullable:true})
    every?: ShoppingListUserWhereInput;

    @Field(() => ShoppingListUserWhereInput, {nullable:true})
    some?: ShoppingListUserWhereInput;

    @Field(() => ShoppingListUserWhereInput, {nullable:true})
    none?: ShoppingListUserWhereInput;
}
