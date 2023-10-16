import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShoppingListUserWhereUniqueInput } from './shopping-list-user-where-unique.input';
import { Type } from 'class-transformer';
import { ShoppingListUserUpdateWithoutUserInput } from './shopping-list-user-update-without-user.input';

@InputType()
export class ShoppingListUserUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ShoppingListUserWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingListUserWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingListUserWhereUniqueInput, 'user_id_shopping_list_id'>;

    @Field(() => ShoppingListUserUpdateWithoutUserInput, {nullable:false})
    @Type(() => ShoppingListUserUpdateWithoutUserInput)
    data!: ShoppingListUserUpdateWithoutUserInput;
}
