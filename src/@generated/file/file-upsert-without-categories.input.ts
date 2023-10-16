import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileUpdateWithoutCategoriesInput } from './file-update-without-categories.input';
import { Type } from 'class-transformer';
import { FileCreateWithoutCategoriesInput } from './file-create-without-categories.input';
import { FileWhereInput } from './file-where.input';

@InputType()
export class FileUpsertWithoutCategoriesInput {

    @Field(() => FileUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => FileUpdateWithoutCategoriesInput)
    update!: FileUpdateWithoutCategoriesInput;

    @Field(() => FileCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => FileCreateWithoutCategoriesInput)
    create!: FileCreateWithoutCategoriesInput;

    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    where?: FileWhereInput;
}
