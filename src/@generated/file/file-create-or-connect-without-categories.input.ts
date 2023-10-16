import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileCreateWithoutCategoriesInput } from './file-create-without-categories.input';

@InputType()
export class FileCreateOrConnectWithoutCategoriesInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: Prisma.AtLeast<FileWhereUniqueInput, 'id'>;

    @Field(() => FileCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => FileCreateWithoutCategoriesInput)
    create!: FileCreateWithoutCategoriesInput;
}
