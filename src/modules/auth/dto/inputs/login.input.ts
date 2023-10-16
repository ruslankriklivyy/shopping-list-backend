import { Field, InputType, ObjectType } from '@nestjs/graphql';

import { User } from '@/modules/user/user.model';

@InputType()
export class LoginInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}

@ObjectType()
export class AuthResult {
  @Field(() => User)
  user: User;

  @Field(() => String)
  access_token: string;

  @Field(() => String)
  refresh_token: string;
}
