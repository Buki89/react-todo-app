import { ThunkAction } from "redux-thunk";

export interface State {
  tasks: TodoState;
  auth: AuthState;
  filter: FilterState;
}

export type TodoState = Array<Task>;

export interface AuthState {
  uid: string;
}
export interface FilterState {
  filter: string;
  ascendingSort: boolean;
  pageNumber: number;
}

// TODO: sjednotit naming settingTasks -> setTasks

export enum TaskAction {
  addTask = "ADD_TASK",
  deleteTask = "DELETE_TASK",
  editTask = "EDIT_TASK",
  searchByName = "SEARCH_BY_NAME",
  completingTask = "COMPLETING_TASK",
  settingTasks = "SET_TASKS"
}

export enum FilterAction {
  FilterChange = "FILTER_CHANGE",
  SortMethod = "SORT_METHOD",
  ShowPage = "SHOW_PAGE"
}

export interface Task {
  task: string;
  id: string;
  isCompleted?: boolean;
}

export type Action =
  | {
      type: TaskAction.addTask;
      payload: Task;
    }
  | {
      type: TaskAction.deleteTask;
      payload: { id: string };
    };

export enum AuthAction {}

export type ThunkResult<R> = ThunkAction<R, State, undefined, Action>;
