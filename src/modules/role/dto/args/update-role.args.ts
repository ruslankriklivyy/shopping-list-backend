import { ArgsType, Field } from '@nestjs/graphql';
import { IsNumber, IsOptional } from 'class-validator';

@ArgsType()
export class UpdateRoleArgs {
  @IsNumber()
  @Field()
  id: number;

  @Field()
  @IsOptional()
  slug?: string;
}
