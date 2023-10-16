import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereInput } from './file-where.input';
import { Type } from 'class-transformer';
import { FileUpdateWithoutUsersInput } from './file-update-without-users.input';

@InputType()
export class FileUpdateToOneWithWhereWithoutUsersInput {

    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    where?: FileWhereInput;

    @Field(() => FileUpdateWithoutUsersInput, {nullable:false})
    @Type(() => FileUpdateWithoutUsersInput)
    data!: FileUpdateWithoutUsersInput;
}
