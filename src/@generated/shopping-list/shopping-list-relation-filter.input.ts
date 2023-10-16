import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListWhereInput } from './shopping-list-where.input';

@InputType()
export class ShoppingListRelationFilter {

    @Field(() => ShoppingListWhereInput, {nullable:true})
    is?: ShoppingListWhereInput;

    @Field(() => ShoppingListWhereInput, {nullable:true})
    isNot?: ShoppingListWhereInput;
}
