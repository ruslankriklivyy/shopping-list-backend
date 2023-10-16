import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingListCreateManyInput } from './shopping-list-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyShoppingListArgs {

    @Field(() => [ShoppingListCreateManyInput], {nullable:false})
    @Type(() => ShoppingListCreateManyInput)
    data!: Array<ShoppingListCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
