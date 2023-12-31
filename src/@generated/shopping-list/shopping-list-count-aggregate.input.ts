import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ShoppingListCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    color?: true;

    @Field(() => Boolean, {nullable:true})
    progress?: true;

    @Field(() => Boolean, {nullable:true})
    author_id?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
