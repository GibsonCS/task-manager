import { describe, test, expect } from "@jest/globals";
import CreateTask from "../src/core/use-cases/createTask";
import TaskRepositoryPostgres from "../src/infrastructure/repository/taskRepositoryPostgres";
import type { TaskDTO } from "../src/dtos/taskDTO";

describe("createTask", () => {
  test("Should return '{message: insert a valid date, success: false}' if the startDate is invalid ", async () => {
    const createTask = new CreateTask(new TaskRepositoryPostgres());

    const input: TaskDTO = {
      name: "Ler libro",
      startDate: new Date("2025-08-08T00:42:58.972Z"),
      endTime: new Date("2025-08-08T00:41:58.972Z"),
    };

    const output = { message: "insert a valid date", success: false };

    const result = await createTask.execute(input);

    expect(result).toStrictEqual(output);
  });

  test("should return '{message: insert a valid name, success: false}' created task", async () => {
    const createTask = new CreateTask(new TaskRepositoryPostgres());

    const input: TaskDTO = {
      name: "Le",
      startDate: new Date(),
      endTime: new Date(),
    };

    const output = { message: "insert a valid name", success: false };

    const result = await createTask.execute(input);

    expect(result).toStrictEqual(output);
  });

  test("should return a created task", async () => {
    const createTask = new CreateTask(new TaskRepositoryPostgres());

    const input: TaskDTO = {
      name: "Ler livro",
      startDate: new Date("2025-08-07T00:42:58.972Z"),
      endTime: new Date("2025-08-08T00:42:58.972Z"),
    };

    const output = {
      name: "Ler livro",
      startDate: new Date("2025-08-07T00:42:58.972Z"),
      endTime: new Date("2025-08-08T00:42:58.972Z"),
    };

    const result = await createTask.execute(input);

    expect(result).toStrictEqual(output);
  });
});
