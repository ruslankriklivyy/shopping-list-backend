import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedShoppingListItems() {
  try {
    await prisma.shoppingListItem.createMany({
      data: [
        {
          name: 'Test 1',
          category_id: 1,
          shopping_list_id: 1,
          is_completed: true,
          quantity: 10,
          unit_id: 1,
        },
        {
          name: 'Test 2',
          category_id: 1,
          shopping_list_id: 1,
          is_completed: false,
          quantity: 10,
          unit_id: 1,
        },
        {
          name: 'Test 3',
          category_id: 2,
          shopping_list_id: 2,
          is_completed: false,
          quantity: 10,
          unit_id: 1,
        },
        {
          name: 'Test 4',
          category_id: 2,
          shopping_list_id: 2,
          is_completed: false,
          quantity: 10,
          unit_id: 1,
        },
      ],
    });
  } catch (error) {
    console.log('Error sending shopping list items: ', error);
  } finally {
    await prisma.$disconnect();
  }
}
