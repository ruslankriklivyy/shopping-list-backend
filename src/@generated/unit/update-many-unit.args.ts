import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UnitUpdateManyMutationInput } from './unit-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UnitWhereInput } from './unit-where.input';

@ArgsType()
export class UpdateManyUnitArgs {

    @Field(() => UnitUpdateManyMutationInput, {nullable:false})
    @Type(() => UnitUpdateManyMutationInput)
    data!: UnitUpdateManyMutationInput;

    @Field(() => UnitWhereInput, {nullable:true})
    @Type(() => UnitWhereInput)
    where?: UnitWhereInput;
}
