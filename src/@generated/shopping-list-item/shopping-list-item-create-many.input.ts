import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class ShoppingListItemCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => Boolean, {nullable:true})
    is_completed?: boolean;

    @Field(() => Int, {nullable:false})
    unit_id!: number;

    @Field(() => Int, {nullable:false})
    shopping_list_id!: number;

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
