import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CategoryService } from './category.service';
import { GetCategoryArgs } from '@/modules/category/dto/args/get-category.args';
import { GetWithPaginationArgs } from '@/shared/dto/args/get-with-pagination.args';
import { Category } from '@/modules/category/category.model';
import { CreateCategoryInput } from '@/modules/category/dto/inputs/create-category.input';
import { UpdateCategoryInput } from '@/modules/category/dto/inputs/update-category.input';
import { UpdateCategoryArgs } from '@/modules/category/dto/args/update-category.args';

@Resolver('Category')
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => Category)
  getCategory(@Args() getCategoryArgs: GetCategoryArgs) {
    return this.categoryService.getCategory(getCategoryArgs);
  }

  @Query(() => [Category])
  getCategories(@Args() getWithPaginationArgs: GetWithPaginationArgs) {
    return this.categoryService.getCategories(getWithPaginationArgs);
  }

  @Mutation(() => Category)
  createCategory(
    @Args('createCategoryInput') createCategoryInput: CreateCategoryInput,
  ) {
    return this.categoryService.createCategory(createCategoryInput);
  }

  @Mutation(() => Category)
  updateCategory(
    @Args() updateCategoryArgs: UpdateCategoryArgs,
    @Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput,
  ) {
    return this.categoryService.updateCategory(
      updateCategoryArgs,
      updateCategoryInput,
    );
  }

  @Mutation(() => Category)
  deleteCategory(@Args() updateCategoryArgs: UpdateCategoryArgs) {
    return this.categoryService.deleteCategory(updateCategoryArgs);
  }
}
