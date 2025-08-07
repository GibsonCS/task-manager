import { describe, test, expect } from "@jest/globals";
import CreateTask from "../src/core/use-cases/create-task/createTask";
import TaskRepositoryPostgres from "../src/infrastructure/repository/taskRepositoryPostgres";
import type { TaskDTO } from "../src/core/use-cases/create-task/taskDTO";

describe("createTask", () => {
  test("Should return null if a task not was created", async () => {
    const createTask = new CreateTask(new TaskRepositoryPostgres());

    const input: TaskDTO = {
      name: "Ler libro",
      startDate: new Date(),
      endTime: new Date(),
    };

    const output = null;

    const result = await createTask.execute(input);

    expect(result).toStrictEqual(output);
  });
});
