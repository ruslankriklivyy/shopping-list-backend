import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShoppingListItemWhereUniqueInput } from './shopping-list-item-where-unique.input';
import { Type } from 'class-transformer';
import { ShoppingListItemUpdateWithoutUnitInput } from './shopping-list-item-update-without-unit.input';

@InputType()
export class ShoppingListItemUpdateWithWhereUniqueWithoutUnitInput {

    @Field(() => ShoppingListItemWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingListItemWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingListItemWhereUniqueInput, 'id'>;

    @Field(() => ShoppingListItemUpdateWithoutUnitInput, {nullable:false})
    @Type(() => ShoppingListItemUpdateWithoutUnitInput)
    data!: ShoppingListItemUpdateWithoutUnitInput;
}
