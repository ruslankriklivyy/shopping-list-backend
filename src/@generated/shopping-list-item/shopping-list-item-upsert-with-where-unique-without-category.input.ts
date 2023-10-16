import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShoppingListItemWhereUniqueInput } from './shopping-list-item-where-unique.input';
import { Type } from 'class-transformer';
import { ShoppingListItemUpdateWithoutCategoryInput } from './shopping-list-item-update-without-category.input';
import { ShoppingListItemCreateWithoutCategoryInput } from './shopping-list-item-create-without-category.input';

@InputType()
export class ShoppingListItemUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => ShoppingListItemWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingListItemWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingListItemWhereUniqueInput, 'id'>;

    @Field(() => ShoppingListItemUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => ShoppingListItemUpdateWithoutCategoryInput)
    update!: ShoppingListItemUpdateWithoutCategoryInput;

    @Field(() => ShoppingListItemCreateWithoutCategoryInput, {nullable:false})
    @Type(() => ShoppingListItemCreateWithoutCategoryInput)
    create!: ShoppingListItemCreateWithoutCategoryInput;
}
