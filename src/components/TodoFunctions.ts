import { Task } from "../types/types";

export const isCompletedFilter = (filter: string, taskList: Array<Task>) => {
  switch (filter) {
    case "Completed":
      return taskList.filter((item: Task) => item.isCompleted);

    case "InCompleted":
      return taskList.filter((item: Task) => !item.isCompleted);

    default:
      return taskList;
  }
};

export const sorting = isAscending => {
  switch (isAscending) {
    case true:
      return (a, b) => (a.task > b.task ? 1 : -1);
    case false:
      return (a, b) => (a.task < b.task ? 1 : -1);
  }
};
