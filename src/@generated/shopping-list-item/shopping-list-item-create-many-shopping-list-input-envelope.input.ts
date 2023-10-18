import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListItemCreateManyShopping_listInput } from './shopping-list-item-create-many-shopping-list.input';
import { Type } from 'class-transformer';

@InputType()
export class ShoppingListItemCreateManyShopping_listInputEnvelope {

    @Field(() => [ShoppingListItemCreateManyShopping_listInput], {nullable:false})
    @Type(() => ShoppingListItemCreateManyShopping_listInput)
    data!: Array<ShoppingListItemCreateManyShopping_listInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
