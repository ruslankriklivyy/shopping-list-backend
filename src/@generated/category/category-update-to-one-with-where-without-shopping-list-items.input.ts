import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereInput } from './category-where.input';
import { Type } from 'class-transformer';
import { CategoryUpdateWithoutShopping_list_itemsInput } from './category-update-without-shopping-list-items.input';

@InputType()
export class CategoryUpdateToOneWithWhereWithoutShopping_list_itemsInput {

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: CategoryWhereInput;

    @Field(() => CategoryUpdateWithoutShopping_list_itemsInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutShopping_list_itemsInput)
    data!: CategoryUpdateWithoutShopping_list_itemsInput;
}
