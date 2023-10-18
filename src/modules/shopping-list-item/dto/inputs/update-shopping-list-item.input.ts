import { Field, Float, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

@InputType()
export class UpdateShoppingListItemInput {
  @IsString()
  @Field(() => String, { nullable: true })
  name: string;

  @IsNumber()
  @Field(() => Float, { nullable: true })
  quantity: number;

  @IsBoolean()
  @Field(() => Boolean, { nullable: true })
  is_completed: boolean;

  @IsNumber()
  @Field(() => Number, { nullable: true })
  category_id: number;

  @IsNumber()
  @Field(() => Number, { nullable: true })
  unit_id: number;
}
