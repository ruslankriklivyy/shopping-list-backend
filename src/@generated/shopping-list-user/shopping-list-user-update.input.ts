import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutShopping_listsNestedInput } from '../user/user-update-one-required-without-shopping-lists-nested.input';
import { ShoppingListUpdateOneRequiredWithoutResponsiblesNestedInput } from '../shopping-list/shopping-list-update-one-required-without-responsibles-nested.input';

@InputType()
export class ShoppingListUserUpdateInput {

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => UserUpdateOneRequiredWithoutShopping_listsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutShopping_listsNestedInput;

    @Field(() => ShoppingListUpdateOneRequiredWithoutResponsiblesNestedInput, {nullable:true})
    shopping_list?: ShoppingListUpdateOneRequiredWithoutResponsiblesNestedInput;
}
