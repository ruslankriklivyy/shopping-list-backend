import { ArgsType, Field } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@ArgsType()
export class GetUsersArgs {
  @Field(() => Number, { nullable: true })
  @IsOptional()
  skip?: number;

  @Field(() => Number, { nullable: true })
  @IsOptional()
  take?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  orderBy?: string;
}
