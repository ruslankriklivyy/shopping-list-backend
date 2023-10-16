import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field()
  @IsOptional()
  name: string;

  @Field()
  @IsOptional()
  avatar_id: number;
}
