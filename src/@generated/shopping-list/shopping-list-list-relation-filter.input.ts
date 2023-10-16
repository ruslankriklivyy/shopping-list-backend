import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListWhereInput } from './shopping-list-where.input';

@InputType()
export class ShoppingListListRelationFilter {

    @Field(() => ShoppingListWhereInput, {nullable:true})
    every?: ShoppingListWhereInput;

    @Field(() => ShoppingListWhereInput, {nullable:true})
    some?: ShoppingListWhereInput;

    @Field(() => ShoppingListWhereInput, {nullable:true})
    none?: ShoppingListWhereInput;
}
