import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { ShoppingListUser } from '../shopping-list-user/shopping-list-user.model';
import { ShoppingListCount } from './shopping-list-count.output';

@ObjectType()
export class ShoppingList {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    color!: string;

    @Field(() => Int, {nullable:false})
    author_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => User, {nullable:false})
    author?: User;

    @Field(() => [ShoppingListUser], {nullable:true})
    responsibles?: Array<ShoppingListUser>;

    @Field(() => ShoppingListCount, {nullable:false})
    _count?: ShoppingListCount;
}
