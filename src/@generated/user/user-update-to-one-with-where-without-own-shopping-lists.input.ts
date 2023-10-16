import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutOwn_shopping_listsInput } from './user-update-without-own-shopping-lists.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutOwn_shopping_listsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutOwn_shopping_listsInput, {nullable:false})
    @Type(() => UserUpdateWithoutOwn_shopping_listsInput)
    data!: UserUpdateWithoutOwn_shopping_listsInput;
}
