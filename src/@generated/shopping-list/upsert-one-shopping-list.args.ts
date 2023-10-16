import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShoppingListWhereUniqueInput } from './shopping-list-where-unique.input';
import { Type } from 'class-transformer';
import { ShoppingListCreateInput } from './shopping-list-create.input';
import { ShoppingListUpdateInput } from './shopping-list-update.input';

@ArgsType()
export class UpsertOneShoppingListArgs {

    @Field(() => ShoppingListWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingListWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingListWhereUniqueInput, 'id'>;

    @Field(() => ShoppingListCreateInput, {nullable:false})
    @Type(() => ShoppingListCreateInput)
    create!: ShoppingListCreateInput;

    @Field(() => ShoppingListUpdateInput, {nullable:false})
    @Type(() => ShoppingListUpdateInput)
    update!: ShoppingListUpdateInput;
}
