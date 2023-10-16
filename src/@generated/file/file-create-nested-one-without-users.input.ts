import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutUsersInput } from './file-create-without-users.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutUsersInput } from './file-create-or-connect-without-users.input';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileCreateNestedOneWithoutUsersInput {

    @Field(() => FileCreateWithoutUsersInput, {nullable:true})
    @Type(() => FileCreateWithoutUsersInput)
    create?: FileCreateWithoutUsersInput;

    @Field(() => FileCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => FileCreateOrConnectWithoutUsersInput)
    connectOrCreate?: FileCreateOrConnectWithoutUsersInput;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Prisma.AtLeast<FileWhereUniqueInput, 'id'>;
}
