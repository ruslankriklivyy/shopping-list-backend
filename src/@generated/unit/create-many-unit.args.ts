import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UnitCreateManyInput } from './unit-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUnitArgs {

    @Field(() => [UnitCreateManyInput], {nullable:false})
    @Type(() => UnitCreateManyInput)
    data!: Array<UnitCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
