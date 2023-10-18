import { ArgsType, Field } from '@nestjs/graphql';
import { IsInt } from 'class-validator';

@ArgsType()
export class UpdateShoppingListArgs {
  @IsInt()
  @Field()
  id: number;

  @IsInt()
  @Field({ nullable: true })
  userId?: number;
}
