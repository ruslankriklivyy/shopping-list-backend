import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShoppingListWhereUniqueInput } from './shopping-list-where-unique.input';
import { Type } from 'class-transformer';
import { ShoppingListCreateWithoutAuthorInput } from './shopping-list-create-without-author.input';

@InputType()
export class ShoppingListCreateOrConnectWithoutAuthorInput {

    @Field(() => ShoppingListWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingListWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingListWhereUniqueInput, 'id'>;

    @Field(() => ShoppingListCreateWithoutAuthorInput, {nullable:false})
    @Type(() => ShoppingListCreateWithoutAuthorInput)
    create!: ShoppingListCreateWithoutAuthorInput;
}
