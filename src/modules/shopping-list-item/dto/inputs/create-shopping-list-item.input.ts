import { Field, Float, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateShoppingListItemInput {
  @IsString()
  @Field(() => String)
  name: string;

  @IsNumber()
  @Field(() => Float)
  quantity: number;

  @IsBoolean()
  @Field(() => Boolean)
  is_completed: boolean;

  @IsNumber()
  @Field(() => Number)
  category_id: number;

  @IsNumber()
  @Field(() => Number)
  unit_id: number;

  @IsNumber()
  @Field(() => Number)
  shopping_list_id: number;
}
