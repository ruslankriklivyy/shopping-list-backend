import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingListWhereInput } from './shopping-list-where.input';
import { Type } from 'class-transformer';
import { ShoppingListOrderByWithRelationInput } from './shopping-list-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ShoppingListWhereUniqueInput } from './shopping-list-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShoppingListScalarFieldEnum } from './shopping-list-scalar-field.enum';

@ArgsType()
export class FindFirstShoppingListOrThrowArgs {

    @Field(() => ShoppingListWhereInput, {nullable:true})
    @Type(() => ShoppingListWhereInput)
    where?: ShoppingListWhereInput;

    @Field(() => [ShoppingListOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShoppingListOrderByWithRelationInput>;

    @Field(() => ShoppingListWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ShoppingListWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ShoppingListScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ShoppingListScalarFieldEnum>;
}
