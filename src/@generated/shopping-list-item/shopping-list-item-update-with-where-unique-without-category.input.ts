import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShoppingListItemWhereUniqueInput } from './shopping-list-item-where-unique.input';
import { Type } from 'class-transformer';
import { ShoppingListItemUpdateWithoutCategoryInput } from './shopping-list-item-update-without-category.input';

@InputType()
export class ShoppingListItemUpdateWithWhereUniqueWithoutCategoryInput {

    @Field(() => ShoppingListItemWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingListItemWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingListItemWhereUniqueInput, 'id'>;

    @Field(() => ShoppingListItemUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => ShoppingListItemUpdateWithoutCategoryInput)
    data!: ShoppingListItemUpdateWithoutCategoryInput;
}
