import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '@/shared/database/prisma.service';
import { Params } from '@/types/general/params';

@Injectable()
export class CategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  getCategory(where?: Prisma.CategoryWhereInput) {
    return this.prisma.category.findFirst({ where });
  }

  getCategories(params?: Params) {
    const { skip, take } = params;
    return this.prisma.category.findMany({ skip, take });
  }

  createCategory(data: Prisma.CategoryCreateInput) {
    return this.prisma.category.create({ data });
  }

  updateCategory(
    where: Prisma.CategoryWhereUniqueInput,
    data: Prisma.CategoryUpdateInput,
  ) {
    return this.prisma.category.update({ where, data });
  }

  deleteCategory(where?: Prisma.CategoryWhereUniqueInput) {
    return this.prisma.category.delete({ where });
  }
}
