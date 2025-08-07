import Task from "../../entities/task";
import type { TaskRepository } from "../../repositories/taskRepository";
import type { TaskDTO } from "./taskDTO";

export default class CreateTask {
  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  async execute(task: TaskDTO) {
    const newTask = Task.create(task);
    if (newTask) await this.taskRepository.save(task);
    return null;
  }
}
