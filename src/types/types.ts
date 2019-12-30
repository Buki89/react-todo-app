import { ThunkAction } from "redux-thunk";

export interface State {
  tasks: TodoState;
  auth: AuthState;
  filter: FilterState;
}

export type TodoState = Array<Task>;

export interface Task {
  taskName: string;
  id: string;
  createdAt: string;
  isCompleted?: boolean;
}

export interface AuthState {
  uid: string;
  error: string;
}

export interface FilterState {
  displayTasks: string;
  sortBy: string;
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
  logout = "LOGOUT",
  loginError = "LOGIN_ERROR"
}

export enum Filter {
  completed = "completed",
  incompleted = "inCompleted",
  allTasks = "allTasks"
}

export enum SortType {
  dateNewest = "dateNewest",
  dateOldest = "dateOldest",
  fromAToZ = "fromAToZ",
  fromZToA = "fromZToA"
}

export type Action =
  | {
      type: TaskAction.addTask;
      payload: Task;
    }
  | {
      type: TaskAction.deleteTask;
      payload: { id: string };
    }
  | {
      type: FilterAction.filterChange;
      payload: { filter: Filter };
    }
  | {
      type: FilterAction.showPage;
      payload: {
        pageNumber: number;
      };
    }
  | {
      type: AuthAction.logout;
    }
  | {
      type: FilterAction.sortMethod;
      payload: {
        value: SortType;
      };
    }
  | {
      type: AuthAction.login;
      uid: string;
    };

export type ThunkResult<R> = ThunkAction<R, State, undefined, Action>;
