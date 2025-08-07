import type { TaskDTO } from "../use-cases/create-task/taskDTO";

export default class Task {
  private name: string;
  private startDate: Date;
  private endTime: Date;

  private constructor(name: string, startTime: Date, endTime: Date) {
    this.name = name;
    this.startDate = startTime;
    this.endTime = endTime;
  }

  public static create(task: TaskDTO): Task | null {
    this.checkStartTime(task.startDate, task.endTime) === true
      ? new Task(task.name, task.startDate, task.endTime)
      : null;

    return null;
  }

  private static checkStartTime(startTime: Date, endTime: Date): Boolean {
    return startTime > endTime;
  }

  //   isLeastThree(name: string) {
  //     if(name.length < 3)
  //   }
}
