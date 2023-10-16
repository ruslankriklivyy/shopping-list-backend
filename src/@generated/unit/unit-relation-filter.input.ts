import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UnitWhereInput } from './unit-where.input';

@InputType()
export class UnitRelationFilter {

    @Field(() => UnitWhereInput, {nullable:true})
    is?: UnitWhereInput;

    @Field(() => UnitWhereInput, {nullable:true})
    isNot?: UnitWhereInput;
}
