import type Task from "../entities/task";
import type { TaskDTO } from "../use-cases/create-task/taskDTO";
import type { IBaseRepository } from "./baseRepository";

export interface TaskRepository extends IBaseRepository<TaskDTO> {}
