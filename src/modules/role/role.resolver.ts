import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { RoleService } from './role.service';
import { Role } from '@/modules/role/role.model';
import { GetRoleArgs } from '@/modules/role/dto/args/get-role.args';
import { GetWithPaginationArgs } from '@/shared/dto/args/get-with-pagination.args';
import { CreateRoleInput } from '@/modules/role/dto/inputs/create-role.input';
import { UpdateRoleArgs } from '@/modules/role/dto/args/update-role.args';
import { UpdateRoleInput } from '@/modules/role/dto/inputs/update-role.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@/modules/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Resolver('Role')
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

  @Mutation(() => Role)
  createRole(@Args('createRoleInput') createRoleInput: CreateRoleInput) {
    return this.roleService.createRole(createRoleInput);
  }

  @Mutation(() => Role)
  updateRole(
    @Args() updateRoleArgs: UpdateRoleArgs,
    @Args('updateRoleInput') updateRoleInput: UpdateRoleInput,
  ) {
    return this.roleService.updateRole(updateRoleArgs, updateRoleInput);
  }

  @Mutation(() => Role)
  deleteRole(@Args() deleteRoleArgs: UpdateRoleArgs) {
    return this.roleService.deleteRole(deleteRoleArgs);
  }
}
