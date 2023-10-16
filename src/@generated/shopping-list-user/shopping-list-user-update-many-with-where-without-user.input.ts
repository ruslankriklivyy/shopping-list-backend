import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListUserScalarWhereInput } from './shopping-list-user-scalar-where.input';
import { Type } from 'class-transformer';
import { ShoppingListUserUpdateManyMutationInput } from './shopping-list-user-update-many-mutation.input';

@InputType()
export class ShoppingListUserUpdateManyWithWhereWithoutUserInput {

    @Field(() => ShoppingListUserScalarWhereInput, {nullable:false})
    @Type(() => ShoppingListUserScalarWhereInput)
    where!: ShoppingListUserScalarWhereInput;

    @Field(() => ShoppingListUserUpdateManyMutationInput, {nullable:false})
    @Type(() => ShoppingListUserUpdateManyMutationInput)
    data!: ShoppingListUserUpdateManyMutationInput;
}
