import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { File } from '../file/file.model';
import { ShoppingListItem } from '../shopping-list-item/shopping-list-item.model';
import { CategoryCount } from './category-count.output';

@ObjectType()
export class Category {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true})
    icon_id!: number | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => File, {nullable:true})
    icon?: File | null;

    @Field(() => [ShoppingListItem], {nullable:true})
    shopping_list_items?: Array<ShoppingListItem>;

    @Field(() => CategoryCount, {nullable:false})
    _count?: CategoryCount;
}
