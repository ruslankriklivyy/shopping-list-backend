import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListItemCreateWithoutCategoryInput } from './shopping-list-item-create-without-category.input';
import { Type } from 'class-transformer';
import { ShoppingListItemCreateOrConnectWithoutCategoryInput } from './shopping-list-item-create-or-connect-without-category.input';
import { ShoppingListItemCreateManyCategoryInputEnvelope } from './shopping-list-item-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ShoppingListItemWhereUniqueInput } from './shopping-list-item-where-unique.input';

@InputType()
export class ShoppingListItemCreateNestedManyWithoutCategoryInput {

    @Field(() => [ShoppingListItemCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ShoppingListItemCreateWithoutCategoryInput)
    create?: Array<ShoppingListItemCreateWithoutCategoryInput>;

    @Field(() => [ShoppingListItemCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ShoppingListItemCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ShoppingListItemCreateOrConnectWithoutCategoryInput>;

    @Field(() => ShoppingListItemCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ShoppingListItemCreateManyCategoryInputEnvelope)
    createMany?: ShoppingListItemCreateManyCategoryInputEnvelope;

    @Field(() => [ShoppingListItemWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingListItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ShoppingListItemWhereUniqueInput, 'id'>>;
}
