import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingListItemWhereInput } from './shopping-list-item-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyShoppingListItemArgs {

    @Field(() => ShoppingListItemWhereInput, {nullable:true})
    @Type(() => ShoppingListItemWhereInput)
    where?: ShoppingListItemWhereInput;
}
