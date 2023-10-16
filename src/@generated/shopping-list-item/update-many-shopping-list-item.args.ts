import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingListItemUpdateManyMutationInput } from './shopping-list-item-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ShoppingListItemWhereInput } from './shopping-list-item-where.input';

@ArgsType()
export class UpdateManyShoppingListItemArgs {

    @Field(() => ShoppingListItemUpdateManyMutationInput, {nullable:false})
    @Type(() => ShoppingListItemUpdateManyMutationInput)
    data!: ShoppingListItemUpdateManyMutationInput;

    @Field(() => ShoppingListItemWhereInput, {nullable:true})
    @Type(() => ShoppingListItemWhereInput)
    where?: ShoppingListItemWhereInput;
}
