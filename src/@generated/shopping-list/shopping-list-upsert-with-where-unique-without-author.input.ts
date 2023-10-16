import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShoppingListWhereUniqueInput } from './shopping-list-where-unique.input';
import { Type } from 'class-transformer';
import { ShoppingListUpdateWithoutAuthorInput } from './shopping-list-update-without-author.input';
import { ShoppingListCreateWithoutAuthorInput } from './shopping-list-create-without-author.input';

@InputType()
export class ShoppingListUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => ShoppingListWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingListWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingListWhereUniqueInput, 'id'>;

    @Field(() => ShoppingListUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => ShoppingListUpdateWithoutAuthorInput)
    update!: ShoppingListUpdateWithoutAuthorInput;

    @Field(() => ShoppingListCreateWithoutAuthorInput, {nullable:false})
    @Type(() => ShoppingListCreateWithoutAuthorInput)
    create!: ShoppingListCreateWithoutAuthorInput;
}
