import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UnitWhereInput } from './unit-where.input';
import { Type } from 'class-transformer';
import { UnitOrderByWithRelationInput } from './unit-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UnitWhereUniqueInput } from './unit-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UnitScalarFieldEnum } from './unit-scalar-field.enum';

@ArgsType()
export class FindManyUnitArgs {

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

    @Field(() => [UnitScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UnitScalarFieldEnum>;
}
