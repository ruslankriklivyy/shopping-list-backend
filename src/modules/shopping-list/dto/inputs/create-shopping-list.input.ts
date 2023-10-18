import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateShoppingListInput {
  @IsString()
  @Field()
  name: string;

  @IsString()
  @Field()
  color: string;
}
