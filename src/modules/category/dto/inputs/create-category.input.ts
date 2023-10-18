import { Field, InputType } from '@nestjs/graphql';
import { IsInt, IsString } from 'class-validator';

@InputType()
export class CreateCategoryInput {
  @IsString()
  @Field()
  name: string;

  @IsInt()
  @Field({ nullable: true })
  icon_id: number;
}
