import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedShoppingListUsers() {
  try {
    await prisma.shoppingListUser.createMany({
      data: [
        { shopping_list_id: 1, user_id: 2 },
        { shopping_list_id: 2, user_id: 2 },
        { shopping_list_id: 2, user_id: 1 },
      ],
    });
  } catch (error) {
    console.log('Error sending shopping list users: ', error);
  } finally {
    await prisma.$disconnect();
  }
}
