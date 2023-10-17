import { Field, ObjectType } from '@nestjs/graphql';
import { Role as RoleModel } from '@prisma/client';
import { User } from '@/modules/user/user.model';
import { IsOptional } from 'class-validator';

@ObjectType()
export class Role {
  @Field(() => Number)
  id: RoleModel['id'];

  @Field(() => String)
  name: RoleModel['name'];

  @Field(() => String)
  slug: RoleModel['slug'];

  @Field(() => [User])
  @IsOptional()
  users?: User[];

  @Field(() => String)
  created_at: RoleModel['created_at'];

  @Field(() => String)
  updated_at: RoleModel['updated_at'];
}
