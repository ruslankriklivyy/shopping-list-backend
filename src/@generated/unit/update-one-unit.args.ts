import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UnitUpdateInput } from './unit-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UnitWhereUniqueInput } from './unit-where-unique.input';

@ArgsType()
export class UpdateOneUnitArgs {

    @Field(() => UnitUpdateInput, {nullable:false})
    @Type(() => UnitUpdateInput)
    data!: UnitUpdateInput;

    @Field(() => UnitWhereUniqueInput, {nullable:false})
    @Type(() => UnitWhereUniqueInput)
    where!: Prisma.AtLeast<UnitWhereUniqueInput, 'id'>;
}
