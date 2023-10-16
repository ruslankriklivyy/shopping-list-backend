import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingListUserCreateManyInput } from './shopping-list-user-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyShoppingListUserArgs {

    @Field(() => [ShoppingListUserCreateManyInput], {nullable:false})
    @Type(() => ShoppingListUserCreateManyInput)
    data!: Array<ShoppingListUserCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
