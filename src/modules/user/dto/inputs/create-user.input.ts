import { Field, InputType } from '@nestjs/graphql';
import { IsInt, IsOptional, IsString, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @Field()
  email: string;

  @IsString()
  @MinLength(8)
  @Field()
  password: string;

  @IsString()
  @Field()
  name: string;

  @IsInt()
  @IsOptional()
  @Field({ nullable: true })
  avatar_id?: number;
}
