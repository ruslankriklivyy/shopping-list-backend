import { ArgsType, Field } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@ArgsType()
export class GetRoleArgs {
  @Field()
  @IsOptional()
  id?: number;

  @Field({ nullable: true })
  @IsOptional()
  slug?: string;
}
