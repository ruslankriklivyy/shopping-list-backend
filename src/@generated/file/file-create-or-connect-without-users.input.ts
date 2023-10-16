import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileCreateWithoutUsersInput } from './file-create-without-users.input';

@InputType()
export class FileCreateOrConnectWithoutUsersInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: Prisma.AtLeast<FileWhereUniqueInput, 'id'>;

    @Field(() => FileCreateWithoutUsersInput, {nullable:false})
    @Type(() => FileCreateWithoutUsersInput)
    create!: FileCreateWithoutUsersInput;
}
