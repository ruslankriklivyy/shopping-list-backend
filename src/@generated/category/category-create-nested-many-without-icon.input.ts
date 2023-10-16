import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutIconInput } from './category-create-without-icon.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutIconInput } from './category-create-or-connect-without-icon.input';
import { CategoryCreateManyIconInputEnvelope } from './category-create-many-icon-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedManyWithoutIconInput {

    @Field(() => [CategoryCreateWithoutIconInput], {nullable:true})
    @Type(() => CategoryCreateWithoutIconInput)
    create?: Array<CategoryCreateWithoutIconInput>;

    @Field(() => [CategoryCreateOrConnectWithoutIconInput], {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutIconInput)
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutIconInput>;

    @Field(() => CategoryCreateManyIconInputEnvelope, {nullable:true})
    @Type(() => CategoryCreateManyIconInputEnvelope)
    createMany?: CategoryCreateManyIconInputEnvelope;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;
}
