import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShoppingListUser } from '../shopping-list-user/shopping-list-user.model';
import { ShoppingList } from '../shopping-list/shopping-list.model';
import { Token } from '../token/token.model';
import { Role } from '../role/role.model';
import { File } from '../file/file.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => Int, {nullable:true})
    role_id!: number | null;

    @Field(() => Int, {nullable:true})
    avatar_id!: number | null;

    @Field(() => [ShoppingListUser], {nullable:true})
    shopping_lists?: Array<ShoppingListUser>;

    @Field(() => [ShoppingList], {nullable:true})
    own_shopping_lists?: Array<ShoppingList>;

    @Field(() => [Token], {nullable:true})
    tokens?: Array<Token>;

    @Field(() => Role, {nullable:true})
    role?: Role | null;

    @Field(() => File, {nullable:true})
    avatar?: File | null;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
