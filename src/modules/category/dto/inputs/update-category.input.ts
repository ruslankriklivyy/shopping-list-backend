import { Field, InputType } from '@nestjs/graphql';
import { IsInt, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateCategoryInput {
  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  name: string;

  @IsInt()
  @IsOptional()
  @Field({ nullable: true })
  icon_id: number;
}
