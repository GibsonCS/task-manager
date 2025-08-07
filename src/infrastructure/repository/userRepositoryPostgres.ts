import type User from "../../core/entities/user";
import type { UserRepository } from "../../core/repositories/userRepository";

export default class UserRepositoryPostgres implements UserRepository {
  async save(item: User): Promise<User | undefined> {
    return item;
  }
}
