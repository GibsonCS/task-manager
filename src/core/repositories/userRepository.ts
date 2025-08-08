import type { UserDTO } from "../../dtos/userDTO";
import type { IBaseRepository } from "./baseRepository";

export interface UserRepository extends IBaseRepository<UserDTO> {}
