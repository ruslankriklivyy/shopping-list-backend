import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Category } from '../category/category.model';
import { FileCount } from './file-count.output';

@ObjectType()
export class File {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    file_name!: string;

    @Field(() => Float, {nullable:false})
    size!: number;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => [Category], {nullable:true})
    categories?: Array<Category>;

    @Field(() => FileCount, {nullable:false})
    _count?: FileCount;
}
