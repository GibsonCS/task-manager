import type { UserDTO } from "../../dtos/userDTO";
import InvalidUser from "../../errs/invalidUser";
import User from "../entities/user";
import type { UserRepository } from "../repositories/userRepository";

export default class CreateUser {
	private userRepository;

	constructor(userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

	async execute(user: UserDTO): Promise<UserDTO | undefined> {
		try {
			const { name, password, username } = User.create(user);

			const userDTO: UserDTO = {
				name,
				username,
				password,
			};

			await this.userRepository.save(userDTO);

			return {
				name,
				username,
				password,
			};
		} catch (err) {
			if (err instanceof InvalidUser) {
				throw err;
			}
		}
	}
}
