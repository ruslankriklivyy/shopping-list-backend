import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListItemWhereInput } from './shopping-list-item-where.input';

@InputType()
export class ShoppingListItemListRelationFilter {

    @Field(() => ShoppingListItemWhereInput, {nullable:true})
    every?: ShoppingListItemWhereInput;

    @Field(() => ShoppingListItemWhereInput, {nullable:true})
    some?: ShoppingListItemWhereInput;

    @Field(() => ShoppingListItemWhereInput, {nullable:true})
    none?: ShoppingListItemWhereInput;
}
