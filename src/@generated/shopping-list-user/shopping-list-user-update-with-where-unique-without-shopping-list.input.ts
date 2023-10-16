import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShoppingListUserWhereUniqueInput } from './shopping-list-user-where-unique.input';
import { Type } from 'class-transformer';
import { ShoppingListUserUpdateWithoutShopping_listInput } from './shopping-list-user-update-without-shopping-list.input';

@InputType()
export class ShoppingListUserUpdateWithWhereUniqueWithoutShopping_listInput {

    @Field(() => ShoppingListUserWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingListUserWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingListUserWhereUniqueInput, 'user_id_shopping_list_id'>;

    @Field(() => ShoppingListUserUpdateWithoutShopping_listInput, {nullable:false})
    @Type(() => ShoppingListUserUpdateWithoutShopping_listInput)
    data!: ShoppingListUserUpdateWithoutShopping_listInput;
}
