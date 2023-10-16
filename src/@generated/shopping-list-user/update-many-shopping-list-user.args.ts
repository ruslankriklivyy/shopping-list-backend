import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingListUserUpdateManyMutationInput } from './shopping-list-user-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ShoppingListUserWhereInput } from './shopping-list-user-where.input';

@ArgsType()
export class UpdateManyShoppingListUserArgs {

    @Field(() => ShoppingListUserUpdateManyMutationInput, {nullable:false})
    @Type(() => ShoppingListUserUpdateManyMutationInput)
    data!: ShoppingListUserUpdateManyMutationInput;

    @Field(() => ShoppingListUserWhereInput, {nullable:true})
    @Type(() => ShoppingListUserWhereInput)
    where?: ShoppingListUserWhereInput;
}
