import { registerEnumType } from '@nestjs/graphql';

export enum ShoppingListItemScalarFieldEnum {
    id = "id",
    name = "name",
    quantity = "quantity",
    unit_id = "unit_id",
    category_id = "category_id",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(ShoppingListItemScalarFieldEnum, { name: 'ShoppingListItemScalarFieldEnum', description: undefined })
