import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Unit } from '../unit/unit.model';
import { Category } from '../category/category.model';

@ObjectType()
export class ShoppingListItem {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => Int, {nullable:false})
    unit_id!: number;

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => Unit, {nullable:false})
    unit?: Unit;

    @Field(() => Category, {nullable:false})
    category?: Category;
}
