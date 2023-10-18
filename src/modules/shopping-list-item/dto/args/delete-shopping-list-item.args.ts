import { ArgsType, Field } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@ArgsType()
export class DeleteShoppingListItemArgs {
  @IsNumber()
  @Field(() => Number)
  id: number;
}
