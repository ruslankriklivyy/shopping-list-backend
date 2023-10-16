import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListCreateWithoutResponsiblesInput } from './shopping-list-create-without-responsibles.input';
import { Type } from 'class-transformer';
import { ShoppingListCreateOrConnectWithoutResponsiblesInput } from './shopping-list-create-or-connect-without-responsibles.input';
import { ShoppingListUpsertWithoutResponsiblesInput } from './shopping-list-upsert-without-responsibles.input';
import { Prisma } from '@prisma/client';
import { ShoppingListWhereUniqueInput } from './shopping-list-where-unique.input';
import { ShoppingListUpdateToOneWithWhereWithoutResponsiblesInput } from './shopping-list-update-to-one-with-where-without-responsibles.input';

@InputType()
export class ShoppingListUpdateOneRequiredWithoutResponsiblesNestedInput {

    @Field(() => ShoppingListCreateWithoutResponsiblesInput, {nullable:true})
    @Type(() => ShoppingListCreateWithoutResponsiblesInput)
    create?: ShoppingListCreateWithoutResponsiblesInput;

    @Field(() => ShoppingListCreateOrConnectWithoutResponsiblesInput, {nullable:true})
    @Type(() => ShoppingListCreateOrConnectWithoutResponsiblesInput)
    connectOrCreate?: ShoppingListCreateOrConnectWithoutResponsiblesInput;

    @Field(() => ShoppingListUpsertWithoutResponsiblesInput, {nullable:true})
    @Type(() => ShoppingListUpsertWithoutResponsiblesInput)
    upsert?: ShoppingListUpsertWithoutResponsiblesInput;

    @Field(() => ShoppingListWhereUniqueInput, {nullable:true})
    @Type(() => ShoppingListWhereUniqueInput)
    connect?: Prisma.AtLeast<ShoppingListWhereUniqueInput, 'id'>;

    @Field(() => ShoppingListUpdateToOneWithWhereWithoutResponsiblesInput, {nullable:true})
    @Type(() => ShoppingListUpdateToOneWithWhereWithoutResponsiblesInput)
    update?: ShoppingListUpdateToOneWithWhereWithoutResponsiblesInput;
}
