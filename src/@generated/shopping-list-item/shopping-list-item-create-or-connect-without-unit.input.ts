import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShoppingListItemWhereUniqueInput } from './shopping-list-item-where-unique.input';
import { Type } from 'class-transformer';
import { ShoppingListItemCreateWithoutUnitInput } from './shopping-list-item-create-without-unit.input';

@InputType()
export class ShoppingListItemCreateOrConnectWithoutUnitInput {

    @Field(() => ShoppingListItemWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingListItemWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingListItemWhereUniqueInput, 'id'>;

    @Field(() => ShoppingListItemCreateWithoutUnitInput, {nullable:false})
    @Type(() => ShoppingListItemCreateWithoutUnitInput)
    create!: ShoppingListItemCreateWithoutUnitInput;
}
