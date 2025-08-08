import type User from "../entities/user";
import type { UserDTO } from "../use-cases/create-user/userDTO";
import type { IBaseRepository } from "./baseRepository";

export interface UserRepository extends IBaseRepository<UserDTO> {}
