import { Field, ObjectType } from '@nestjs/graphql';
import { User as UserModel } from '@prisma/client';
import { Token } from '../token/token.model';
import { IsOptional } from 'class-validator';

@ObjectType()
export class User {
  @Field(() => Number)
  id: UserModel['id'];

  @Field(() => String)
  email: UserModel['email'];

  @Field(() => String)
  name: UserModel['name'];

  @Field(() => String)
  password: UserModel['password'];

  @Field(() => [Token])
  @IsOptional()
  tokens?: Token[];

  @Field(() => String)
  created_at: UserModel['created_at'];

  @Field(() => String)
  updated_at: UserModel['updated_at'];
}
