import { ArgsType, Field } from '@nestjs/graphql';
import { IsInt } from 'class-validator';

@ArgsType()
export class UpdateCategoryArgs {
  @IsInt()
  @Field()
  id: number;
}
