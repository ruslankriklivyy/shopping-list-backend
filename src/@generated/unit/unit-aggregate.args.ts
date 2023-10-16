import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UnitWhereInput } from './unit-where.input';
import { Type } from 'class-transformer';
import { UnitOrderByWithRelationInput } from './unit-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UnitWhereUniqueInput } from './unit-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UnitCountAggregateInput } from './unit-count-aggregate.input';
import { UnitAvgAggregateInput } from './unit-avg-aggregate.input';
import { UnitSumAggregateInput } from './unit-sum-aggregate.input';
import { UnitMinAggregateInput } from './unit-min-aggregate.input';
import { UnitMaxAggregateInput } from './unit-max-aggregate.input';

@ArgsType()
export class UnitAggregateArgs {

    @Field(() => UnitWhereInput, {nullable:true})
    @Type(() => UnitWhereInput)
    where?: UnitWhereInput;

    @Field(() => [UnitOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UnitOrderByWithRelationInput>;

    @Field(() => UnitWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UnitWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UnitCountAggregateInput, {nullable:true})
    _count?: UnitCountAggregateInput;

    @Field(() => UnitAvgAggregateInput, {nullable:true})
    _avg?: UnitAvgAggregateInput;

    @Field(() => UnitSumAggregateInput, {nullable:true})
    _sum?: UnitSumAggregateInput;

    @Field(() => UnitMinAggregateInput, {nullable:true})
    _min?: UnitMinAggregateInput;

    @Field(() => UnitMaxAggregateInput, {nullable:true})
    _max?: UnitMaxAggregateInput;
}
