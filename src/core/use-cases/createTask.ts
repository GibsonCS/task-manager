import type { TaskDTO } from "../../dtos/taskDTO";
import InvalidTask from "../../errs/invalidTask";
import Task from "../entities/task";
import type { TaskRepository } from "../repositories/taskRepository";

export default class CreateTask {
	private taskRepository: TaskRepository;

	constructor(taskRepository: TaskRepository) {
		this.taskRepository = taskRepository;
	}

	async execute(task: TaskDTO) {
		try {
			const { name, startDate, endTime } = Task.create(task);

			const taskDTO: TaskDTO = {
				name,
				startDate,
				endTime,
			};

			return await this.taskRepository.save(taskDTO);
		} catch (error) {
			if (error instanceof InvalidTask) {
				return { success: false, message: error.message };
			}
		}
	}
}
