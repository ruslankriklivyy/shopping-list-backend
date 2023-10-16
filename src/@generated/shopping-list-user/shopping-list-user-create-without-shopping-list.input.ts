import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutShopping_listsInput } from '../user/user-create-nested-one-without-shopping-lists.input';

@InputType()
export class ShoppingListUserCreateWithoutShopping_listInput {

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => UserCreateNestedOneWithoutShopping_listsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutShopping_listsInput;
}
