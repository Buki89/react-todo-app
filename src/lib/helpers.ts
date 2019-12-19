import { Task, Filter } from "../types/types";

export const filterStatusCompletion = (
  filter: string,
  taskList: Array<Task>
) => {
  switch (filter) {
    case Filter.completed:
      return taskList.filter((item: Task) => item.isCompleted);

    case Filter.incompleted:
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

export const numberOfTasks = (taskList: Array<Task>, filterBy: string) => {
  switch (filterBy) {
    case Filter.completed:
      return taskList.filter((item: Task) => item.isCompleted).length;

    case Filter.incompleted:
      return taskList.filter((item: Task) => !item.isCompleted).length;

    case Filter.everything:
      return taskList.length;
  }
};
