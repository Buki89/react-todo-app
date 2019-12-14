import { Task } from "../types/types";

export const filtering = (filter: string, taskList: Array<Task>) => {
  switch (filter) {
    case "Completed":
      return taskList.filter((item: Task) => item.isCompleted);

    case "InCompleted":
      return taskList.filter((item: Task) => !item.isCompleted);

    default:
      return taskList;
  }
};
