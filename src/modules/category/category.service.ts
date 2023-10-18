import { Injectable } from '@nestjs/common';

import { CategoryRepository } from '@/modules/category/category.repository';
import { GetCategoryArgs } from '@/modules/category/dto/args/get-category.args';
import { GetWithPaginationArgs } from '@/shared/dto/args/get-with-pagination.args';
import { CreateCategoryInput } from '@/modules/category/dto/inputs/create-category.input';
import { UpdateCategoryInput } from '@/modules/category/dto/inputs/update-category.input';
import { UpdateCategoryArgs } from '@/modules/category/dto/args/update-category.args';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  public getCategory(getCategoryArgs: GetCategoryArgs) {
    return this.categoryRepository.getCategory(getCategoryArgs);
  }

  public getCategories(getWithPaginationArgs: GetWithPaginationArgs) {
    return this.categoryRepository.getCategories(getWithPaginationArgs);
  }

  public createCategory(createCategoryInput: CreateCategoryInput) {
    return this.categoryRepository.createCategory(createCategoryInput);
  }

  public updateCategory(
    updateCategoryArgs: UpdateCategoryArgs,
    updateCategoryInput: UpdateCategoryInput,
  ) {
    return this.categoryRepository.updateCategory(
      updateCategoryArgs,
      updateCategoryInput,
    );
  }

  public deleteCategory(deleteCategoryArgs: UpdateCategoryArgs) {
    return this.categoryRepository.deleteCategory(deleteCategoryArgs);
  }
}
