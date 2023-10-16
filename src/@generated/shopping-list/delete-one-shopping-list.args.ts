import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShoppingListWhereUniqueInput } from './shopping-list-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneShoppingListArgs {

    @Field(() => ShoppingListWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingListWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingListWhereUniqueInput, 'id'>;
}
