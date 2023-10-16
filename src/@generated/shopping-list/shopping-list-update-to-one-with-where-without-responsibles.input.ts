import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListWhereInput } from './shopping-list-where.input';
import { Type } from 'class-transformer';
import { ShoppingListUpdateWithoutResponsiblesInput } from './shopping-list-update-without-responsibles.input';

@InputType()
export class ShoppingListUpdateToOneWithWhereWithoutResponsiblesInput {

    @Field(() => ShoppingListWhereInput, {nullable:true})
    @Type(() => ShoppingListWhereInput)
    where?: ShoppingListWhereInput;

    @Field(() => ShoppingListUpdateWithoutResponsiblesInput, {nullable:false})
    @Type(() => ShoppingListUpdateWithoutResponsiblesInput)
    data!: ShoppingListUpdateWithoutResponsiblesInput;
}
