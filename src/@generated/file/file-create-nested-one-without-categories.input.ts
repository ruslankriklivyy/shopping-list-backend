import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutCategoriesInput } from './file-create-without-categories.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutCategoriesInput } from './file-create-or-connect-without-categories.input';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileCreateNestedOneWithoutCategoriesInput {

    @Field(() => FileCreateWithoutCategoriesInput, {nullable:true})
    @Type(() => FileCreateWithoutCategoriesInput)
    create?: FileCreateWithoutCategoriesInput;

    @Field(() => FileCreateOrConnectWithoutCategoriesInput, {nullable:true})
    @Type(() => FileCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: FileCreateOrConnectWithoutCategoriesInput;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Prisma.AtLeast<FileWhereUniqueInput, 'id'>;
}
