import { describe, expect, test } from "@jest/globals";
import CreateUser from "../src/core/use-cases/createUser";
import type { UserDTO } from "../src/dtos/userDTO";
import UserRepositoryPostgres from "../src/infra/repository/userRepositoryPostgres";

describe("createUser", () => {
	test("should throw a InvalidUser with 'username must be five or more characters' message", async () => {
		const createUser = new CreateUser(new UserRepositoryPostgres());

		const input: UserDTO = {
			name: "gibson",
			username: "gb",
			password: "123456789",
		};

		await expect(createUser.execute(input)).rejects.toThrow(
			"username must be five or more characters",
		);
	});

	test("should throw a InvalidUser with the message 'name must be five or more characters'", async () => {
		const createUser = new CreateUser(new UserRepositoryPostgres());

		const input: UserDTO = {
			name: "b",
			username: "gibson.cruz",
			password: "123456789",
		};

		//"rejects.toThrow" used to async functions
		await expect(createUser.execute(input)).rejects.toThrow(
			"name must be five or more characters",
		);
	});

	test("should return a valid created user", async () => {
		const createdUser = new CreateUser(new UserRepositoryPostgres());

		const input: UserDTO = {
			name: "Gibson Cruz",
			username: "gibso.cruz",
			password: "1234568",
		};

		const output: UserDTO = {
			name: "Gibson Cruz",
			username: "gibso.cruz",
			password: "1234568",
		};

		const result = await createdUser.execute(input);

		expect(result).toStrictEqual(output);
	});
});
