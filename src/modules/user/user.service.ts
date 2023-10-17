import { Injectable } from '@nestjs/common';

import { UserRepository } from './user.repository';
import { GetUserArgs } from './dto/args/get-user.args';
import { CreateUserInput } from '@/modules/user/dto/inputs/create-user.input';
import { UpdateUserInput } from '@/modules/user/dto/inputs/update-user.input';
import { GetWithPaginationArgs } from '@/shared/dto/args/get-with-pagination.args';
import { UpdateUserArgs } from '@/modules/user/dto/args/update-user.args';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public getUser(getUserArgs: GetUserArgs) {
    return this.userRepository.getUser({
      id: getUserArgs.id,
      email: getUserArgs?.email,
    });
  }

  public getUsers(getUsersArgs: GetWithPaginationArgs) {
    return this.userRepository.getUsers(getUsersArgs);
  }

  public createUser(createUserInput: CreateUserInput) {
    return this.userRepository.createUser(createUserInput);
  }

  public updateUser(
    updateUserArgs: UpdateUserArgs,
    updateUserInput: UpdateUserInput,
  ) {
    return this.userRepository.updateUser(updateUserArgs, updateUserInput);
  }

  public deleteUser(deleteUserArgs: UpdateUserArgs) {
    return this.userRepository.deleteUser(deleteUserArgs);
  }
}
