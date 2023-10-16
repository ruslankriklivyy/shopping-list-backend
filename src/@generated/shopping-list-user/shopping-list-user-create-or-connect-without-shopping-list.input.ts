import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShoppingListUserWhereUniqueInput } from './shopping-list-user-where-unique.input';
import { Type } from 'class-transformer';
import { ShoppingListUserCreateWithoutShopping_listInput } from './shopping-list-user-create-without-shopping-list.input';

@InputType()
export class ShoppingListUserCreateOrConnectWithoutShopping_listInput {

    @Field(() => ShoppingListUserWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingListUserWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingListUserWhereUniqueInput, 'user_id_shopping_list_id'>;

    @Field(() => ShoppingListUserCreateWithoutShopping_listInput, {nullable:false})
    @Type(() => ShoppingListUserCreateWithoutShopping_listInput)
    create!: ShoppingListUserCreateWithoutShopping_listInput;
}
