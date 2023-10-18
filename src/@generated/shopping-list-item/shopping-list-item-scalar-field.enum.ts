import { registerEnumType } from '@nestjs/graphql';

export enum ShoppingListItemScalarFieldEnum {
    id = "id",
    name = "name",
    quantity = "quantity",
    is_completed = "is_completed",
    unit_id = "unit_id",
    shopping_list_id = "shopping_list_id",
    category_id = "category_id",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(ShoppingListItemScalarFieldEnum, { name: 'ShoppingListItemScalarFieldEnum', description: undefined })
