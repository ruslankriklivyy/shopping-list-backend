import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingListItemCreateManyInput } from './shopping-list-item-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyShoppingListItemArgs {

    @Field(() => [ShoppingListItemCreateManyInput], {nullable:false})
    @Type(() => ShoppingListItemCreateManyInput)
    data!: Array<ShoppingListItemCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
