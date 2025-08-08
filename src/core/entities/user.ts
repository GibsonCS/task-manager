import type { UserDTO } from "../../dtos/userDTO";
import InvalidUser from "../../errs/invalidUser";

export default class User {
	private _name: string;
	private _username: string;
	private _password: string;

	private constructor(name: string, username: string, password: string) {
		this._name = name;
		this._username = username;
		this._password = password;
	}

	public static create({ name, username, password }: UserDTO): User {
		if (!User.isValidUsername(username)) {
			throw new InvalidUser("username must be five or more characters");
		}

		if (!User.isValidName(name)) {
			throw new InvalidUser("name must be five or more characters");
		}

		return new User(name, username, password);
	}

	private static isValidUsername(username: string): boolean {
		return username.length >= 5;
	}

	private static isValidName(name: string) {
		return name.length >= 5;
	}

	get name(): string {
		return this._name;
	}

	get username(): string {
		return this._username;
	}

	get password(): string {
		return this._password;
	}
}
