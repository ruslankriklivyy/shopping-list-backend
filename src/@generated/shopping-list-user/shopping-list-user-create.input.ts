import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutShopping_listsInput } from '../user/user-create-nested-one-without-shopping-lists.input';
import { ShoppingListCreateNestedOneWithoutResponsiblesInput } from '../shopping-list/shopping-list-create-nested-one-without-responsibles.input';

@InputType()
export class ShoppingListUserCreateInput {

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => UserCreateNestedOneWithoutShopping_listsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutShopping_listsInput;

    @Field(() => ShoppingListCreateNestedOneWithoutResponsiblesInput, {nullable:false})
    shopping_list!: ShoppingListCreateNestedOneWithoutResponsiblesInput;
}
