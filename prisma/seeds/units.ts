import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedUnits() {
  try {
    await prisma.unit.createMany({
      data: [
        { name: 'Weight', value: 'weight' },
        { name: 'Test 1', value: 'test 1' },
        { name: 'Test 2', value: 'test 2' },
      ],
    });
  } catch (error) {
    console.log('Error sending units: ', error);
  } finally {
    await prisma.$disconnect();
  }
}
