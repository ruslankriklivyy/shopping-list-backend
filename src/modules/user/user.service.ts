import { Injectable } from '@nestjs/common';

import { UserRepository } from './user.repository';
import { GetUserArgs } from './dto/args/get-user.args';
import { GetUsersArgs } from './dto/args/get-users.args';
import { CreateUserInput } from '@/modules/user/dto/inputs/create-user.input';
import { UpdateUserInput } from '@/modules/user/dto/inputs/update-user.input';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public getUser(getUserArgs: GetUserArgs) {
    return this.userRepository.getUser({
      id: getUserArgs.id,
      email: getUserArgs?.email,
    });
  }

  public getUsers(getUsersArgs: GetUsersArgs) {
    return this.userRepository.getUsers(getUsersArgs);
  }

  public createUser(createUserInput: CreateUserInput) {
    return this.userRepository.createUser(createUserInput);
  }

  public updateUser(id: number, updateUserInput: UpdateUserInput) {
    return this.userRepository.updateUser({ id }, updateUserInput);
  }
}
