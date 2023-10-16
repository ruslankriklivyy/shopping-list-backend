import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutIconInput } from './category-create-without-icon.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutIconInput } from './category-create-or-connect-without-icon.input';
import { CategoryUpsertWithWhereUniqueWithoutIconInput } from './category-upsert-with-where-unique-without-icon.input';
import { CategoryCreateManyIconInputEnvelope } from './category-create-many-icon-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithWhereUniqueWithoutIconInput } from './category-update-with-where-unique-without-icon.input';
import { CategoryUpdateManyWithWhereWithoutIconInput } from './category-update-many-with-where-without-icon.input';
import { CategoryScalarWhereInput } from './category-scalar-where.input';

@InputType()
export class CategoryUpdateManyWithoutIconNestedInput {

    @Field(() => [CategoryCreateWithoutIconInput], {nullable:true})
    @Type(() => CategoryCreateWithoutIconInput)
    create?: Array<CategoryCreateWithoutIconInput>;

    @Field(() => [CategoryCreateOrConnectWithoutIconInput], {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutIconInput)
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutIconInput>;

    @Field(() => [CategoryUpsertWithWhereUniqueWithoutIconInput], {nullable:true})
    @Type(() => CategoryUpsertWithWhereUniqueWithoutIconInput)
    upsert?: Array<CategoryUpsertWithWhereUniqueWithoutIconInput>;

    @Field(() => CategoryCreateManyIconInputEnvelope, {nullable:true})
    @Type(() => CategoryCreateManyIconInputEnvelope)
    createMany?: CategoryCreateManyIconInputEnvelope;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;

    @Field(() => [CategoryUpdateWithWhereUniqueWithoutIconInput], {nullable:true})
    @Type(() => CategoryUpdateWithWhereUniqueWithoutIconInput)
    update?: Array<CategoryUpdateWithWhereUniqueWithoutIconInput>;

    @Field(() => [CategoryUpdateManyWithWhereWithoutIconInput], {nullable:true})
    @Type(() => CategoryUpdateManyWithWhereWithoutIconInput)
    updateMany?: Array<CategoryUpdateManyWithWhereWithoutIconInput>;

    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    @Type(() => CategoryScalarWhereInput)
    deleteMany?: Array<CategoryScalarWhereInput>;
}
