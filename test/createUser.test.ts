import { describe, test, expect } from "@jest/globals";
import User from "../src/core/entities/user";
import CreateUser from "../src/core/use-cases/createUser";
import UserRepositoryPostgres from "../src/infrastructure/repository/userRepositoryPostgres";

describe("createUser", () => {
  test("should return a created user", async () => {
    const user = new User("Gibson", "admin", "123");

    const createUser = new CreateUser(new UserRepositoryPostgres());
    const result = await createUser.execute(user);

    expect(result).toStrictEqual(user);
  });
});
