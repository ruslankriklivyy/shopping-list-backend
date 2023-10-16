import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListScalarWhereInput } from './shopping-list-scalar-where.input';
import { Type } from 'class-transformer';
import { ShoppingListUpdateManyMutationInput } from './shopping-list-update-many-mutation.input';

@InputType()
export class ShoppingListUpdateManyWithWhereWithoutAuthorInput {

    @Field(() => ShoppingListScalarWhereInput, {nullable:false})
    @Type(() => ShoppingListScalarWhereInput)
    where!: ShoppingListScalarWhereInput;

    @Field(() => ShoppingListUpdateManyMutationInput, {nullable:false})
    @Type(() => ShoppingListUpdateManyMutationInput)
    data!: ShoppingListUpdateManyMutationInput;
}
