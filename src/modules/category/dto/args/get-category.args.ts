import { ArgsType, Field } from '@nestjs/graphql';
import { IsInt } from 'class-validator';

@ArgsType()
export class GetCategoryArgs {
  @IsInt()
  @Field()
  id: number;
}
