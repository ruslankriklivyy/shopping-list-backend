import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutUsersInput } from './file-create-without-users.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutUsersInput } from './file-create-or-connect-without-users.input';
import { FileUpsertWithoutUsersInput } from './file-upsert-without-users.input';
import { FileWhereInput } from './file-where.input';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateToOneWithWhereWithoutUsersInput } from './file-update-to-one-with-where-without-users.input';

@InputType()
export class FileUpdateOneWithoutUsersNestedInput {

    @Field(() => FileCreateWithoutUsersInput, {nullable:true})
    @Type(() => FileCreateWithoutUsersInput)
    create?: FileCreateWithoutUsersInput;

    @Field(() => FileCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => FileCreateOrConnectWithoutUsersInput)
    connectOrCreate?: FileCreateOrConnectWithoutUsersInput;

    @Field(() => FileUpsertWithoutUsersInput, {nullable:true})
    @Type(() => FileUpsertWithoutUsersInput)
    upsert?: FileUpsertWithoutUsersInput;

    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    disconnect?: FileWhereInput;

    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    delete?: FileWhereInput;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Prisma.AtLeast<FileWhereUniqueInput, 'id'>;

    @Field(() => FileUpdateToOneWithWhereWithoutUsersInput, {nullable:true})
    @Type(() => FileUpdateToOneWithWhereWithoutUsersInput)
    update?: FileUpdateToOneWithWhereWithoutUsersInput;
}
