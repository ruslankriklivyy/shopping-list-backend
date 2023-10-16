import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListUserCreateNestedManyWithoutUserInput } from '../shopping-list-user/shopping-list-user-create-nested-many-without-user.input';
import { ShoppingListCreateNestedManyWithoutAuthorInput } from '../shopping-list/shopping-list-create-nested-many-without-author.input';
import { RoleCreateNestedOneWithoutUsersInput } from '../role/role-create-nested-one-without-users.input';
import { FileCreateNestedOneWithoutUsersInput } from '../file/file-create-nested-one-without-users.input';

@InputType()
export class UserCreateWithoutTokensInput {

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ShoppingListUserCreateNestedManyWithoutUserInput, {nullable:true})
    shopping_lists?: ShoppingListUserCreateNestedManyWithoutUserInput;

    @Field(() => ShoppingListCreateNestedManyWithoutAuthorInput, {nullable:true})
    own_shopping_lists?: ShoppingListCreateNestedManyWithoutAuthorInput;

    @Field(() => RoleCreateNestedOneWithoutUsersInput, {nullable:true})
    role?: RoleCreateNestedOneWithoutUsersInput;

    @Field(() => FileCreateNestedOneWithoutUsersInput, {nullable:true})
    avatar?: FileCreateNestedOneWithoutUsersInput;
}
