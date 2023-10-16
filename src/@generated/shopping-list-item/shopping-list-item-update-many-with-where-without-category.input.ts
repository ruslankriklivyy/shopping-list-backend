import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListItemScalarWhereInput } from './shopping-list-item-scalar-where.input';
import { Type } from 'class-transformer';
import { ShoppingListItemUpdateManyMutationInput } from './shopping-list-item-update-many-mutation.input';

@InputType()
export class ShoppingListItemUpdateManyWithWhereWithoutCategoryInput {

    @Field(() => ShoppingListItemScalarWhereInput, {nullable:false})
    @Type(() => ShoppingListItemScalarWhereInput)
    where!: ShoppingListItemScalarWhereInput;

    @Field(() => ShoppingListItemUpdateManyMutationInput, {nullable:false})
    @Type(() => ShoppingListItemUpdateManyMutationInput)
    data!: ShoppingListItemUpdateManyMutationInput;
}
