import { ArgsType, Field } from '@nestjs/graphql';
import { IsInt } from 'class-validator';

@ArgsType()
export class GetShoppingListArgs {
  @IsInt()
  @Field()
  id: number;
}
