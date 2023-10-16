import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShoppingListUserWhereUniqueInput } from './shopping-list-user-where-unique.input';
import { Type } from 'class-transformer';
import { ShoppingListUserCreateInput } from './shopping-list-user-create.input';
import { ShoppingListUserUpdateInput } from './shopping-list-user-update.input';

@ArgsType()
export class UpsertOneShoppingListUserArgs {

    @Field(() => ShoppingListUserWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingListUserWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingListUserWhereUniqueInput, 'user_id_shopping_list_id'>;

    @Field(() => ShoppingListUserCreateInput, {nullable:false})
    @Type(() => ShoppingListUserCreateInput)
    create!: ShoppingListUserCreateInput;

    @Field(() => ShoppingListUserUpdateInput, {nullable:false})
    @Type(() => ShoppingListUserUpdateInput)
    update!: ShoppingListUserUpdateInput;
}
