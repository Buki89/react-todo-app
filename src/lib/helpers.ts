import { Task, Filter, SortType } from "../types/types";

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

const getDate = (date: string) => new Date(date).getTime();

export const sortBy = (sortBy: string) => {
  switch (sortBy) {
    case SortType.dateNewest:
      return (a: Task, b: Task) => getDate(b.createdAt) - getDate(a.createdAt);
    case SortType.dateOldest:
      return (a: Task, b: Task) => getDate(a.createdAt) - getDate(b.createdAt);
    case SortType.fromAToZ:
      return (a: Task, b: Task) =>
        a.task.toLocaleLowerCase() > b.task.toLocaleLowerCase() ? 1 : -1;
    case SortType.fromZToA:
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
