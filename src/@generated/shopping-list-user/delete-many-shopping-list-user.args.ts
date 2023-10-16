import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingListUserWhereInput } from './shopping-list-user-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyShoppingListUserArgs {

    @Field(() => ShoppingListUserWhereInput, {nullable:true})
    @Type(() => ShoppingListUserWhereInput)
    where?: ShoppingListUserWhereInput;
}
