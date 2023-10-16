import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListCreateManyAuthorInput } from './shopping-list-create-many-author.input';
import { Type } from 'class-transformer';

@InputType()
export class ShoppingListCreateManyAuthorInputEnvelope {

    @Field(() => [ShoppingListCreateManyAuthorInput], {nullable:false})
    @Type(() => ShoppingListCreateManyAuthorInput)
    data!: Array<ShoppingListCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
