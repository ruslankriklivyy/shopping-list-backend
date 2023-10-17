import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RolesResult {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  slug: string;
}
