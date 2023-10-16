import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutShopping_listsInput } from './user-update-without-shopping-lists.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutShopping_listsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutShopping_listsInput, {nullable:false})
    @Type(() => UserUpdateWithoutShopping_listsInput)
    data!: UserUpdateWithoutShopping_listsInput;
}
