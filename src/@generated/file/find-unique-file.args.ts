import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueFileArgs {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: Prisma.AtLeast<FileWhereUniqueInput, 'id'>;
}