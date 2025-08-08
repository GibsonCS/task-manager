import Task from "../../core/entities/task";
import type { TaskRepository } from "../../core/repositories/taskRepository";
import type { TaskDTO } from "../../dtos/taskDTO";

export default class TaskRepositoryPostgres implements TaskRepository {
  private tasks: any;

  async save(item: TaskDTO): Promise<TaskDTO | undefined> {
    this.tasks = [];
    this.tasks.push(item);
    return this.tasks[0];
  }
}
