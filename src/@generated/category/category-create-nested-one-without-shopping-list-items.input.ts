import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutShopping_list_itemsInput } from './category-create-without-shopping-list-items.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutShopping_list_itemsInput } from './category-create-or-connect-without-shopping-list-items.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutShopping_list_itemsInput {

    @Field(() => CategoryCreateWithoutShopping_list_itemsInput, {nullable:true})
    @Type(() => CategoryCreateWithoutShopping_list_itemsInput)
    create?: CategoryCreateWithoutShopping_list_itemsInput;

    @Field(() => CategoryCreateOrConnectWithoutShopping_list_itemsInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutShopping_list_itemsInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutShopping_list_itemsInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
}
