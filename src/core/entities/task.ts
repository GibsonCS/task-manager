import InvalidTask from "../../errs/invalidTask";
import type { TaskDTO } from "../../dtos/taskDTO";

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
    if (!this.validName(name)) {
      throw new InvalidTask("insert a valid name");
    }

    if (!this.checkStartTime(startDate, endTime)) {
      throw new InvalidTask("insert a valid date");
    }

    return new Task(name, startDate, endTime);
  }

  private static checkStartTime(startTime: Date, endTime: Date): Boolean {
    return startTime < endTime;
  }

  private static validName(name: string): Boolean {
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
