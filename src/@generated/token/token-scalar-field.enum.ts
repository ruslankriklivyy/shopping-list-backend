import { registerEnumType } from '@nestjs/graphql';

export enum TokenScalarFieldEnum {
    id = "id",
    access_token = "access_token",
    refresh_token = "refresh_token",
    user_id = "user_id",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(TokenScalarFieldEnum, { name: 'TokenScalarFieldEnum', description: undefined })
