import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListUserUpdateManyWithoutUserNestedInput } from '../shopping-list-user/shopping-list-user-update-many-without-user-nested.input';
import { ShoppingListUpdateManyWithoutAuthorNestedInput } from '../shopping-list/shopping-list-update-many-without-author-nested.input';
import { TokenUpdateManyWithoutUserNestedInput } from '../token/token-update-many-without-user-nested.input';
import { FileUpdateOneWithoutUsersNestedInput } from '../file/file-update-one-without-users-nested.input';

@InputType()
export class UserUpdateWithoutRoleInput {

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

    @Field(() => ShoppingListUserUpdateManyWithoutUserNestedInput, {nullable:true})
    shopping_lists?: ShoppingListUserUpdateManyWithoutUserNestedInput;

    @Field(() => ShoppingListUpdateManyWithoutAuthorNestedInput, {nullable:true})
    own_shopping_lists?: ShoppingListUpdateManyWithoutAuthorNestedInput;

    @Field(() => TokenUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: TokenUpdateManyWithoutUserNestedInput;

    @Field(() => FileUpdateOneWithoutUsersNestedInput, {nullable:true})
    avatar?: FileUpdateOneWithoutUsersNestedInput;
}
