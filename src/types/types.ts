import { ThunkAction } from "redux-thunk";

export interface State {
  tasks: TodoState;
  auth: AuthState;
  filter: FilterState;
}

export type TodoState = Array<Task>;

export interface Task {
  task: string;
  id: string;
  isCompleted?: boolean;
}

export interface AuthState {
  uid: string;
}

export interface FilterState {
  displayTasks: string;
  sortAlphabetically: boolean;
  pageNumber: number;
}

export enum TaskAction {
  addTask = "ADD_TASK",
  deleteTask = "DELETE_TASK",
  editTask = "EDIT_TASK",
  searchTask = "SEARCH_TASK",
  completeTask = "COMPLETE_TASK",
  setTasks = "SET_TASKS"
}

export enum FilterAction {
  filterChange = "FILTER_CHANGE",
  sortMethod = "SORT_METHOD",
  showPage = "SHOW_PAGE"
}

export enum AuthAction {
  login = "LOGIN",
  logout = "LOGOUT"
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

export type ThunkResult<R> = ThunkAction<R, State, undefined, Action>;
