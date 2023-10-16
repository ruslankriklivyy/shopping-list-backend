import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListUserCreateManyShopping_listInput } from './shopping-list-user-create-many-shopping-list.input';
import { Type } from 'class-transformer';

@InputType()
export class ShoppingListUserCreateManyShopping_listInputEnvelope {

    @Field(() => [ShoppingListUserCreateManyShopping_listInput], {nullable:false})
    @Type(() => ShoppingListUserCreateManyShopping_listInput)
    data!: Array<ShoppingListUserCreateManyShopping_listInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
