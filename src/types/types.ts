export interface Task {
  task: string;
  category: string;
  id?: string;
  isCompleted?: boolean;
  sortBy?: string;
}

export interface State {
  task: string;
  category: string;
}

export interface Actions {
  taskAdd?: (
    param: Task
  ) => { type: TaskAction.addTask; payload: Task; id: string };
  startTaskAdd: (param: Task) => {};
  removeTask?: ({
    id: string
  }) => { type: TaskAction.removeTask; payload: { id: string } };
  startRemoveTask: ({ id: string }) => {};
  editTask?: (param: Task) => { type: TaskAction.editTask; payload: Task };
  startEditTask: ({ id, task, category: string }) => {};
  completeTask?: ({
    id
  }) => { type: TaskAction.completingTask; payload: { id: string } };
  startCompleteTask: ({ id: string }) => {};
}

export enum TaskAction {
  addTask = "ADD_TASK",
  removeTask = "REMOVE_TASK",
  editTask = "EDIT_TASK",
  searchByName = "SEARCH_BY_NAME",
  completingTask = "COMPLETING_TASK",
  settingTasks = "SET_TASKS"
}
