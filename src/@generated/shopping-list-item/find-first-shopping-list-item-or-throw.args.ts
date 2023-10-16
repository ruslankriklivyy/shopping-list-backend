import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingListItemWhereInput } from './shopping-list-item-where.input';
import { Type } from 'class-transformer';
import { ShoppingListItemOrderByWithRelationInput } from './shopping-list-item-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ShoppingListItemWhereUniqueInput } from './shopping-list-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShoppingListItemScalarFieldEnum } from './shopping-list-item-scalar-field.enum';

@ArgsType()
export class FindFirstShoppingListItemOrThrowArgs {

    @Field(() => ShoppingListItemWhereInput, {nullable:true})
    @Type(() => ShoppingListItemWhereInput)
    where?: ShoppingListItemWhereInput;

    @Field(() => [ShoppingListItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShoppingListItemOrderByWithRelationInput>;

    @Field(() => ShoppingListItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ShoppingListItemWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ShoppingListItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ShoppingListItemScalarFieldEnum>;
}
