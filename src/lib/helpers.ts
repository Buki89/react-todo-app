import { Task, SortType } from "../store/types";

export const filterBy = (filter: string, taskList: Array<Task>) => {
  switch (filter) {
    case SortType.completed:
      return taskList.filter((task: Task) => task.isCompleted);

    case SortType.incompleted:
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
    case SortType.completed:
      return taskList.filter((task: Task) => task.isCompleted).length;

    case SortType.incompleted:
      return taskList.filter((task: Task) => !task.isCompleted).length;

    case SortType.allTasks:
      return taskList.length;
  }
};
