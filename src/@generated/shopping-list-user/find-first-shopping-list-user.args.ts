import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingListUserWhereInput } from './shopping-list-user-where.input';
import { Type } from 'class-transformer';
import { ShoppingListUserOrderByWithRelationInput } from './shopping-list-user-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ShoppingListUserWhereUniqueInput } from './shopping-list-user-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShoppingListUserScalarFieldEnum } from './shopping-list-user-scalar-field.enum';

@ArgsType()
export class FindFirstShoppingListUserArgs {

    @Field(() => ShoppingListUserWhereInput, {nullable:true})
    @Type(() => ShoppingListUserWhereInput)
    where?: ShoppingListUserWhereInput;

    @Field(() => [ShoppingListUserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShoppingListUserOrderByWithRelationInput>;

    @Field(() => ShoppingListUserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ShoppingListUserWhereUniqueInput, 'user_id_shopping_list_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ShoppingListUserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ShoppingListUserScalarFieldEnum>;
}
