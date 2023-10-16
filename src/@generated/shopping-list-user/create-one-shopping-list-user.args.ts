import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingListUserCreateInput } from './shopping-list-user-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneShoppingListUserArgs {

    @Field(() => ShoppingListUserCreateInput, {nullable:false})
    @Type(() => ShoppingListUserCreateInput)
    data!: ShoppingListUserCreateInput;
}
