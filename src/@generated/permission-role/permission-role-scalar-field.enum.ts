import { registerEnumType } from '@nestjs/graphql';

export enum PermissionRoleScalarFieldEnum {
    role_id = "role_id",
    permission_id = "permission_id",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(PermissionRoleScalarFieldEnum, { name: 'PermissionRoleScalarFieldEnum', description: undefined })
