import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedShoppingLists() {
  try {
    await prisma.shoppingList.createMany({
      data: [
        { name: 'Test 1', color: '#805AD5', progress: 3, author_id: 2 },
        { name: 'Test 2', color: '#805AD5', progress: 1, author_id: 1 },
        { name: 'Test 3', color: '#805AD5', progress: 0, author_id: 2 },
        { name: 'Test 4', color: '#805AD5', progress: 4, author_id: 2 },
      ],
    });
  } catch (error) {
    console.log('Error sending shopping lists: ', error);
  } finally {
    await prisma.$disconnect();
  }
}
