import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShoppingListUserUncheckedUpdateManyWithoutUserNestedInput } from '../shopping-list-user/shopping-list-user-unchecked-update-many-without-user-nested.input';
import { TokenUncheckedUpdateManyWithoutUserNestedInput } from '../token/token-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutOwn_shopping_listsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Int, {nullable:true})
    role_id?: number;

    @Field(() => Int, {nullable:true})
    avatar_id?: number;

    @Field(() => ShoppingListUserUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    shopping_lists?: ShoppingListUserUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => TokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput;
}
