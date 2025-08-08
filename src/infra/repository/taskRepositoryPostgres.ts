import type { TaskRepository } from "../../core/repositories/taskRepository";
import type { TaskDTO } from "../../dtos/taskDTO";

const tasks: TaskDTO[] = [];
export default class TaskRepositoryPostgres implements TaskRepository {
	async save(item: TaskDTO): Promise<TaskDTO | undefined> {
		tasks.push(item);
		return tasks[0];
	}
}
