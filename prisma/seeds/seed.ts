import { PrismaClient } from '@prisma/client';

import { seedRoles } from './roles';
import { seedUsers } from './users';
import { seedCategories } from './categories';
import { seedShoppingLists } from './shopping-lists';
import { seedShoppingListItems } from './shopping-list-items';
import { seedUnits } from './units';
import { seedShoppingListUsers } from './shopping-list-users';

const prisma = new PrismaClient();

async function main() {
  try {
    await seedRoles();
    await seedUsers();
    await seedCategories();
    await seedShoppingLists();
    await seedUnits();
    await seedShoppingListItems();
    await seedShoppingListUsers();
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Successfully seed');
    prisma.$disconnect();
  }
}

main();
