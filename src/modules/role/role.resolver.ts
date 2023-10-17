import { Args, Query, Resolver } from '@nestjs/graphql';

import { RoleService } from './role.service';
import { Role } from '@/modules/role/role.model';
import { GetRoleArgs } from '@/modules/role/dto/args/get-role.args';
import { GetWithPaginationArgs } from '@/shared/dto/args/get-with-pagination.args';

@Resolver()
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Query(() => Role)
  getRole(@Args() getRoleArgs: GetRoleArgs) {
    return this.roleService.getRole(getRoleArgs);
  }

  @Query(() => [Role])
  getRoles(@Args() getWithPagination: GetWithPaginationArgs) {
    return this.roleService.getRoles(getWithPagination);
  }
}
