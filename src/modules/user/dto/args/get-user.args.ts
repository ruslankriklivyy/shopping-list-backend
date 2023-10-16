import { ArgsType, Field } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@ArgsType()
export class GetUserArgs {
  @Field()
  @IsOptional()
  id?: number;

  @Field()
  @IsOptional()
  email?: string;
}
