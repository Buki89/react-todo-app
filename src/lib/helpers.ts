import { Task, SortType } from "../store/types";
import theme from "../themes/theme";

export const filterBy = (
  filter: string,
  taskList: Array<Task>
): Array<Task> => {
  switch (filter) {
    case SortType.completed:
      return taskList.filter((task: Task) => task.isCompleted);

    case SortType.incompleted:
      return taskList.filter((task: Task) => !task.isCompleted);

    default:
      return taskList;
  }
};

const getDate = (date: string): number => new Date(date).getTime();

// TODO: could be (a: Task, b: Task): number reused somehow?
export const sortBy = (sortBy: string): ((a: Task, b: Task) => number) => {
  switch (sortBy) {
    case SortType.dateOldest:
      return (a: Task, b: Task): number =>
        getDate(a.createdAt) - getDate(b.createdAt);
    case SortType.fromAToZ:
      return (a: Task, b: Task): number =>
        a.taskName.toLocaleLowerCase() > b.taskName.toLocaleLowerCase()
          ? 1
          : -1;
    case SortType.fromZToA:
      return (a: Task, b: Task): number =>
        a.taskName.toLocaleLowerCase() < b.taskName.toLocaleLowerCase()
          ? 1
          : -1;
    case SortType.dateNewest:
    default:
      return (a: Task, b: Task): number =>
        getDate(b.createdAt) - getDate(a.createdAt);
  }
};

export const numberOfTasks = (
  taskList: Array<Task>,
  filterBy: string
): number => {
  switch (filterBy) {
    case SortType.completed:
      return taskList.filter((task: Task) => task.isCompleted).length;

    case SortType.incompleted:
      return taskList.filter((task: Task) => !task.isCompleted).length;

    case SortType.allTasks:
      return taskList.length;
  }
};

const mediaQuery = (breakPoint: string): boolean =>
  window ? window.matchMedia(`(max-width: ${breakPoint})`).matches : false;

export const iconSize = (size: number): number => {
  const iconMobileSize = 0.8;

  if (mediaQuery(theme.breakpoints.mobile)) {
    return size * iconMobileSize;
  } else {
    return size;
  }
};

export const anyChar = (str: string): boolean => /\S+/.test(str);
