import type User from "../entities/user";
import type { UserRepository } from "../repositories/userRepository";

export default class CreateUser {
  private userRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(user: User) {
    return await this.userRepository.save(user);
  }
}
