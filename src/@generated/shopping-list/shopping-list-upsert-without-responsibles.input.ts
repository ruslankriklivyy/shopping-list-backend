import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListUpdateWithoutResponsiblesInput } from './shopping-list-update-without-responsibles.input';
import { Type } from 'class-transformer';
import { ShoppingListCreateWithoutResponsiblesInput } from './shopping-list-create-without-responsibles.input';
import { ShoppingListWhereInput } from './shopping-list-where.input';

@InputType()
export class ShoppingListUpsertWithoutResponsiblesInput {

    @Field(() => ShoppingListUpdateWithoutResponsiblesInput, {nullable:false})
    @Type(() => ShoppingListUpdateWithoutResponsiblesInput)
    update!: ShoppingListUpdateWithoutResponsiblesInput;

    @Field(() => ShoppingListCreateWithoutResponsiblesInput, {nullable:false})
    @Type(() => ShoppingListCreateWithoutResponsiblesInput)
    create!: ShoppingListCreateWithoutResponsiblesInput;

    @Field(() => ShoppingListWhereInput, {nullable:true})
    @Type(() => ShoppingListWhereInput)
    where?: ShoppingListWhereInput;
}
