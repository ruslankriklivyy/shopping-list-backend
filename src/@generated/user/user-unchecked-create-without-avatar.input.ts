import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShoppingListUserUncheckedCreateNestedManyWithoutUserInput } from '../shopping-list-user/shopping-list-user-unchecked-create-nested-many-without-user.input';
import { ShoppingListUncheckedCreateNestedManyWithoutAuthorInput } from '../shopping-list/shopping-list-unchecked-create-nested-many-without-author.input';
import { TokenUncheckedCreateNestedManyWithoutUserInput } from '../token/token-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutAvatarInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Int, {nullable:true})
    role_id?: number;

    @Field(() => ShoppingListUserUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shopping_lists?: ShoppingListUserUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ShoppingListUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    own_shopping_lists?: ShoppingListUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => TokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput;
}
