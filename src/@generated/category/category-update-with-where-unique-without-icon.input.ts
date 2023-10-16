import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryUpdateWithoutIconInput } from './category-update-without-icon.input';

@InputType()
export class CategoryUpdateWithWhereUniqueWithoutIconInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryUpdateWithoutIconInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutIconInput)
    data!: CategoryUpdateWithoutIconInput;
}
