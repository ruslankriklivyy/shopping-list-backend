import { Token as TokenModel } from '@prisma/client';
import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Token {
  @Field(() => Number)
  id: TokenModel['id'];

  @Field(() => String)
  access_token: TokenModel['access_token'];

  @Field(() => String)
  refresh_token: TokenModel['refresh_token'];

  @Field(() => [User])
  users: User[];

  @Field(() => String)
  created_at: TokenModel['created_at'];

  @Field(() => String)
  updated_at: TokenModel['updated_at'];
}
