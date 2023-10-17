import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateRoleInput {
  @IsString()
  @Field(() => String)
  name: string;

  @IsString()
  @Field(() => String)
  slug: string;
}
