import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereInput } from './file-where.input';
import { Type } from 'class-transformer';
import { FileUpdateWithoutCategoriesInput } from './file-update-without-categories.input';

@InputType()
export class FileUpdateToOneWithWhereWithoutCategoriesInput {

    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    where?: FileWhereInput;

    @Field(() => FileUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => FileUpdateWithoutCategoriesInput)
    data!: FileUpdateWithoutCategoriesInput;
}
