import { ArgsType, Field } from '@nestjs/graphql';
import { IsInt } from 'class-validator';

@ArgsType()
export class GetShoppingListItemArgs {
  @IsInt()
  @Field()
  id: number;
}
