import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UnitWhereInput } from './unit-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUnitArgs {

    @Field(() => UnitWhereInput, {nullable:true})
    @Type(() => UnitWhereInput)
    where?: UnitWhereInput;
}
