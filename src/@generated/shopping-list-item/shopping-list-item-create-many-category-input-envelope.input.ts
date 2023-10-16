import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingListItemCreateManyCategoryInput } from './shopping-list-item-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class ShoppingListItemCreateManyCategoryInputEnvelope {

    @Field(() => [ShoppingListItemCreateManyCategoryInput], {nullable:false})
    @Type(() => ShoppingListItemCreateManyCategoryInput)
    data!: Array<ShoppingListItemCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
