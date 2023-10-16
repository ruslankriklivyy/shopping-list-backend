import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutShopping_list_itemsInput } from './category-update-without-shopping-list-items.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutShopping_list_itemsInput } from './category-create-without-shopping-list-items.input';
import { CategoryWhereInput } from './category-where.input';

@InputType()
export class CategoryUpsertWithoutShopping_list_itemsInput {

    @Field(() => CategoryUpdateWithoutShopping_list_itemsInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutShopping_list_itemsInput)
    update!: CategoryUpdateWithoutShopping_list_itemsInput;

    @Field(() => CategoryCreateWithoutShopping_list_itemsInput, {nullable:false})
    @Type(() => CategoryCreateWithoutShopping_list_itemsInput)
    create!: CategoryCreateWithoutShopping_list_itemsInput;

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: CategoryWhereInput;
}
