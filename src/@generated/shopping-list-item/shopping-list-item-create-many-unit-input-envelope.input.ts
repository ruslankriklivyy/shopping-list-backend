import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListItemCreateManyUnitInput } from './shopping-list-item-create-many-unit.input';
import { Type } from 'class-transformer';

@InputType()
export class ShoppingListItemCreateManyUnitInputEnvelope {

    @Field(() => [ShoppingListItemCreateManyUnitInput], {nullable:false})
    @Type(() => ShoppingListItemCreateManyUnitInput)
    data!: Array<ShoppingListItemCreateManyUnitInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
