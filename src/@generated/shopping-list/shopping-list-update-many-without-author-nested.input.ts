import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListCreateWithoutAuthorInput } from './shopping-list-create-without-author.input';
import { Type } from 'class-transformer';
import { ShoppingListCreateOrConnectWithoutAuthorInput } from './shopping-list-create-or-connect-without-author.input';
import { ShoppingListUpsertWithWhereUniqueWithoutAuthorInput } from './shopping-list-upsert-with-where-unique-without-author.input';
import { ShoppingListCreateManyAuthorInputEnvelope } from './shopping-list-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ShoppingListWhereUniqueInput } from './shopping-list-where-unique.input';
import { ShoppingListUpdateWithWhereUniqueWithoutAuthorInput } from './shopping-list-update-with-where-unique-without-author.input';
import { ShoppingListUpdateManyWithWhereWithoutAuthorInput } from './shopping-list-update-many-with-where-without-author.input';
import { ShoppingListScalarWhereInput } from './shopping-list-scalar-where.input';

@InputType()
export class ShoppingListUpdateManyWithoutAuthorNestedInput {

    @Field(() => [ShoppingListCreateWithoutAuthorInput], {nullable:true})
    @Type(() => ShoppingListCreateWithoutAuthorInput)
    create?: Array<ShoppingListCreateWithoutAuthorInput>;

    @Field(() => [ShoppingListCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => ShoppingListCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<ShoppingListCreateOrConnectWithoutAuthorInput>;

    @Field(() => [ShoppingListUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => ShoppingListUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<ShoppingListUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => ShoppingListCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => ShoppingListCreateManyAuthorInputEnvelope)
    createMany?: ShoppingListCreateManyAuthorInputEnvelope;

    @Field(() => [ShoppingListWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingListWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ShoppingListWhereUniqueInput, 'id'>>;

    @Field(() => [ShoppingListWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingListWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ShoppingListWhereUniqueInput, 'id'>>;

    @Field(() => [ShoppingListWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingListWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ShoppingListWhereUniqueInput, 'id'>>;

    @Field(() => [ShoppingListWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingListWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ShoppingListWhereUniqueInput, 'id'>>;

    @Field(() => [ShoppingListUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => ShoppingListUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<ShoppingListUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [ShoppingListUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => ShoppingListUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<ShoppingListUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [ShoppingListScalarWhereInput], {nullable:true})
    @Type(() => ShoppingListScalarWhereInput)
    deleteMany?: Array<ShoppingListScalarWhereInput>;
}
