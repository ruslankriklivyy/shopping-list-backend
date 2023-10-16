import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutOwn_shopping_listsInput } from '../user/user-create-nested-one-without-own-shopping-lists.input';

@InputType()
export class ShoppingListCreateWithoutResponsiblesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    color!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => UserCreateNestedOneWithoutOwn_shopping_listsInput, {nullable:false})
    author!: UserCreateNestedOneWithoutOwn_shopping_listsInput;
}
