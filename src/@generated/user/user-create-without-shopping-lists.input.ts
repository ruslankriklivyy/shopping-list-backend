import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListCreateNestedManyWithoutAuthorInput } from '../shopping-list/shopping-list-create-nested-many-without-author.input';
import { TokenCreateNestedManyWithoutUserInput } from '../token/token-create-nested-many-without-user.input';
import { RoleCreateNestedOneWithoutUsersInput } from '../role/role-create-nested-one-without-users.input';
import { FileCreateNestedOneWithoutUsersInput } from '../file/file-create-nested-one-without-users.input';

@InputType()
export class UserCreateWithoutShopping_listsInput {

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

    @Field(() => ShoppingListCreateNestedManyWithoutAuthorInput, {nullable:true})
    own_shopping_lists?: ShoppingListCreateNestedManyWithoutAuthorInput;

    @Field(() => TokenCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: TokenCreateNestedManyWithoutUserInput;

    @Field(() => RoleCreateNestedOneWithoutUsersInput, {nullable:true})
    role?: RoleCreateNestedOneWithoutUsersInput;

    @Field(() => FileCreateNestedOneWithoutUsersInput, {nullable:true})
    avatar?: FileCreateNestedOneWithoutUsersInput;
}
