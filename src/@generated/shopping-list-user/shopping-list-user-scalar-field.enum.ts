import { registerEnumType } from '@nestjs/graphql';

export enum ShoppingListUserScalarFieldEnum {
    user_id = "user_id",
    shopping_list_id = "shopping_list_id",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(ShoppingListUserScalarFieldEnum, { name: 'ShoppingListUserScalarFieldEnum', description: undefined })
