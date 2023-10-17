import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateRoleInput {
  @IsOptional()
  @IsString()
  @Field(() => String)
  name?: string;

  @IsOptional()
  @IsString()
  @Field(() => String)
  slug?: string;
}
