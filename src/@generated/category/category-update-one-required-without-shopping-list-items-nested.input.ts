import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutShopping_list_itemsInput } from './category-create-without-shopping-list-items.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutShopping_list_itemsInput } from './category-create-or-connect-without-shopping-list-items.input';
import { CategoryUpsertWithoutShopping_list_itemsInput } from './category-upsert-without-shopping-list-items.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateToOneWithWhereWithoutShopping_list_itemsInput } from './category-update-to-one-with-where-without-shopping-list-items.input';

@InputType()
export class CategoryUpdateOneRequiredWithoutShopping_list_itemsNestedInput {

    @Field(() => CategoryCreateWithoutShopping_list_itemsInput, {nullable:true})
    @Type(() => CategoryCreateWithoutShopping_list_itemsInput)
    create?: CategoryCreateWithoutShopping_list_itemsInput;

    @Field(() => CategoryCreateOrConnectWithoutShopping_list_itemsInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutShopping_list_itemsInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutShopping_list_itemsInput;

    @Field(() => CategoryUpsertWithoutShopping_list_itemsInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutShopping_list_itemsInput)
    upsert?: CategoryUpsertWithoutShopping_list_itemsInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryUpdateToOneWithWhereWithoutShopping_list_itemsInput, {nullable:true})
    @Type(() => CategoryUpdateToOneWithWhereWithoutShopping_list_itemsInput)
    update?: CategoryUpdateToOneWithWhereWithoutShopping_list_itemsInput;
}
