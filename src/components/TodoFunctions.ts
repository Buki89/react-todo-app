import { Task } from "../types/types";

// filterStatusCompletion
export const isCompletedFilter = (filter: string, taskList: Array<Task>) => {
  switch (filter) {
    // TODO: enum pyco
    case "Completed":
      return taskList.filter((item: Task) => item.isCompleted);

    case "InCompleted":
      return taskList.filter((item: Task) => !item.isCompleted);

    default:
      return taskList;
  }
};

// TODO: types
export const sorting = isAscending => {
  switch (isAscending) {
    case true:
      return (a, b) => (a.task > b.task ? 1 : -1);
    case false:
      return (a, b) => (a.task < b.task ? 1 : -1);
  }
};
