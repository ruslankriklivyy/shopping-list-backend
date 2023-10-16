import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UnitWhereUniqueInput } from './unit-where-unique.input';
import { Type } from 'class-transformer';
import { UnitCreateInput } from './unit-create.input';
import { UnitUpdateInput } from './unit-update.input';

@ArgsType()
export class UpsertOneUnitArgs {

    @Field(() => UnitWhereUniqueInput, {nullable:false})
    @Type(() => UnitWhereUniqueInput)
    where!: Prisma.AtLeast<UnitWhereUniqueInput, 'id'>;

    @Field(() => UnitCreateInput, {nullable:false})
    @Type(() => UnitCreateInput)
    create!: UnitCreateInput;

    @Field(() => UnitUpdateInput, {nullable:false})
    @Type(() => UnitUpdateInput)
    update!: UnitUpdateInput;
}
