import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingListUpdateInput } from './shopping-list-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ShoppingListWhereUniqueInput } from './shopping-list-where-unique.input';

@ArgsType()
export class UpdateOneShoppingListArgs {

    @Field(() => ShoppingListUpdateInput, {nullable:false})
    @Type(() => ShoppingListUpdateInput)
    data!: ShoppingListUpdateInput;

    @Field(() => ShoppingListWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingListWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingListWhereUniqueInput, 'id'>;
}
