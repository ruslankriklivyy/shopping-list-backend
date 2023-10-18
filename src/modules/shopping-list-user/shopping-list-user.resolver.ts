import { Resolver } from '@nestjs/graphql';
import { ShoppingListUserService } from './shopping-list-user.service';

@Resolver()
export class ShoppingListUserResolver {
  constructor(private readonly shoppingListUserService: ShoppingListUserService) {}
}
