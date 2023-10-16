import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShoppingListWhereUniqueInput } from './shopping-list-where-unique.input';
import { Type } from 'class-transformer';
import { ShoppingListCreateWithoutResponsiblesInput } from './shopping-list-create-without-responsibles.input';

@InputType()
export class ShoppingListCreateOrConnectWithoutResponsiblesInput {

    @Field(() => ShoppingListWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingListWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingListWhereUniqueInput, 'id'>;

    @Field(() => ShoppingListCreateWithoutResponsiblesInput, {nullable:false})
    @Type(() => ShoppingListCreateWithoutResponsiblesInput)
    create!: ShoppingListCreateWithoutResponsiblesInput;
}
