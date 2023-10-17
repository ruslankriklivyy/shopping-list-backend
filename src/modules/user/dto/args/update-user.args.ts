import { ArgsType, Field } from '@nestjs/graphql';
import { IsInt, IsOptional, IsString } from 'class-validator';

@ArgsType()
export class UpdateUserArgs {
  @IsInt()
  @Field()
  id: number;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  email?: string;
}
