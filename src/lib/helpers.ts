import { Task, Filter, SortType } from "../types/types";

export const filterStatusCompletion = (
  filter: string,
  taskList: Array<Task>
) => {
  switch (filter) {
    case Filter.completed:
      return taskList.filter((task: Task) => task.isCompleted);

    case Filter.incompleted:
      return taskList.filter((task: Task) => !task.isCompleted);

    default:
      return taskList;
  }
};

const getDate = (date: string) => new Date(date).getTime();

export const sortBy = (sortBy: string) => {
  switch (sortBy) {
    case SortType.dateOldest:
      return (a: Task, b: Task) => getDate(a.createdAt) - getDate(b.createdAt);
    case SortType.fromAToZ:
      return (a: Task, b: Task) =>
        a.taskName.toLocaleLowerCase() > b.taskName.toLocaleLowerCase()
          ? 1
          : -1;
    case SortType.fromZToA:
      return (a: Task, b: Task) =>
        a.taskName.toLocaleLowerCase() < b.taskName.toLocaleLowerCase()
          ? 1
          : -1;
    case SortType.dateNewest:
    default:
      return (a: Task, b: Task) => getDate(b.createdAt) - getDate(a.createdAt);
  }
};

export const numberOfTasks = (taskList: Array<Task>, filterBy: string) => {
  switch (filterBy) {
    case Filter.completed:
      return taskList.filter((task: Task) => task.isCompleted).length;

    case Filter.incompleted:
      return taskList.filter((task: Task) => !task.isCompleted).length;

    case Filter.everything:
      return taskList.length;
  }
};
