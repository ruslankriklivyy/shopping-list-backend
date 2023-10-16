import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UnitCount {

    @Field(() => Int, {nullable:false})
    shopping_list_items?: number;
}
