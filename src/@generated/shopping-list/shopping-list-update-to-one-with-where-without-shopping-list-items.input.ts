import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListWhereInput } from './shopping-list-where.input';
import { Type } from 'class-transformer';
import { ShoppingListUpdateWithoutShopping_list_itemsInput } from './shopping-list-update-without-shopping-list-items.input';

@InputType()
export class ShoppingListUpdateToOneWithWhereWithoutShopping_list_itemsInput {

    @Field(() => ShoppingListWhereInput, {nullable:true})
    @Type(() => ShoppingListWhereInput)
    where?: ShoppingListWhereInput;

    @Field(() => ShoppingListUpdateWithoutShopping_list_itemsInput, {nullable:false})
    @Type(() => ShoppingListUpdateWithoutShopping_list_itemsInput)
    data!: ShoppingListUpdateWithoutShopping_list_itemsInput;
}
