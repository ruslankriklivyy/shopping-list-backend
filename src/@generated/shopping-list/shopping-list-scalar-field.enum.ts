import { registerEnumType } from '@nestjs/graphql';

export enum ShoppingListScalarFieldEnum {
    id = "id",
    name = "name",
    color = "color",
    progress = "progress",
    author_id = "author_id",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(ShoppingListScalarFieldEnum, { name: 'ShoppingListScalarFieldEnum', description: undefined })
