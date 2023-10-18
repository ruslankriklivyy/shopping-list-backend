import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import { User as UserModel } from '@prisma/client';

import { Token } from '../token/token.model';

@ObjectType()
export class User {
  @Field(() => Int)
  id: UserModel['id'];

  @Field(() => String)
  email: UserModel['email'];

  @Field(() => String)
  name: UserModel['name'];

  @Field(() => String)
  password: UserModel['password'];

  @Field(() => [Token], { nullable: true })
  tokens?: Token[];

  @Field(() => GraphQLISODateTime)
  created_at: UserModel['created_at'];

  @Field(() => GraphQLISODateTime)
  updated_at: UserModel['updated_at'];
}
