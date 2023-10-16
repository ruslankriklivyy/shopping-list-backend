import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingListItemCreateInput } from './shopping-list-item-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneShoppingListItemArgs {

    @Field(() => ShoppingListItemCreateInput, {nullable:false})
    @Type(() => ShoppingListItemCreateInput)
    data!: ShoppingListItemCreateInput;
}
