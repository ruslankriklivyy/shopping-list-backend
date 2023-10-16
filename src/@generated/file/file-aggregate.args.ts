import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FileWhereInput } from './file-where.input';
import { Type } from 'class-transformer';
import { FileOrderByWithRelationInput } from './file-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FileCountAggregateInput } from './file-count-aggregate.input';
import { FileAvgAggregateInput } from './file-avg-aggregate.input';
import { FileSumAggregateInput } from './file-sum-aggregate.input';
import { FileMinAggregateInput } from './file-min-aggregate.input';
import { FileMaxAggregateInput } from './file-max-aggregate.input';

@ArgsType()
export class FileAggregateArgs {

    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    where?: FileWhereInput;

    @Field(() => [FileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FileOrderByWithRelationInput>;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FileWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FileCountAggregateInput, {nullable:true})
    _count?: FileCountAggregateInput;

    @Field(() => FileAvgAggregateInput, {nullable:true})
    _avg?: FileAvgAggregateInput;

    @Field(() => FileSumAggregateInput, {nullable:true})
    _sum?: FileSumAggregateInput;

    @Field(() => FileMinAggregateInput, {nullable:true})
    _min?: FileMinAggregateInput;

    @Field(() => FileMaxAggregateInput, {nullable:true})
    _max?: FileMaxAggregateInput;
}
