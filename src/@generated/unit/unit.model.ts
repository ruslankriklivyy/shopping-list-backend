import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ShoppingListItem } from '../shopping-list-item/shopping-list-item.model';
import { UnitCount } from './unit-count.output';

@ObjectType()
export class Unit {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => [ShoppingListItem], {nullable:true})
    shopping_list_items?: Array<ShoppingListItem>;

    @Field(() => UnitCount, {nullable:false})
    _count?: UnitCount;
}
