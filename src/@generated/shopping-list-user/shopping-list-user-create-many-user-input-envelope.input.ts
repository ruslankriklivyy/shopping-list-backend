import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListUserCreateManyUserInput } from './shopping-list-user-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ShoppingListUserCreateManyUserInputEnvelope {

    @Field(() => [ShoppingListUserCreateManyUserInput], {nullable:false})
    @Type(() => ShoppingListUserCreateManyUserInput)
    data!: Array<ShoppingListUserCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
