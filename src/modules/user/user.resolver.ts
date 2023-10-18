import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { UserService } from './user.service';
import { User } from './user.model';
import { GetUserArgs } from './dto/args/get-user.args';
import { GetWithPaginationArgs } from '@/shared/dto/args/get-with-pagination.args';
import { CreateUserInput } from '@/modules/user/dto/inputs/create-user.input';
import { UpdateUserInput } from '@/modules/user/dto/inputs/update-user.input';
import { UpdateUserArgs } from '@/modules/user/dto/args/update-user.args';
import { JwtAuthGuard } from '@/modules/auth/guards/jwt-auth.guard';
import { CurrentUser } from '@/decorators/current-user.decorator';

@UseGuards(JwtAuthGuard)
@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async getCurrentUser(@CurrentUser() currentUser: User) {
    console.log('CURRENT USER', currentUser);
    return this.userService.getUser({ id: currentUser.id });
  }

  @Query(() => User)
  async getUser(@Args() getUserArgs: GetUserArgs) {
    return this.userService.getUser(getUserArgs);
  }

  @Query(() => [User])
  async getUsers(@Args() getUsersArgs: GetWithPaginationArgs) {
    return this.userService.getUsers(getUsersArgs);
  }

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.createUser(createUserInput);
  }

  @Mutation(() => User)
  async updateUser(
    @Args() updateUserArgs: UpdateUserArgs,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return this.userService.updateUser(updateUserArgs, updateUserInput);
  }

  @Mutation(() => User)
  async deleteUser(@Args() deleteUserArgs: UpdateUserArgs) {
    return this.userService.deleteUser(deleteUserArgs);
  }
}
