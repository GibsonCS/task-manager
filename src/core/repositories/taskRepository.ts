import type Task from "../entities/task";
import type { TaskDTO } from "../../dtos/taskDTO";
import type { IBaseRepository } from "./baseRepository";

export interface TaskRepository extends IBaseRepository<TaskDTO> {}
