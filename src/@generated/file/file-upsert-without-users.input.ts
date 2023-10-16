import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileUpdateWithoutUsersInput } from './file-update-without-users.input';
import { Type } from 'class-transformer';
import { FileCreateWithoutUsersInput } from './file-create-without-users.input';
import { FileWhereInput } from './file-where.input';

@InputType()
export class FileUpsertWithoutUsersInput {

    @Field(() => FileUpdateWithoutUsersInput, {nullable:false})
    @Type(() => FileUpdateWithoutUsersInput)
    update!: FileUpdateWithoutUsersInput;

    @Field(() => FileCreateWithoutUsersInput, {nullable:false})
    @Type(() => FileCreateWithoutUsersInput)
    create!: FileCreateWithoutUsersInput;

    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    where?: FileWhereInput;
}
