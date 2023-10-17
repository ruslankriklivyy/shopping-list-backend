import { Injectable } from '@nestjs/common';

import { RoleRepository } from '@/modules/role/role.repository';
import { GetRoleArgs } from '@/modules/role/dto/args/get-role.args';
import { GetWithPaginationArgs } from '@/shared/dto/args/get-with-pagination.args';
import { CreateRoleInput } from '@/modules/role/dto/inputs/create-role.input';
import { UpdateRoleInput } from '@/modules/role/dto/inputs/update-role.input';
import { UpdateRoleArgs } from '@/modules/role/dto/args/update-role.args';

@Injectable()
export class RoleService {
  constructor(private readonly roleRepository: RoleRepository) {}

  public getRole(getRoleArgs: GetRoleArgs) {
    return this.roleRepository.getRole({
      id: getRoleArgs?.id,
      slug: getRoleArgs?.slug,
    });
  }

  public getRoles(getRolesArgs: GetWithPaginationArgs) {
    return this.roleRepository.getRoles(getRolesArgs);
  }

  public createRole(createRoleInput: CreateRoleInput) {
    return this.roleRepository.createRole(createRoleInput);
  }

  public updateRole(
    updateRoleArgs: UpdateRoleArgs,
    updateRoleInput: UpdateRoleInput,
  ) {
    return this.roleRepository.updateRole(updateRoleArgs, updateRoleInput);
  }

  public deleteRole(updateRoleArgs: UpdateRoleArgs) {
    return this.roleRepository.deleteRole(updateRoleArgs);
  }
}
