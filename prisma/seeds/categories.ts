import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedCategories() {
  try {
    await prisma.category.createMany({
      data: [
        {
          name: 'Food',
        },
        {
          name: 'Groceries',
        },
        {
          name: 'Sport',
        },
      ],
    });
  } catch (error) {
    console.log('Error seeding categories: ', error);
  } finally {
    prisma.$disconnect();
  }
}
