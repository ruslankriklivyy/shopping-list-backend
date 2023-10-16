import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutIconInput } from './category-create-without-icon.input';

@InputType()
export class CategoryCreateOrConnectWithoutIconInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryCreateWithoutIconInput, {nullable:false})
    @Type(() => CategoryCreateWithoutIconInput)
    create!: CategoryCreateWithoutIconInput;
}
