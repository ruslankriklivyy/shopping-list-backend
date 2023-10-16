import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UnitCreateInput } from './unit-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUnitArgs {

    @Field(() => UnitCreateInput, {nullable:false})
    @Type(() => UnitCreateInput)
    data!: UnitCreateInput;
}
