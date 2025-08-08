import type { TaskDTO } from "../../dtos/taskDTO";
import InvalidTask from "../../errs/invalidTask";

export default class Task {
	private _name: string;
	private _startDate: Date;
	private _endTime: Date;

	private constructor(name: string, startTime: Date, endTime: Date) {
		this._name = name;
		this._startDate = startTime;
		this._endTime = endTime;
	}

	public static create({ name, startDate, endTime }: TaskDTO): Task {
		if (!Task.validName(name)) {
			throw new InvalidTask("insert a valid name");
		}

		if (!Task.checkStartTime(startDate, endTime)) {
			throw new InvalidTask("insert a valid date");
		}

		return new Task(name, startDate, endTime);
	}

	private static checkStartTime(startTime: Date, endTime: Date): boolean {
		return startTime < endTime;
	}

	private static validName(name: string): boolean {
		return name.length > 3;
	}

	get name(): string {
		return this._name;
	}

	get startDate(): Date {
		return this._startDate;
	}

	get endTime(): Date {
		return this._endTime;
	}
}
