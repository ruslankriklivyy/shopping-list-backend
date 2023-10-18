import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateShoppingListInput {
  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  name?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  color?: string;

  @IsOptional()
  @IsArray()
  @Field(() => [Number], { nullable: true })
  responsibles?: number[];
}
