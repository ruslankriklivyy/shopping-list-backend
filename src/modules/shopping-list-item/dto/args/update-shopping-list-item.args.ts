import { ArgsType, Field } from '@nestjs/graphql';
import { IsInt } from 'class-validator';

@ArgsType()
export class UpdateShoppingListItemArgs {
  @IsInt()
  @Field()
  id: number;
}
