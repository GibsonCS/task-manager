import type User from "../../core/entities/user";
import type { UserRepository } from "../../core/repositories/userRepository";
import type { UserDTO } from "../../core/use-cases/create-user/userDTO";

const users: UserDTO[] = [];
export default class UserRepositoryPostgres implements UserRepository {
  async save(item: UserDTO): Promise<UserDTO | undefined> {
    users.push(item);
    return users[0];
  }
}
