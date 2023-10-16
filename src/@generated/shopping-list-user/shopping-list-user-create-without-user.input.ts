import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListCreateNestedOneWithoutResponsiblesInput } from '../shopping-list/shopping-list-create-nested-one-without-responsibles.input';

@InputType()
export class ShoppingListUserCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ShoppingListCreateNestedOneWithoutResponsiblesInput, {nullable:false})
    shopping_list!: ShoppingListCreateNestedOneWithoutResponsiblesInput;
}
