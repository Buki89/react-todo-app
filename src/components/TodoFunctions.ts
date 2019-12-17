import { Task, FilterState } from "../types/types";

export const filterStatusCompletion = (
  filter: string,
  taskList: Array<Task>
) => {
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

export const sortAlphabetically = (sort: boolean) => {
  if (sort) {
    return (a: Task, b: Task) =>
      a.task.toLocaleLowerCase() > b.task.toLocaleLowerCase() ? 1 : -1;
  } else {
    return (a: Task, b: Task) =>
      a.task.toLocaleLowerCase() < b.task.toLocaleLowerCase() ? 1 : -1;
  }
};

export const renderRefToPages = (
  taskList: Array<Task>,
  filterList: FilterState
) => {
  const arr = [];
  switch (filterList.displayTasks) {
    case "Completed": {
      const numberOfPages =
        taskList.filter((item: Task) => item.isCompleted).length / 10;
      for (let i = 0; i < numberOfPages; i++) {
        arr.push(i + 1);
      }
      return arr;
    }

    case "InCompleted": {
      const numberOfPages =
        taskList.filter((item: Task) => !item.isCompleted).length / 10;
      for (let i = 0; i < numberOfPages; i++) {
        arr.push(i + 1);
      }
      return arr;
    }

    default: {
      const numberOfPages = taskList.length / 10;
      for (let i = 0; i < numberOfPages; i++) {
        arr.push(i + 1);
      }
      return arr;
    }
  }
};

export const numberOfTasks = (taskList: Array<Task>, filterBy: string) => {
  switch (filterBy) {
    case "Completed":
      return taskList.filter((item: Task) => item.isCompleted).length;

    case "InCompleted":
      return taskList.filter((item: Task) => !item.isCompleted).length;

    case "Total":
      return taskList.length;
  }
};
