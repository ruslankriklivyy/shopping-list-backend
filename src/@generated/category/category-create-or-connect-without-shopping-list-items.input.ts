import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutShopping_list_itemsInput } from './category-create-without-shopping-list-items.input';

@InputType()
export class CategoryCreateOrConnectWithoutShopping_list_itemsInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryCreateWithoutShopping_list_itemsInput, {nullable:false})
    @Type(() => CategoryCreateWithoutShopping_list_itemsInput)
    create!: CategoryCreateWithoutShopping_list_itemsInput;
}
