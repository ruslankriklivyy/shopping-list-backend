import { registerEnumType } from '@nestjs/graphql';

export enum FileScalarFieldEnum {
    id = "id",
    name = "name",
    file_name = "file_name",
    size = "size",
    url = "url",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(FileScalarFieldEnum, { name: 'FileScalarFieldEnum', description: undefined })
