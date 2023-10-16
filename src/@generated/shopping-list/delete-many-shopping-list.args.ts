import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingListWhereInput } from './shopping-list-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyShoppingListArgs {

    @Field(() => ShoppingListWhereInput, {nullable:true})
    @Type(() => ShoppingListWhereInput)
    where?: ShoppingListWhereInput;
}
