import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { ShoppingListUser } from '../shopping-list-user/shopping-list-user.model';
import { ShoppingListItem } from '../shopping-list-item/shopping-list-item.model';
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
    progress!: number;

    @Field(() => Int, {nullable:true})
    author_id!: number | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => User, {nullable:true})
    author?: User | null;

    @Field(() => [ShoppingListUser], {nullable:true})
    responsibles?: Array<ShoppingListUser>;

    @Field(() => [ShoppingListItem], {nullable:true})
    shopping_list_items?: Array<ShoppingListItem>;

    @Field(() => ShoppingListCount, {nullable:false})
    _count?: ShoppingListCount;
}
