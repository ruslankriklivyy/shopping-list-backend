import { Field, ObjectType } from '@nestjs/graphql';
import { Category as CategoryModel } from '@prisma/client';

@ObjectType()
export class Category {
  @Field(() => Number)
  id: CategoryModel['id'];

  @Field(() => String)
  name: CategoryModel['name'];

  @Field(() => String)
  created_at: CategoryModel['created_at'];

  @Field(() => String)
  updated_at: CategoryModel['updated_at'];
}
