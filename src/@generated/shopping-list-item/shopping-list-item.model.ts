import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Unit } from '../unit/unit.model';
import { ShoppingList } from '../shopping-list/shopping-list.model';
import { Category } from '../category/category.model';

@ObjectType()
export class ShoppingListItem {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    is_completed!: boolean;

    @Field(() => Int, {nullable:false})
    unit_id!: number;

    @Field(() => Int, {nullable:false})
    shopping_list_id!: number;

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => Unit, {nullable:false})
    unit?: Unit;

    @Field(() => ShoppingList, {nullable:false})
    shopping_list?: ShoppingList;

    @Field(() => Category, {nullable:false})
    category?: Category;
}
