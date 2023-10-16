import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UnitCountAggregate } from './unit-count-aggregate.output';
import { UnitAvgAggregate } from './unit-avg-aggregate.output';
import { UnitSumAggregate } from './unit-sum-aggregate.output';
import { UnitMinAggregate } from './unit-min-aggregate.output';
import { UnitMaxAggregate } from './unit-max-aggregate.output';

@ObjectType()
export class UnitGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => UnitCountAggregate, {nullable:true})
    _count?: UnitCountAggregate;

    @Field(() => UnitAvgAggregate, {nullable:true})
    _avg?: UnitAvgAggregate;

    @Field(() => UnitSumAggregate, {nullable:true})
    _sum?: UnitSumAggregate;

    @Field(() => UnitMinAggregate, {nullable:true})
    _min?: UnitMinAggregate;

    @Field(() => UnitMaxAggregate, {nullable:true})
    _max?: UnitMaxAggregate;
}
