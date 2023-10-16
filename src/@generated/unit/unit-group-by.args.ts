import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UnitWhereInput } from './unit-where.input';
import { Type } from 'class-transformer';
import { UnitOrderByWithAggregationInput } from './unit-order-by-with-aggregation.input';
import { UnitScalarFieldEnum } from './unit-scalar-field.enum';
import { UnitScalarWhereWithAggregatesInput } from './unit-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UnitCountAggregateInput } from './unit-count-aggregate.input';
import { UnitAvgAggregateInput } from './unit-avg-aggregate.input';
import { UnitSumAggregateInput } from './unit-sum-aggregate.input';
import { UnitMinAggregateInput } from './unit-min-aggregate.input';
import { UnitMaxAggregateInput } from './unit-max-aggregate.input';

@ArgsType()
export class UnitGroupByArgs {

    @Field(() => UnitWhereInput, {nullable:true})
    @Type(() => UnitWhereInput)
    where?: UnitWhereInput;

    @Field(() => [UnitOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UnitOrderByWithAggregationInput>;

    @Field(() => [UnitScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UnitScalarFieldEnum>;

    @Field(() => UnitScalarWhereWithAggregatesInput, {nullable:true})
    having?: UnitScalarWhereWithAggregatesInput;

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
