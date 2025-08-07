import type User from "../entities/user";
import type { IBaseRepository } from "./baseRepository";

export interface UserRepository extends IBaseRepository<User> {}
