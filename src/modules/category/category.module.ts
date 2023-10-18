import { Module } from '@nestjs/common';

import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { PrismaModule } from '@/shared/database/prisma.module';
import { CategoryRepository } from '@/modules/category/category.repository';

@Module({
  imports: [PrismaModule],
  providers: [CategoryResolver, CategoryService, CategoryRepository],
})
export class CategoryModule {}
