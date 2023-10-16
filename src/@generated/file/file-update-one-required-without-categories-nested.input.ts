import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutCategoriesInput } from './file-create-without-categories.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutCategoriesInput } from './file-create-or-connect-without-categories.input';
import { FileUpsertWithoutCategoriesInput } from './file-upsert-without-categories.input';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateToOneWithWhereWithoutCategoriesInput } from './file-update-to-one-with-where-without-categories.input';

@InputType()
export class FileUpdateOneRequiredWithoutCategoriesNestedInput {

    @Field(() => FileCreateWithoutCategoriesInput, {nullable:true})
    @Type(() => FileCreateWithoutCategoriesInput)
    create?: FileCreateWithoutCategoriesInput;

    @Field(() => FileCreateOrConnectWithoutCategoriesInput, {nullable:true})
    @Type(() => FileCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: FileCreateOrConnectWithoutCategoriesInput;

    @Field(() => FileUpsertWithoutCategoriesInput, {nullable:true})
    @Type(() => FileUpsertWithoutCategoriesInput)
    upsert?: FileUpsertWithoutCategoriesInput;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Prisma.AtLeast<FileWhereUniqueInput, 'id'>;

    @Field(() => FileUpdateToOneWithWhereWithoutCategoriesInput, {nullable:true})
    @Type(() => FileUpdateToOneWithWhereWithoutCategoriesInput)
    update?: FileUpdateToOneWithWhereWithoutCategoriesInput;
}
