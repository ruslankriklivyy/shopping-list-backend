import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ShoppingListUserScalarWhereInput {

    @Field(() => [ShoppingListUserScalarWhereInput], {nullable:true})
    AND?: Array<ShoppingListUserScalarWhereInput>;

    @Field(() => [ShoppingListUserScalarWhereInput], {nullable:true})
    OR?: Array<ShoppingListUserScalarWhereInput>;

    @Field(() => [ShoppingListUserScalarWhereInput], {nullable:true})
    NOT?: Array<ShoppingListUserScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    user_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    shopping_list_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
