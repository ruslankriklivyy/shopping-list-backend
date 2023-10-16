import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingListWhereInput } from './shopping-list-where.input';
import { Type } from 'class-transformer';
import { ShoppingListOrderByWithRelationInput } from './shopping-list-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ShoppingListWhereUniqueInput } from './shopping-list-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShoppingListCountAggregateInput } from './shopping-list-count-aggregate.input';
import { ShoppingListAvgAggregateInput } from './shopping-list-avg-aggregate.input';
import { ShoppingListSumAggregateInput } from './shopping-list-sum-aggregate.input';
import { ShoppingListMinAggregateInput } from './shopping-list-min-aggregate.input';
import { ShoppingListMaxAggregateInput } from './shopping-list-max-aggregate.input';

@ArgsType()
export class ShoppingListAggregateArgs {

    @Field(() => ShoppingListWhereInput, {nullable:true})
    @Type(() => ShoppingListWhereInput)
    where?: ShoppingListWhereInput;

    @Field(() => [ShoppingListOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShoppingListOrderByWithRelationInput>;

    @Field(() => ShoppingListWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ShoppingListWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ShoppingListCountAggregateInput, {nullable:true})
    _count?: ShoppingListCountAggregateInput;

    @Field(() => ShoppingListAvgAggregateInput, {nullable:true})
    _avg?: ShoppingListAvgAggregateInput;

    @Field(() => ShoppingListSumAggregateInput, {nullable:true})
    _sum?: ShoppingListSumAggregateInput;

    @Field(() => ShoppingListMinAggregateInput, {nullable:true})
    _min?: ShoppingListMinAggregateInput;

    @Field(() => ShoppingListMaxAggregateInput, {nullable:true})
    _max?: ShoppingListMaxAggregateInput;
}
