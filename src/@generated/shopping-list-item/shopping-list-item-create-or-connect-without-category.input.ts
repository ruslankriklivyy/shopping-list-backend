import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShoppingListItemWhereUniqueInput } from './shopping-list-item-where-unique.input';
import { Type } from 'class-transformer';
import { ShoppingListItemCreateWithoutCategoryInput } from './shopping-list-item-create-without-category.input';

@InputType()
export class ShoppingListItemCreateOrConnectWithoutCategoryInput {

    @Field(() => ShoppingListItemWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingListItemWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingListItemWhereUniqueInput, 'id'>;

    @Field(() => ShoppingListItemCreateWithoutCategoryInput, {nullable:false})
    @Type(() => ShoppingListItemCreateWithoutCategoryInput)
    create!: ShoppingListItemCreateWithoutCategoryInput;
}
