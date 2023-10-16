import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingListCreateInput } from './shopping-list-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneShoppingListArgs {

    @Field(() => ShoppingListCreateInput, {nullable:false})
    @Type(() => ShoppingListCreateInput)
    data!: ShoppingListCreateInput;
}
