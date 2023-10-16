import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingListUpdateManyMutationInput } from './shopping-list-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ShoppingListWhereInput } from './shopping-list-where.input';

@ArgsType()
export class UpdateManyShoppingListArgs {

    @Field(() => ShoppingListUpdateManyMutationInput, {nullable:false})
    @Type(() => ShoppingListUpdateManyMutationInput)
    data!: ShoppingListUpdateManyMutationInput;

    @Field(() => ShoppingListWhereInput, {nullable:true})
    @Type(() => ShoppingListWhereInput)
    where?: ShoppingListWhereInput;
}
