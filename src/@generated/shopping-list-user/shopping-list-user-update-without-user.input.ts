import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListUpdateOneRequiredWithoutResponsiblesNestedInput } from '../shopping-list/shopping-list-update-one-required-without-responsibles-nested.input';

@InputType()
export class ShoppingListUserUpdateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ShoppingListUpdateOneRequiredWithoutResponsiblesNestedInput, {nullable:true})
    shopping_list?: ShoppingListUpdateOneRequiredWithoutResponsiblesNestedInput;
}
