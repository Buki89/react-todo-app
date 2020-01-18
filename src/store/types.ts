import { ThunkAction } from "redux-thunk";

export interface State {
  tasks: TasksState;
  auth: AuthState;
  filter: FilterState;
}

export type TasksState = Array<Task>;

export interface Task {
  taskName: string;
  id: string;
  createdAt: string;
  isCompleted: boolean;
}

export interface AuthState {
  uid: string;
  error: string;
}

export interface FilterState {
  filterBy: string;
  sortBy: string;
  currentPage: number;
}

export enum TaskAction {
  addTask = "ADD_TASK",
  deleteTask = "DELETE_TASK",
  editTask = "EDIT_TASK",
  completeTask = "COMPLETE_TASK",
  setTasks = "SET_TASKS"
}

export enum FilterAction {
  filterByChange = "FILTER_BY_CHANGE",
  sortByChange = "SORT_BY_CHANGE",
  getPageNumber = "GET_PAGE_NUMBER"
}

export enum AuthAction {
  login = "LOGIN",
  logout = "LOGOUT",
  loginError = "LOGIN_ERROR"
}

export enum SortType {
  dateNewest = "dateNewest",
  dateOldest = "dateOldest",
  fromAToZ = "fromAToZ",
  fromZToA = "fromZToA",
  completed = "completed",
  incompleted = "inCompleted",
  allTasks = "allTasks"
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
      type: TaskAction.editTask;
      payload: { id: string; taskName: string; isCompleted: boolean };
    }
  | {
      type: TaskAction.completeTask;
      payload: { id: string };
    }
  | {
      type: TaskAction.setTasks;
      payload: {
        tasks: Array<Task>;
      };
    }
  | {
      type: FilterAction.filterByChange;
      payload: { filter: SortType };
    }
  | {
      type: FilterAction.getPageNumber;
      payload: {
        pageNumber: number;
      };
    }
  | {
      type: FilterAction.sortByChange;
      payload: {
        sort: SortType;
      };
    }
  | {
      type: AuthAction.login;
      uid: string;
    }
  | {
      type: AuthAction.logout;
    }
  | {
      type: AuthAction.loginError;
    };

export type ThunkResult<R> = ThunkAction<R, State, undefined, Action>;
