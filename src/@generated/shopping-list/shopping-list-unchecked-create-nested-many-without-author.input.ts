import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListCreateWithoutAuthorInput } from './shopping-list-create-without-author.input';
import { Type } from 'class-transformer';
import { ShoppingListCreateOrConnectWithoutAuthorInput } from './shopping-list-create-or-connect-without-author.input';
import { ShoppingListCreateManyAuthorInputEnvelope } from './shopping-list-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ShoppingListWhereUniqueInput } from './shopping-list-where-unique.input';

@InputType()
export class ShoppingListUncheckedCreateNestedManyWithoutAuthorInput {

    @Field(() => [ShoppingListCreateWithoutAuthorInput], {nullable:true})
    @Type(() => ShoppingListCreateWithoutAuthorInput)
    create?: Array<ShoppingListCreateWithoutAuthorInput>;

    @Field(() => [ShoppingListCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => ShoppingListCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<ShoppingListCreateOrConnectWithoutAuthorInput>;

    @Field(() => ShoppingListCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => ShoppingListCreateManyAuthorInputEnvelope)
    createMany?: ShoppingListCreateManyAuthorInputEnvelope;

    @Field(() => [ShoppingListWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingListWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ShoppingListWhereUniqueInput, 'id'>>;
}
