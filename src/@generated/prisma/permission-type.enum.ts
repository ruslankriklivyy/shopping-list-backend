import { registerEnumType } from '@nestjs/graphql';

export enum PermissionType {
    preview = "preview",
    editable = "editable"
}


registerEnumType(PermissionType, { name: 'PermissionType', description: undefined })
