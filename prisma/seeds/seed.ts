import { PrismaClient } from '@prisma/client';

import { seedRoles } from './roles';
import { seedUsers } from './users';

const prisma = new PrismaClient();

async function main() {
  try {
    await seedRoles();
    await seedUsers();
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Successfully seed');
    prisma.$disconnect();
  }
}

main();
