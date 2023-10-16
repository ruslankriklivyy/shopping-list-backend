import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListUserUpdateManyWithoutUserNestedInput } from '../shopping-list-user/shopping-list-user-update-many-without-user-nested.input';
import { TokenUpdateManyWithoutUserNestedInput } from '../token/token-update-many-without-user-nested.input';
import { RoleUpdateOneWithoutUsersNestedInput } from '../role/role-update-one-without-users-nested.input';
import { FileUpdateOneWithoutUsersNestedInput } from '../file/file-update-one-without-users-nested.input';

@InputType()
export class UserUpdateWithoutOwn_shopping_listsInput {

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

    @Field(() => TokenUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: TokenUpdateManyWithoutUserNestedInput;

    @Field(() => RoleUpdateOneWithoutUsersNestedInput, {nullable:true})
    role?: RoleUpdateOneWithoutUsersNestedInput;

    @Field(() => FileUpdateOneWithoutUsersNestedInput, {nullable:true})
    avatar?: FileUpdateOneWithoutUsersNestedInput;
}
