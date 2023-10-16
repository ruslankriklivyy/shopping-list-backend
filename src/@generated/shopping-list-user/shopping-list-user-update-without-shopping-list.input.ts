import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutShopping_listsNestedInput } from '../user/user-update-one-required-without-shopping-lists-nested.input';

@InputType()
export class ShoppingListUserUpdateWithoutShopping_listInput {

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => UserUpdateOneRequiredWithoutShopping_listsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutShopping_listsNestedInput;
}
