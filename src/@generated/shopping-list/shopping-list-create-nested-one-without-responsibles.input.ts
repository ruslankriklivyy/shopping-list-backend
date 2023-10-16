import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListCreateWithoutResponsiblesInput } from './shopping-list-create-without-responsibles.input';
import { Type } from 'class-transformer';
import { ShoppingListCreateOrConnectWithoutResponsiblesInput } from './shopping-list-create-or-connect-without-responsibles.input';
import { Prisma } from '@prisma/client';
import { ShoppingListWhereUniqueInput } from './shopping-list-where-unique.input';

@InputType()
export class ShoppingListCreateNestedOneWithoutResponsiblesInput {

    @Field(() => ShoppingListCreateWithoutResponsiblesInput, {nullable:true})
    @Type(() => ShoppingListCreateWithoutResponsiblesInput)
    create?: ShoppingListCreateWithoutResponsiblesInput;

    @Field(() => ShoppingListCreateOrConnectWithoutResponsiblesInput, {nullable:true})
    @Type(() => ShoppingListCreateOrConnectWithoutResponsiblesInput)
    connectOrCreate?: ShoppingListCreateOrConnectWithoutResponsiblesInput;

    @Field(() => ShoppingListWhereUniqueInput, {nullable:true})
    @Type(() => ShoppingListWhereUniqueInput)
    connect?: Prisma.AtLeast<ShoppingListWhereUniqueInput, 'id'>;
}
