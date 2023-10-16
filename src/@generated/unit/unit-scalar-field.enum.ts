import { registerEnumType } from '@nestjs/graphql';

export enum UnitScalarFieldEnum {
    id = "id",
    name = "name",
    value = "value",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(UnitScalarFieldEnum, { name: 'UnitScalarFieldEnum', description: undefined })
