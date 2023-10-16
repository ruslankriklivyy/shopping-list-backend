import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListItemCreateWithoutCategoryInput } from './shopping-list-item-create-without-category.input';
import { Type } from 'class-transformer';
import { ShoppingListItemCreateOrConnectWithoutCategoryInput } from './shopping-list-item-create-or-connect-without-category.input';
import { ShoppingListItemUpsertWithWhereUniqueWithoutCategoryInput } from './shopping-list-item-upsert-with-where-unique-without-category.input';
import { ShoppingListItemCreateManyCategoryInputEnvelope } from './shopping-list-item-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ShoppingListItemWhereUniqueInput } from './shopping-list-item-where-unique.input';
import { ShoppingListItemUpdateWithWhereUniqueWithoutCategoryInput } from './shopping-list-item-update-with-where-unique-without-category.input';
import { ShoppingListItemUpdateManyWithWhereWithoutCategoryInput } from './shopping-list-item-update-many-with-where-without-category.input';
import { ShoppingListItemScalarWhereInput } from './shopping-list-item-scalar-where.input';

@InputType()
export class ShoppingListItemUncheckedUpdateManyWithoutCategoryNestedInput {

    @Field(() => [ShoppingListItemCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ShoppingListItemCreateWithoutCategoryInput)
    create?: Array<ShoppingListItemCreateWithoutCategoryInput>;

    @Field(() => [ShoppingListItemCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ShoppingListItemCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ShoppingListItemCreateOrConnectWithoutCategoryInput>;

    @Field(() => [ShoppingListItemUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ShoppingListItemUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<ShoppingListItemUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => ShoppingListItemCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ShoppingListItemCreateManyCategoryInputEnvelope)
    createMany?: ShoppingListItemCreateManyCategoryInputEnvelope;

    @Field(() => [ShoppingListItemWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingListItemWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ShoppingListItemWhereUniqueInput, 'id'>>;

    @Field(() => [ShoppingListItemWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingListItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ShoppingListItemWhereUniqueInput, 'id'>>;

    @Field(() => [ShoppingListItemWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingListItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ShoppingListItemWhereUniqueInput, 'id'>>;

    @Field(() => [ShoppingListItemWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingListItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ShoppingListItemWhereUniqueInput, 'id'>>;

    @Field(() => [ShoppingListItemUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ShoppingListItemUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<ShoppingListItemUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [ShoppingListItemUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => ShoppingListItemUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<ShoppingListItemUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [ShoppingListItemScalarWhereInput], {nullable:true})
    @Type(() => ShoppingListItemScalarWhereInput)
    deleteMany?: Array<ShoppingListItemScalarWhereInput>;
}
